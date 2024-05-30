import { renderers } from './renderers.mjs';
import { manifest } from './manifest_efyFDLS7.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BGntJg72.mjs');
const _page1 = () => import('./chunks/404_avJfqRJk.mjs');
const _page2 = () => import('./chunks/calc_BAhv7rbl.mjs');
const _page3 = () => import('./chunks/index_CIoAf1ts.mjs');
const _page4 = () => import('./chunks/_.._m8jGM9Wl.mjs');
const _page5 = () => import('./chunks/contacts_D0gQb0_e.mjs');
const _page6 = () => import('./chunks/faq_C9QNyqvA.mjs');
const _page7 = () => import('./chunks/nashi-uslugi_D2-Yvn_Q.mjs');
const _page8 = () => import('./chunks/rss_T1w10NYW.mjs');
const _page9 = () => import('./chunks/vtorichka_CD4UkSjt.mjs');
const _page10 = () => import('./chunks/index_BYFn1yxl.mjs');
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
    ["src/pages/vtorichka.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "4933183b-f349-44c6-a36d-0f6b053b4902"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
