import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BIiyKuSF.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DBp4t9sS.mjs');
const _page1 = () => import('./chunks/404_BAWBxSrW.mjs');
const _page2 = () => import('./chunks/index_zwk1iNNq.mjs');
const _page3 = () => import('./chunks/calc_CH1_tcob.mjs');
const _page4 = () => import('./chunks/index_DJBQhDYw.mjs');
const _page5 = () => import('./chunks/_.._N9ijQwy1.mjs');
const _page6 = () => import('./chunks/contacts_BitAa_9M.mjs');
const _page7 = () => import('./chunks/faq_CdbwL7pn.mjs');
const _page8 = () => import('./chunks/nashi-uslugi_Dg2QNiV9.mjs');
const _page9 = () => import('./chunks/rss_Dc2QLQHF.mjs');
const _page10 = () => import('./chunks/vtorichka_CPIPQrFu.mjs');
const _page11 = () => import('./chunks/index_CxnMQ8R-.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/calc.astro", _page3],
    ["src/pages/catalog/index.astro", _page4],
    ["src/pages/catalog/[...slug].astro", _page5],
    ["src/pages/contacts.astro", _page6],
    ["src/pages/faq.astro", _page7],
    ["src/pages/nashi-uslugi.astro", _page8],
    ["src/pages/rss.xml.js", _page9],
    ["src/pages/vtorichka.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0b1f8e86-8e56-4347-b45c-5654144e46e8"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
