import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://harris-blob.vercel.app',
  output: 'static',
  integrations: [sitemap()],
});
