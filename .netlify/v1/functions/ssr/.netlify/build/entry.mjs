import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DhnodDvv.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/importancia.astro.mjs');
const _page2 = () => import('./pages/recetas/_id_.astro.mjs');
const _page3 = () => import('./pages/recetas.astro.mjs');
const _page4 = () => import('./pages/recomendaciones.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.8.0_@netlify+blobs@_d5682b7ed5289562cce876c9598f96de/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/importancia.astro", _page1],
    ["src/pages/recetas/[id].astro", _page2],
    ["src/pages/recetas.astro", _page3],
    ["src/pages/recomendaciones.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "be039f1f-b7ca-49f0-bfc2-bd4aff93a470"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
