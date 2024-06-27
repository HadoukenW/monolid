import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CfEJjk_f.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_G9DzZ9zk.mjs');
const _page1 = () => import('./chunks/404_Ca6Vd5tw.mjs');
const _page2 = () => import('./chunks/_slug__Dv-ZsfA0.mjs');
const _page3 = () => import('./chunks/index_mo3fIxDT.mjs');
const _page4 = () => import('./chunks/calc_C3S8YEOi.mjs');
const _page5 = () => import('./chunks/index_CLzomyvK.mjs');
const _page6 = () => import('./chunks/_.._D3pp_1dP.mjs');
const _page7 = () => import('./chunks/contacts_HSRqUD1v.mjs');
const _page8 = () => import('./chunks/faq_CLfDAmuf.mjs');
const _page9 = () => import('./chunks/nashi-uslugi_BBWm0wQx.mjs');
const _page10 = () => import('./chunks/rss_CuS9s5dw.mjs');
const _page11 = () => import('./chunks/vtorichka_8XP2fLeu.mjs');
const _page12 = () => import('./chunks/index_Cp6gntXI.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/calc.astro", _page4],
    ["src/pages/catalog/index.astro", _page5],
    ["src/pages/catalog/[...slug].astro", _page6],
    ["src/pages/contacts.astro", _page7],
    ["src/pages/faq.astro", _page8],
    ["src/pages/nashi-uslugi.astro", _page9],
    ["src/pages/rss.xml.js", _page10],
    ["src/pages/vtorichka.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "18b51ee0-8e4a-4a28-b136-62ebe0792b53"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
