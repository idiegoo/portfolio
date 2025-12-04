import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteURL = site?.toString() || 'https://idiegoo.vercel.app/';
  // Ensure trailing slash for proper URL construction
  const baseURL = siteURL.endsWith('/') ? siteURL : `${siteURL}/`;
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- English version (default, no prefix) -->
  <url>
    <loc>${baseURL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseURL}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${baseURL}es"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseURL}"/>
  </url>
  
  <!-- Spanish version -->
  <url>
    <loc>${baseURL}es</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseURL}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${baseURL}es"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseURL}"/>
  </url>
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
