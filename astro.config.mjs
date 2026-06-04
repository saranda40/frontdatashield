import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// SÓLO UN export default en todo el archivo:
export default defineConfig({
  integrations: [tailwind()],
});