// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// Supports weights 100-900
import '@fontsource-variable/outfit';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  server: {
    allowedHosts: ['d7ddd3920a86.ngrok-free.app', '.ngrok-free.app']
  }
});