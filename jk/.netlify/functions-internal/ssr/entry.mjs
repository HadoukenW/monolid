import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CR-lDE5h.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_IhPGxtyl.mjs');
const _page1 = () => import('./chunks/404_BUJGSqW9.mjs');
const _page2 = () => import('./chunks/calc_CmtuP-wy.mjs');
const _page3 = () => import('./chunks/index_UvobxYVU.mjs');
const _page4 = () => import('./chunks/_.._WNtdbX4T.mjs');
const _page5 = () => import('./chunks/contacts_CgKQrP6a.mjs');
const _page6 = () => import('./chunks/faq_fgSp5kZS.mjs');
const _page7 = () => import('./chunks/nashi-uslugi_z6IuD5AZ.mjs');
const _page8 = () => import('./chunks/rss_C6pVsw7v.mjs');
const _page9 = () => import('./chunks/index_DhL4zUVd.mjs');
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
    "middlewareSecret": "efb48b40-e099-4f94-a997-e9743f16f1ef"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
