// @ts-check

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages用の設定
  site: 'https://C5289-minami.github.io',
 // base: '/my_portfolio',
  integrations: [mdx(), sitemap()],
});