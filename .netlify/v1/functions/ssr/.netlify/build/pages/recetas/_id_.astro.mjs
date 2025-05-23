import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_s204h1uY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Cwmz7HH4.mjs';
import { r as recetasData } from '../../chunks/recetas_DPoNCbNX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return recetasData.recetas.map((receta) => ({
    params: { id: receta.id },
    props: { receta }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { receta } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${receta.titulo} | Recetas Contra la Anemia` }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-gradient-to-r from-yellow-400 to-orange-400 py-4 shadow-md"> <div class="max-w-4xl mx-auto px-4"> <h1 class="text-2xl font-bold text-white drop-shadow-md"> ${receta.titulo} </h1> <div class="flex items-center mt-2 text-white text-sm"> <span class="bg-white/20 px-2 py-1 rounded-full mr-2"> ${receta.edad} </span> <span class="mr-3">⏱️ ${receta.tiempo}</span> <span>🍽️ ${receta.porciones} porciones</span> </div> </div> </div>  <main class="max-w-4xl mx-auto px-4 py-6"> <!-- Imagen principal --> <img${addAttribute(receta.imagen, "src")}${addAttribute(receta.titulo, "alt")} class="w-full h-64 object-cover rounded-lg shadow-lg mb-6" loading="lazy"> <!-- Descripción --> <p class="bg-blue-50 border-l-4 border-blue-400 px-4 py-3 rounded-r-lg text-gray-700 mb-8"> ${receta.descripcion} </p> <!-- Dos columnas --> <div class="grid md:grid-cols-2 gap-6"> <!-- Ingredientes --> <div class="bg-green-50 p-5 rounded-lg shadow-sm"> <h2 class="text-xl font-bold text-green-800 mb-4 flex items-center"> <span class="bg-green-100 p-2 rounded-full mr-3">🥕</span>
Ingredientes
</h2> <ul class="space-y-2"> ${receta.ingredientes.map((ingrediente) => renderTemplate`<li class="flex items-start"> <span class="text-green-500 mr-2">✓</span> <span>${ingrediente}</span> </li>`)} </ul> </div> <!-- Preparación --> <div class="bg-purple-50 p-5 rounded-lg shadow-sm"> <h2 class="text-xl font-bold text-purple-800 mb-4 flex items-center"> <span class="bg-purple-100 p-2 rounded-full mr-3">👩‍🍳</span>
Preparación
</h2> <ol class="space-y-4"> ${receta.preparacion.map((paso, index) => renderTemplate`<li class="flex"> <span class="bg-purple-200 text-purple-800 font-bold h-6 w-6 flex items-center justify-center rounded-full mr-3 flex-shrink-0"> ${index + 1} </span> <p>${paso}</p> </li>`)} </ol> </div> </div> <!-- Notas --> ${receta.notas && renderTemplate`<div class="bg-yellow-50 border-l-4 border-yellow-400 px-4 py-3 rounded-r-lg mt-6"> <div class="flex items-center text-yellow-800 font-medium"> <span class="mr-2">💡</span> <h3 class="text-lg">Consejo importante</h3> </div> <p class="mt-1">${receta.notas}</p> </div>`} </main> ` })}`;
}, "D:/anemia/src/pages/recetas/[id].astro", void 0);

const $$file = "D:/anemia/src/pages/recetas/[id].astro";
const $$url = "/recetas/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
