import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  site: 'https://monolidtest.netlify.app/',
  integrations: [mdx(), sitemap()],
  devToolbar: {
    enabled: false
  },
  output: 'server',
  adapter: netlify(),
});