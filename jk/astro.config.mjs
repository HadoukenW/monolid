import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify'
import dotenv from 'dotenv';
dotenv.config();
// https://astro.build/config


export default defineConfig({
  site: 'https://monolid74.com/',
  integrations: [mdx(), sitemap()],
  devToolbar: {
    enabled: false
  },
  output: 'server',
  adapter: netlify({ssr: true}),
});