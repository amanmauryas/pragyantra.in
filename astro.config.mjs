import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://pragyantra.in',
  integrations: [tailwind(), mdx(), sitemap(), robotsTxt()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});