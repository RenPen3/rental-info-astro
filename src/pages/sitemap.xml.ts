// src/pages/sitemap.xml.ts

import { defineEndpoint } from 'astro';


const SITE_URL = 'https://ariellespartyrentals.com';

const pages = [
  '',
  'about',
  'faqs',
  'contact',
  'rentals',
  'rentals/chairs',
  'rentals/tables',
  'rentals/jumpers',
  'rentals/mechanical-bull',
  'gallery',
  'privacy-policy',
  'terms-of-service',
  'sitemap',
];

export const GET = defineEndpoint(() => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${SITE_URL}/${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
});
