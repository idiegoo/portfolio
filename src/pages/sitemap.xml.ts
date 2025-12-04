import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteURL = site?.toString() || 'https://idiegoo.vercel.app';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- English version (default, no /en prefix) -->
  <url>
    <loc>${siteURL}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${siteURL}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${siteURL}es"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteURL}"/>
  </url>
  
  <!-- Spanish version -->
  <url>
    <loc>${siteURL}es</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${siteURL}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${siteURL}es"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteURL}"/>
  </url>
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
