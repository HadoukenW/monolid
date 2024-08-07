import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import netlify from '@astrojs/netlify';
import sanity from "@sanity/astro";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: 'https://monolid74.com/',
  
  integrations: [sitemap(), robotsTxt(), sanity({
    projectId: "5d4cymjm",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-05-03",
    token: "skY7izzp3PcLqi1Szbo0AAUjOiuPtAO9SMDNwobHPgQuQuwkDfMsVfLlYQUN6ADiT4hOcvCve2RW2GMMVoByLVbd4IcrzvLm1YlxEZHXTWvmhYQ4AoT7ayNC8UYl1CDobnXJB1yLsR05EyCOIgUdrRjmQ13xcAxEZfKMN43kVVDON7spSBtv"
  }), react()],
  devToolbar: {
    enabled: false
  },
  output: 'static',
  adapter: netlify({
    ssr: true
  }),
  
});