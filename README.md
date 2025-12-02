# Diego Aguirre - Portfolio

A modern, responsive portfolio website built with Astro, React, and Tailwind CSS featuring smooth animations, internationalization (English/Spanish), dynamic content, and a fully functional contact form with server-side validation.

## 🚀 Features

- **Modern Design**: Clean, professional design with purple/green gradient accents and smooth animations
- **Internationalization**: Full support for English and Spanish languages
- **Responsive**: Fully responsive design that works on all devices with mobile-first approach
- **Smooth Animations**: Framer Motion powered animations with scroll-based effects
- **Dynamic Components**: React-powered interactive components (rotating text, contact form)
- **Contact Form**: Fully functional contact form with client-side and server-side validation
- **Email Integration**: Automated email sending via Resend API
- **Rate Limiting**: Redis-based rate limiting with Upstash to prevent spam (3 requests per 60 seconds)
- **Form Validation**: Shared Zod schemas for consistent validation on client and server
- **Performance**: Built with Astro with SSR for optimal performance and SEO
- **Markdown Support**: Rich text formatting with Marked library
- **Accessibility**: Designed with accessibility best practices
- **Security**: XSS sanitization, CSRF protection, and IP-based rate limiting

## 🛠️ Tech Stack

### Core
- **Framework**: [Astro](https://astro.build/) 5.11.0 (SSR mode)
- **UI Library**: [React](https://react.dev/) 19.2.0
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Vercel](https://vercel.com/) with SSR adapter

### Styling & Animation
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.1.11
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (motion 12.23.24)
- **UI Components**: Custom components with `class-variance-authority`
- **Fonts**: [Inter Variable](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://www.jetbrains.com/lp/mono/), Figtree, Roboto

### Form & Validation
- **Form Management**: [React Hook Form](https://react-hook-form.com/) 7.67.0
- **Validation**: [Zod](https://zod.dev/) 4.1.13
- **Form Resolver**: [@hookform/resolvers](https://github.com/react-hook-form/resolvers) 5.2.2
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) 2.0.7

### Backend & APIs
- **Email Service**: [Resend](https://resend.com/) 6.5.2
- **Rate Limiting**: [Upstash Redis](https://upstash.com/) 1.35.7 + [@upstash/ratelimit](https://github.com/upstash/ratelimit) 2.0.7

### Other
- **Markdown**: [Marked](https://marked.js.org/) 17.0.0
- **Icons**: [Lucide React](https://lucide.dev/) 0.553.0
- **Utilities**: `clsx`, `tailwind-merge`

## 🎨 Sections

1. **Hero**: Introduction with animated rotating text badge, profile image, and call-to-action buttons
2. **About**: Personal description, categorized skills (Frontend, Backend, Tools), and responsive profile image
3. **Experience**: Professional experience timeline with alternating layout, scroll animations, technology badges, and markdown-formatted descriptions
4. **Projects**: Featured projects with technologies, descriptions, and links
5. **Contact**: Interactive contact form with real-time validation, toast notifications, and social media links

## 🌐 Internationalization

The portfolio supports two languages with complete translations:
- **English** (`/en`)
- **Spanish** (`/es`)

Language strings are managed in `src/i18n/index.ts`. All content including navigation, sections, and data files are fully bilingual.

## ✨ Key Components

### ContactForm Component (React + React Hook Form + Zod)
- Client-side validation with real-time error messages
- Server-side validation using shared Zod schemas
- Bilingual error messages (English/Spanish)
- Loading states and toast notifications
- Rate limiting protection (3 requests per 60 seconds)
- Email sending via Resend API
- XSS sanitization for security

### RotatingText Component (React + Framer Motion)
- Dynamic width calculation for smooth transitions
- Spring animations with synchronized timing
- Auto-rotation through multiple text options
- Gradient background with bold text styling

### Experience Timeline
- Alternating left-right layout on desktop
- Scroll-based fade-in animations
- Markdown support for rich text descriptions
- Technology badges with hover effects
- Work type indicators (Remote/Hybrid/On-site)
- Gradient timeline with animated nodes

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/idiegoo/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Resend API Key (for email sending)
   RESEND_API_KEY=your_resend_api_key_here
   
   # Upstash Redis (for rate limiting)
   UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url_here
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token_here
   ```
   
   **Get your credentials:**
   - **Resend API**: Sign up at [resend.com](https://resend.com/) and create an API key
   - **Upstash Redis**: Sign up at [console.upstash.com](https://console.upstash.com/) and create a Redis database
   
   See `CONTACT_SETUP.md` and `UPSTASH_SETUP.md` for detailed setup instructions.

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 Customization

### Contact Form Setup

The contact form requires API keys for:
- **Resend**: Email delivery service
- **Upstash Redis**: Rate limiting storage

See detailed setup instructions in:
- `CONTACT_SETUP.md` - Email configuration
- `UPSTASH_SETUP.md` - Rate limiting setup

### Adding New Languages

1. Add language to `src/i18n/index.ts`
2. Update `src/data/experience.ts` with new language key
3. Update `src/lib/validation.ts` with validation messages
4. Create new page in `src/pages/[lang].astro`
5. Update navigation links

### Adding New Experience

1. Update `src/data/experience.ts` with new entry in both `en` and `es` arrays
2. Supports markdown formatting in descriptions (e.g., `**bold text**`)
3. Include technologies, work type (remote/hybrid/onsite), and period

### Adding New Projects

1. Update `src/data/projects.ts`
2. Add project images to `public/images/`
3. Projects will automatically appear in the Projects section

### Modifying Skills

Update the skills data in `src/data/skills.ts` organized by category (frontend, backend, tools).

### Customizing Form Validation

Edit `src/lib/validation.ts` to modify:
- Validation rules (min/max lengths)
- Error messages in multiple languages
- Form field requirements

## 🔧 Available Scripts

- `pnpm dev` - Start development server at `http://localhost:4321`
- `pnpm build` - Build for production (SSR optimized)
- `pnpm preview` - Preview production build locally
- `pnpm astro ...` - Run Astro CLI commands

## 🚀 Deployment

This portfolio is optimized for deployment on **Vercel**:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
4. Deploy!

The project uses:
- **SSR mode** with `@astrojs/vercel` adapter
- **Edge Functions** for API routes
- **Automatic deployments** on push to main branch

## 📱 Responsive Design

The portfolio is designed mobile-first with breakpoints:
- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: > 1024px (lg, xl)

Special considerations:
- Profile image positioning (top on mobile, left on desktop)
- Timeline layout (vertical on mobile, alternating on desktop)
- Navigation (hamburger menu on mobile, full nav on desktop)
- Centered content with proper alignment across all breakpoints

## ⚡ Performance

- **SSR (Server-Side Rendering)**: Pre-rendered HTML for fast initial load
- **Astro Islands**: Zero JavaScript by default, partial hydration for interactive components
- **Optimized Bundle**: Only essential JavaScript for interactive features (contact form, animations)
- **Edge Functions**: Deployed on Vercel with edge runtime
- **SVG Graphics**: Crisp scaling at any resolution
- **Fast Loading**: Optimized for Core Web Vitals
- **Redis Caching**: Rate limiting with minimal latency via Upstash

## 🎨 Design System

- **Color Palette**: Dark backgrounds with purple (#a855f7) and green (#22c55e) accents
- **Typography**: Inter Variable for body, JetBrains Mono for code, Figtree and Roboto as alternatives
- **Spacing**: Consistent spacing scale using Tailwind's utility classes
- **Animations**: Smooth transitions with Framer Motion spring physics
- **Components**: Reusable, composable component architecture
- **Forms**: Accessible form inputs with error states and validation feedback
- **Notifications**: Toast notifications via Sonner for user feedback

## 🔒 Security Features

- **Input Validation**: Zod schemas for type-safe validation on client and server
- **XSS Protection**: HTML sanitization for all user inputs
- **Rate Limiting**: Redis-based rate limiting (3 requests per 60 seconds per IP)
- **CSRF Protection**: Server-side validation of all form submissions
- **IP Detection**: Accurate IP detection using Vercel headers to prevent spoofing
- **Environment Variables**: Sensitive credentials stored securely in environment variables
- **Error Handling**: Graceful error handling with user-friendly messages

## 👨‍💻 Author

**Diego Aguirre**
- GitHub: [@idiegoo](https://github.com/idiegoo)
- LinkedIn: [Diego Aguirre](https://linkedin.com/in/idiegoo)
- Email: idiegocs9@gmail.com

## 📄 License

This project is open source and available for personal and commercial use.

---

⭐ Star this repository if you found it helpful!
