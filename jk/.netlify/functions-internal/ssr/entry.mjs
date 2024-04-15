import { renderers } from './renderers.mjs';
import { manifest } from './manifest_C2zXKlnO.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BJ9m6Cqf.mjs');
const _page1 = () => import('./chunks/404_CAD7keD7.mjs');
const _page2 = () => import('./chunks/calc_D7oAQCeU.mjs');
const _page3 = () => import('./chunks/index_yGjWYdpf.mjs');
const _page4 = () => import('./chunks/_.._Ay3l2XTO.mjs');
const _page5 = () => import('./chunks/contacts_BSwtA0r7.mjs');
const _page6 = () => import('./chunks/faq_0UCr8tRq.mjs');
const _page7 = () => import('./chunks/nashi-uslugi_Ba235PpL.mjs');
const _page8 = () => import('./chunks/rss_DxhdmUQi.mjs');
const _page9 = () => import('./chunks/index_BCC9wQZv.mjs');
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
    "middlewareSecret": "0da55485-520b-44e7-b5a1-ea0b7b3aa7ee"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
