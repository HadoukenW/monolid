import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CTqcOXod.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DOZuuZsr.mjs');
const _page1 = () => import('./chunks/404_BqwmOPoH.mjs');
const _page2 = () => import('./chunks/calc_CEdFMcKe.mjs');
const _page3 = () => import('./chunks/index_CNawNi9M.mjs');
const _page4 = () => import('./chunks/_.._Bp3lAL7s.mjs');
const _page5 = () => import('./chunks/contacts_Bte8Rjy9.mjs');
const _page6 = () => import('./chunks/faq_Ic07ULlX.mjs');
const _page7 = () => import('./chunks/nashi-uslugi_Dt4i3ha_.mjs');
const _page8 = () => import('./chunks/rss_Bc-XCfYK.mjs');
const _page9 = () => import('./chunks/index_B5Vigfqu.mjs');
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
    "middlewareSecret": "76d02456-1348-403a-931f-f7e31ceeeada"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
