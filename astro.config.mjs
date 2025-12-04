// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: 'https://idiegoo.vercel.app',
  output: 'server',
  
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  adapter: vercel(),
});