import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DGW3yptt.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CWAYVl0G.mjs');
const _page1 = () => import('./chunks/404_jL5zzCP4.mjs');
const _page2 = () => import('./chunks/calc_nxENBMNV.mjs');
const _page3 = () => import('./chunks/index_BDnR4Dxq.mjs');
const _page4 = () => import('./chunks/_.._0vAXEd2L.mjs');
const _page5 = () => import('./chunks/contacts_B_DLNFxH.mjs');
const _page6 = () => import('./chunks/faq_Doz933JI.mjs');
const _page7 = () => import('./chunks/nashi-uslugi_DtrX_6hr.mjs');
const _page8 = () => import('./chunks/rss_CRN4isFB.mjs');
const _page9 = () => import('./chunks/vtorichka_a76Z-7A3.mjs');
const _page10 = () => import('./chunks/index_Dw6keW6V.mjs');
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
    "middlewareSecret": "f89e6c7c-4b5b-4785-950c-0b76981880df"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
