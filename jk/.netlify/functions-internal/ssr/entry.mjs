import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BSQtbdGG.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Db9Sd5Wx.mjs');
const _page1 = () => import('./chunks/404_CnrLUj1r.mjs');
const _page2 = () => import('./chunks/_slug__CYKqiPkB.mjs');
const _page3 = () => import('./chunks/index_DHby6a3f.mjs');
const _page4 = () => import('./chunks/calc_BO-HlpT-.mjs');
const _page5 = () => import('./chunks/index_BLyLVeKq.mjs');
const _page6 = () => import('./chunks/_.._DsdaHkY9.mjs');
const _page7 = () => import('./chunks/contacts_DN5pTX7W.mjs');
const _page8 = () => import('./chunks/faq_D7xh5lRk.mjs');
const _page9 = () => import('./chunks/nashi-uslugi_tzMhFIrc.mjs');
const _page10 = () => import('./chunks/rss_LJHsW8j7.mjs');
const _page11 = () => import('./chunks/vtorichka_CjX9xUDy.mjs');
const _page12 = () => import('./chunks/index_Dwoop86_.mjs');
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
    "middlewareSecret": "faedaecd-1005-49f4-8a9c-bccea2b8de2c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
