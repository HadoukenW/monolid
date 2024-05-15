import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Chy0uLAO.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DGbdPE3t.mjs');
const _page1 = () => import('./chunks/404_Brg5rSnJ.mjs');
const _page2 = () => import('./chunks/calc_wgm1v2C3.mjs');
const _page3 = () => import('./chunks/index_DiWs-_1g.mjs');
const _page4 = () => import('./chunks/_.._Cubm4heH.mjs');
const _page5 = () => import('./chunks/contacts_CVsaUAP6.mjs');
const _page6 = () => import('./chunks/faq_BseVTvP6.mjs');
const _page7 = () => import('./chunks/nashi-uslugi_D9x9B25h.mjs');
const _page8 = () => import('./chunks/rss_Inb5Mycd.mjs');
const _page9 = () => import('./chunks/index_BcvoLK6X.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/calc.astro", _page2],
    ["src/pages/catalog/index.astro", _page3],
    ["src/pages/catalog/[...slug].astro", _page4],
    ["src/pages/contacts.astro", _page5],
    ["src/pages/faq.astro", _page6],
    ["src/pages/nashi-uslugi.astro", _page7],
    ["src/pages/rss.xml.js", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "ce59a301-2569-42a6-a48d-a25460c86574"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
