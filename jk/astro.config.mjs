import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import netlify from '@astrojs/netlify';
import dotenv from 'dotenv';
import sanity from "@sanity/astro";
import react from "@astrojs/react";
dotenv.config();


// https://astro.build/config
export default defineConfig({
  site: 'https://monolid74.com/',
  integrations: [mdx(), sitemap(), robotsTxt(), sanity({
    projectId: "5d4cymjm",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-05-03",
    token: "sktKeI484klyfjDlWpRuJI9VD3MCiTMKBCSS8pdINTaE3zfY5IAmfqegAhy2QnRYOxrdMLAvJbrrONxD1EVd7f0Pu675M4lmiFNBdFkbQIW15TvSodpS9TVrNXCE5vhUuAXH21qvWMspJvsCxzCVpvUen3rqB640pOti8I5EkVATAMtBXEip"
  }), react()],
  devToolbar: {
    enabled: false
  },
  output: 'server',
  adapter: netlify({
    ssr: true
  })
});