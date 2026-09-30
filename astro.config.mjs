// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// The public address of the site.
// When the custom domain is live, change this ONE line to e.g. 'https://rahulverma.live'
const SITE_URL = 'https://rahulverma13.github.io';

export default defineConfig({
  site: SITE_URL,
  base: '/',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  image: {
    // Project photos are big; Astro converts them to small WebP files at build time.
    responsiveStyles: false,
  },
});
