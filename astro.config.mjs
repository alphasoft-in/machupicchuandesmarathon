// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://machupicchuandesmarathon.com',
  integrations: [react(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  vite: {
    ssr: {
      noExternal: ['lucide-react']
    },
    plugins: [
      tailwindcss(),
      {
        name: 'watch-data-files',
        enforce: 'post',
        handleHotUpdate({ file, server }) {
          if (file.includes('/src/data/') || file.includes('/src/content/')) {
            server.ws.send({ type: 'full-reload' });
          }
        },
      }
    ]
  }
});
