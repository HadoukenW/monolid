import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BxNgt8Bl.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DpbiHhU5.mjs');
const _page1 = () => import('./chunks/404_Bvq1LqHJ.mjs');
const _page2 = () => import('./chunks/calc_DWcqi_pZ.mjs');
const _page3 = () => import('./chunks/index__9DPSNAt.mjs');
const _page4 = () => import('./chunks/_.._BMAqjrY9.mjs');
const _page5 = () => import('./chunks/contacts_Bd6AyNwL.mjs');
const _page6 = () => import('./chunks/faq_B80_nYZA.mjs');
const _page7 = () => import('./chunks/nashi-uslugi_BiaRQHpV.mjs');
const _page8 = () => import('./chunks/rss_CHa__fDD.mjs');
const _page9 = () => import('./chunks/index_BIkScj7b.mjs');
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
    "middlewareSecret": "137620d2-9156-4681-83dd-9c30d452c3f5"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
