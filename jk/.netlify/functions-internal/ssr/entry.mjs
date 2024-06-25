import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CFVh7-Ow.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CSY1ATWu.mjs');
const _page1 = () => import('./chunks/404_CbKXaT3M.mjs');
const _page2 = () => import('./chunks/_slug__vsOph85K.mjs');
const _page3 = () => import('./chunks/index_DYuNFh-7.mjs');
const _page4 = () => import('./chunks/calc_BcLfNxjh.mjs');
const _page5 = () => import('./chunks/index_CyrUcJZo.mjs');
const _page6 = () => import('./chunks/_.._OMn4GEVY.mjs');
const _page7 = () => import('./chunks/contacts_Sk1DSXGG.mjs');
const _page8 = () => import('./chunks/faq_XMUv9f_D.mjs');
const _page9 = () => import('./chunks/nashi-uslugi_h1nrun3y.mjs');
const _page10 = () => import('./chunks/rss_DDlw5An9.mjs');
const _page11 = () => import('./chunks/vtorichka_CbBGDO5T.mjs');
const _page12 = () => import('./chunks/index_XsUfgHyo.mjs');
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
    "middlewareSecret": "d5953996-a585-43df-a5e8-0b0736adc783"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
