import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BIBkI1Io.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CJriAZRC.mjs');
const _page1 = () => import('./chunks/404_hSTep1dP.mjs');
const _page2 = () => import('./chunks/calc_D5l7y6-d.mjs');
const _page3 = () => import('./chunks/index_B8vKQ5tp.mjs');
const _page4 = () => import('./chunks/_.._BMgvYpze.mjs');
const _page5 = () => import('./chunks/contacts_CvCHtdDZ.mjs');
const _page6 = () => import('./chunks/faq_DTikA3li.mjs');
const _page7 = () => import('./chunks/nashi-uslugi_DyV_j-g3.mjs');
const _page8 = () => import('./chunks/rss_sJFwinGp.mjs');
const _page9 = () => import('./chunks/index_yB7zKLAN.mjs');
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
    "middlewareSecret": "cc549d1b-a7dc-4054-b0b5-fc7c3a5f289b"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
