import { renderers } from './renderers.mjs';
import { manifest } from './manifest_WTOTLAjC.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BthwHjFX.mjs');
const _page1 = () => import('./chunks/404_CCMaYgQU.mjs');
const _page2 = () => import('./chunks/calc_B-D-tcLv.mjs');
const _page3 = () => import('./chunks/index_Ddo7Vbf6.mjs');
const _page4 = () => import('./chunks/_.._CSsqGbbP.mjs');
const _page5 = () => import('./chunks/contacts_B2CrmIbU.mjs');
const _page6 = () => import('./chunks/faq_8YFPoK7z.mjs');
const _page7 = () => import('./chunks/nashi-uslugi_t2NUKWDP.mjs');
const _page8 = () => import('./chunks/rss_Dbb8X1T_.mjs');
const _page9 = () => import('./chunks/index_BGL9FTqH.mjs');
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
    "middlewareSecret": "1e17d447-fcca-4949-afad-4ee27edd300f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
