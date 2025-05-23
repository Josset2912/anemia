import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_DuNtUCWs.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/anemia/","cacheDir":"file:///D:/anemia/node_modules/.astro/","outDir":"file:///D:/anemia/dist/","srcDir":"file:///D:/anemia/src/","publicDir":"file:///D:/anemia/public/","buildClientDir":"file:///D:/anemia/dist/","buildServerDir":"file:///D:/anemia/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/importancia.BhEghe9b.css"}],"routeData":{"route":"/importancia","isIndex":false,"type":"page","pattern":"^\\/importancia\\/?$","segments":[[{"content":"importancia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/importancia.astro","pathname":"/importancia","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/importancia.BhEghe9b.css"}],"routeData":{"route":"/recetas/[id]","isIndex":false,"type":"page","pattern":"^\\/recetas\\/([^/]+?)\\/?$","segments":[[{"content":"recetas","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/recetas/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/importancia.BhEghe9b.css"},{"type":"inline","content":".hide-scrollbar[data-astro-cid-ijrc534b]{-ms-overflow-style:none;scrollbar-width:none}.hide-scrollbar[data-astro-cid-ijrc534b]::-webkit-scrollbar{display:none}.clip-path-wave[data-astro-cid-ijrc534b]{clip-path:ellipse(75% 100% at center top)}\n"}],"routeData":{"route":"/recetas","isIndex":false,"type":"page","pattern":"^\\/recetas\\/?$","segments":[[{"content":"recetas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recetas.astro","pathname":"/recetas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/importancia.BhEghe9b.css"}],"routeData":{"route":"/recomendaciones","isIndex":false,"type":"page","pattern":"^\\/recomendaciones\\/?$","segments":[[{"content":"recomendaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recomendaciones.astro","pathname":"/recomendaciones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@keyframes grow{0%{height:0;opacity:0}to{height:attr(style);opacity:1}}.animate-grow[data-astro-cid-j7pv25f6]{animation:grow 1s ease-out forwards}.animate-grow[data-astro-cid-j7pv25f6].delay-100{animation-delay:.1s}.animate-grow[data-astro-cid-j7pv25f6].delay-200{animation-delay:.2s}.animate-grow[data-astro-cid-j7pv25f6].delay-300{animation-delay:.3s}\n"},{"type":"external","src":"/_astro/importancia.BhEghe9b.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/anemia/src/pages/importancia.astro",{"propagation":"none","containsHead":true}],["D:/anemia/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/anemia/src/pages/recetas.astro",{"propagation":"none","containsHead":true}],["D:/anemia/src/pages/recetas/[id].astro",{"propagation":"none","containsHead":true}],["D:/anemia/src/pages/recomendaciones.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/importancia@_@astro":"pages/importancia.astro.mjs","\u0000@astro-page:src/pages/recetas/[id]@_@astro":"pages/recetas/_id_.astro.mjs","\u0000@astro-page:src/pages/recetas@_@astro":"pages/recetas.astro.mjs","\u0000@astro-page:src/pages/recomendaciones@_@astro":"pages/recomendaciones.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_9Y2sP7fJ.mjs","D:/anemia/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","D:/anemia/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D53cFin0.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/importancia.BhEghe9b.css","/favicon.svg","/images/bazo-nutricion.png","/images/bofe-pulmon.png","/images/carne-roja.png","/images/higado-pollo.png","/images/higado.png","/images/huevo-cito.png","/images/huevo-zanahoria.jpg","/images/lactancia.jpg","/images/lentejas-espinacas.jpg","/images/locro.png","/images/lomito.png","/images/menestra-nutricion.png","/images/ninos-comiendo.jpg","/images/pescado-nutricion.png","/images/posicion-caballito.jpg","/images/posicion-dedos.png","/images/posicion-espalda.png","/images/posicion-sentada.jpg","/images/posicion.png","/images/posicion2.png","/images/pure-carnes.jpg","/images/pure.png","/images/purecito.png","/images/sangre-cita.png","/images/seco.png","/images/suavecito.png","/images/sulfato-ferroso.jpg","/images/tallarines.png","/images/tortilla.png","/images/trigo.png","/images/video1.mp4"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ZNBjx8DCgA6SZx3swV1Hsl1JUwruuR8jtH1MBI3CrWU=","sessionConfig":{"driver":"fs-lite","options":{"base":"D:\\anemia\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
