// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
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
