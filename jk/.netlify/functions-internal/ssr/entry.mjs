import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BdgIPBUs.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DLHCg4if.mjs');
const _page1 = () => import('./chunks/404_KeQBi-jU.mjs');
const _page2 = () => import('./chunks/calc_Cswb7mUt.mjs');
const _page3 = () => import('./chunks/index_eIGYwDda.mjs');
const _page4 = () => import('./chunks/_.._DijSdz1D.mjs');
const _page5 = () => import('./chunks/contacts_DbwZ6bE-.mjs');
const _page6 = () => import('./chunks/faq_BVpnDCwC.mjs');
const _page7 = () => import('./chunks/nashi-uslugi_BP0HsaiA.mjs');
const _page8 = () => import('./chunks/rss_BaZ3bJrs.mjs');
const _page9 = () => import('./chunks/vtorichka_ey9LJpcQ.mjs');
const _page10 = () => import('./chunks/index_CBEBR2A7.mjs');
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
    "middlewareSecret": "e2b150cf-e3a5-4370-9720-6a5bf6e53512"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
