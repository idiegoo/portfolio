import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { contactSchema, type ContactFormData } from '../../lib/validation';

/*---------- Contact form validation at server side ----------*/

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const redis = new Redis({
  url: import.meta.env.UPSTASH_REDIS_REST_URL,
  token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
});

// Rate limiter: 2 requests per 60 seconds per IP
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(2, '60 s'),
  analytics: true,
  prefix: 'ratelimit:contact',
});

// Penalty tracking for repeated violations
const PENALTY_PREFIX = 'penalty:contact:';
const PENALTY_MULTIPLIER = 2; // Double the timeout each time
const MAX_PENALTY_MINUTES = 60; // Max 1 hour penalty

// Sanitize function to prevent XSS
function sanitizeHtml(str: string): string {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // Get real client IP from Vercel headers (prevents IP spoofing)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const vercelIp = request.headers.get('x-vercel-forwarded-for');

    // Prefer Vercel's IP header, then x-real-ip, then x-forwarded-for, fallback to clientAddress
    const ip = vercelIp || realIp || forwardedFor?.split(',')[0].trim() || clientAddress || 'unknown';

    // Check if IP is currently under penalty (timeout)
    const penaltyKey = `${PENALTY_PREFIX}${ip}`;
    const penaltyData = await redis.get<{ until: number; violations: number }>(penaltyKey);
    
    if (penaltyData && Date.now() < penaltyData.until) {
      const waitTime = Math.ceil((penaltyData.until - Date.now()) / 1000);
      const waitMinutes = Math.ceil(waitTime / 60);
      
      return new Response(
        JSON.stringify({
          success: false,
          message: `Too many violations. You are temporarily blocked. Please try again in ${waitMinutes} minute${waitMinutes > 1 ? 's' : ''}.`,
          penaltyInfo: {
            violations: penaltyData.violations,
            waitTime,
            unblockAt: new Date(penaltyData.until).toISOString(),
          },
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': waitTime.toString(),
          },
        }
      );
    }

    // Check rate limit with Upstash Redis
    const { success, limit, remaining, reset } = await ratelimit.limit(ip);

    if (!success) {
      const resetDate = new Date(reset);
      
      // Track violations and apply incremental penalty
      const currentViolations = penaltyData?.violations || 0;
      const newViolations = currentViolations + 1;
      
      // Calculate penalty time: 1 min * (2^violations), capped at MAX_PENALTY_MINUTES
      const penaltyMinutes = Math.min(
        1 * Math.pow(PENALTY_MULTIPLIER, newViolations),
        MAX_PENALTY_MINUTES
      );
      const penaltyUntil = Date.now() + (penaltyMinutes * 60 * 1000);
      
      // Store penalty in Redis with expiration
      await redis.set(
        penaltyKey,
        { until: penaltyUntil, violations: newViolations },
        { ex: Math.ceil(penaltyMinutes * 60) }
      );
      
      return new Response(
        JSON.stringify({
          success: false,
          message: `Too many requests. ${newViolations > 1 ? `Violation #${newViolations}. ` : ''}You've been temporarily blocked for ${penaltyMinutes} minute${penaltyMinutes > 1 ? 's' : ''}.`,
          rateLimitInfo: {
            limit,
            remaining: 0,
            reset: resetDate.toISOString(),
            violations: newViolations,
            penaltyMinutes,
          },
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': reset.toString(),
            'Retry-After': (penaltyMinutes * 60).toString(),
          },
        }
      );
    }

    // Successful request - clear penalty if exists
    if (penaltyData) {
      await redis.del(penaltyKey);
    }

    // Parse and validate request body with Zod
    const body = await request.json();

    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((err) => err.message).join(', ');
      console.error('Validation errors:', validationResult.error.issues); // Debug log
      return new Response(
        JSON.stringify({
          success: false,
          message: errors,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Extract and sanitize data
    const { name, email, message }: ContactFormData = validationResult.data;
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedMessage = message.trim();

    // Sanitize inputs for HTML display to prevent XSS
    const sanitizedName = sanitizeHtml(trimmedName);
    const sanitizedEmail = sanitizeHtml(trimmedEmail);
    const sanitizedMessage = sanitizeHtml(trimmedMessage);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contacto Portafolio <onboarding@resend.dev>',
      to: ['idiegocs9@gmail.com'],
      replyTo: trimmedEmail,
      subject: `Contacto portafolio de ${trimmedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #a855f7;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Este mensaje fue enviado desde el formulario de contacto del portafolio.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Failed to send email. Please try again later.',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email sent successfully!',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'An unexpected error occurred.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
