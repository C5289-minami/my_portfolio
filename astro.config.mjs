// @ts-check

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://C5289-minami.github.io',
	base: '/my_portfolio',
	integrations: [mdx(), sitemap()],
	output: 'static', // これを確認！
});