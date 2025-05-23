import { e as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DuNtUCWs.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C-aScNvU.mjs';
import { r as recetasData } from '../chunks/recetas_DPoNCbNX.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Recetas = createComponent(($$result, $$props, $$slots) => {
  const gruposEdad = {
    "6 a 8 meses": recetasData.recetas.filter((r) => r.edad === "6-8"),
    "9 a 11 meses": recetasData.recetas.filter((r) => r.edad === "9-11"),
    "12 a 23 meses": recetasData.recetas.filter((r) => r.edad === "12-23")
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Recetas Contra la Anemia Infantil | NutriKids", "data-astro-cid-ijrc534b": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="sticky top-0 z-50 bg-white shadow-sm" data-astro-cid-ijrc534b> <div class="container mx-auto px-4" data-astro-cid-ijrc534b> <div class="flex overflow-x-auto py-3 hide-scrollbar" data-astro-cid-ijrc534b> ', ` </div> </div> </div> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ijrc534b> <!-- Hero Section Redise\xF1ada --> <section class="relative text-center pt-16 pb-24 bg-gradient-to-br from-amber-50 to-orange-50" data-astro-cid-ijrc534b> <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMTQ2LDAsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]" data-astro-cid-ijrc534b></div> <div class="relative z-10 max-w-4xl mx-auto" data-astro-cid-ijrc534b> <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight" data-astro-cid-ijrc534b> <span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600" data-astro-cid-ijrc534b>
Recetas Contra la Anemia
</span> </h1> <p class="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-10" data-astro-cid-ijrc534b>
Descubre men\xFAs ricos en hierro dise\xF1ados para cada etapa de desarrollo infantil
</p> </div> <div class="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-wave" data-astro-cid-ijrc534b></div> </section> <!-- Secci\xF3n por grupos de edad --> `, ` <!-- Secci\xF3n de consejos redise\xF1ada --> <section class="mt-20 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 shadow-inner" data-astro-cid-ijrc534b> <div class="text-center mb-12" data-astro-cid-ijrc534b> <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-ijrc534b>
Combatiendo la <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500" data-astro-cid-ijrc534b>Anemia Infantil</span> </h2> <p class="text-gray-600 max-w-3xl mx-auto text-lg" data-astro-cid-ijrc534b>
Recomendaciones basadas en las \xFAltimas gu\xEDas de nutrici\xF3n pedi\xE1trica
</p> </div> <div class="grid gap-8 md:grid-cols-3" data-astro-cid-ijrc534b> <!-- Consejo 1 --> <div class="group bg-white p-7 rounded-2xl shadow-sm border border-amber-100 hover:shadow-lg transition-all duration-300 hover:border-amber-300" data-astro-cid-ijrc534b> <div class="bg-gradient-to-br from-amber-400 to-orange-400 w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white shadow-sm group-hover:rotate-6 transition-transform" data-astro-cid-ijrc534b> <span class="text-3xl" data-astro-cid-ijrc534b>\u{1F969}</span> </div> <h3 class="font-bold text-xl text-gray-900 mb-3" data-astro-cid-ijrc534b>Fuentes de Hierro</h3> <p class="text-gray-600" data-astro-cid-ijrc534b>
Incluye carnes rojas magras, h\xEDgado (1-2 veces por semana) y pescado oscuro. Para vegetarianos: lentejas, espinacas y cereales fortificados.
</p> </div> <!-- Consejo 2 --> <div class="group bg-white p-7 rounded-2xl shadow-sm border border-orange-100 hover:shadow-lg transition-all duration-300 hover:border-orange-300" data-astro-cid-ijrc534b> <div class="bg-gradient-to-br from-orange-400 to-red-400 w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white shadow-sm group-hover:rotate-6 transition-transform" data-astro-cid-ijrc534b> <span class="text-3xl" data-astro-cid-ijrc534b>\u{1F34A}</span> </div> <h3 class="font-bold text-xl text-gray-900 mb-3" data-astro-cid-ijrc534b>Mejora la Absorci\xF3n</h3> <p class="text-gray-600" data-astro-cid-ijrc534b>
Combina alimentos con hierro no hem\xEDnico (vegetales) con vitamina C (c\xEDtricos, pimientos, fresas) para aumentar su absorci\xF3n hasta 3 veces.
</p> </div> <!-- Consejo 3 --> <div class="group bg-white p-7 rounded-2xl shadow-sm border border-amber-100 hover:shadow-lg transition-all duration-300 hover:border-amber-300" data-astro-cid-ijrc534b> <div class="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white shadow-sm group-hover:rotate-6 transition-transform" data-astro-cid-ijrc534b> <span class="text-3xl" data-astro-cid-ijrc534b>\u{1F469}\u200D\u2695\uFE0F</span> </div> <h3 class="font-bold text-xl text-gray-900 mb-3" data-astro-cid-ijrc534b>Prevenci\xF3n</h3> <p class="text-gray-600" data-astro-cid-ijrc534b>
Realiza controles de hemoglobina seg\xFAn recomendaci\xF3n m\xE9dica. La anemia en ni\xF1os puede afectar su desarrollo cognitivo y motor.
</p> </div> </div> <!-- Banner adicional --> <div class="mt-12 bg-gradient-to-r from-amber-200 to-orange-200 rounded-2xl p-6 text-center border border-amber-300 shadow-inner" data-astro-cid-ijrc534b> <p class="text-amber-900 font-medium text-lg" data-astro-cid-ijrc534b> <span class="text-2xl mr-3" data-astro-cid-ijrc534b>\u{1F4CC}</span> La lactancia materna exclusiva hasta los 6 meses es la primera defensa contra la anemia infantil.
</p> </div> </section> <!-- Secci\xF3n de suscripci\xF3n redise\xF1ada --> </main>  <script>
    // Actualizar selector activo al hacer scroll
    document.addEventListener('DOMContentLoaded', () => {
      const ageGroups = Object.keys(gruposEdad);
      const links = document.querySelectorAll('[href^="#"]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            links.forEach(link => {
              link.setAttribute('data-active', 
                link.getAttribute('href') === \`#\${id}\`);
            });
          }
        });
      }, {threshold: 0.5});
      
      ageGroups.forEach(age => {
        const section = document.getElementById(age.replace(/\\s+/g, "-"));
        if (section) observer.observe(section);
      });
    });
  <\/script> `], ["  ", '<div class="sticky top-0 z-50 bg-white shadow-sm" data-astro-cid-ijrc534b> <div class="container mx-auto px-4" data-astro-cid-ijrc534b> <div class="flex overflow-x-auto py-3 hide-scrollbar" data-astro-cid-ijrc534b> ', ` </div> </div> </div> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ijrc534b> <!-- Hero Section Redise\xF1ada --> <section class="relative text-center pt-16 pb-24 bg-gradient-to-br from-amber-50 to-orange-50" data-astro-cid-ijrc534b> <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMTQ2LDAsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]" data-astro-cid-ijrc534b></div> <div class="relative z-10 max-w-4xl mx-auto" data-astro-cid-ijrc534b> <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight" data-astro-cid-ijrc534b> <span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600" data-astro-cid-ijrc534b>
Recetas Contra la Anemia
</span> </h1> <p class="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-10" data-astro-cid-ijrc534b>
Descubre men\xFAs ricos en hierro dise\xF1ados para cada etapa de desarrollo infantil
</p> </div> <div class="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-wave" data-astro-cid-ijrc534b></div> </section> <!-- Secci\xF3n por grupos de edad --> `, ` <!-- Secci\xF3n de consejos redise\xF1ada --> <section class="mt-20 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 shadow-inner" data-astro-cid-ijrc534b> <div class="text-center mb-12" data-astro-cid-ijrc534b> <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-ijrc534b>
Combatiendo la <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500" data-astro-cid-ijrc534b>Anemia Infantil</span> </h2> <p class="text-gray-600 max-w-3xl mx-auto text-lg" data-astro-cid-ijrc534b>
Recomendaciones basadas en las \xFAltimas gu\xEDas de nutrici\xF3n pedi\xE1trica
</p> </div> <div class="grid gap-8 md:grid-cols-3" data-astro-cid-ijrc534b> <!-- Consejo 1 --> <div class="group bg-white p-7 rounded-2xl shadow-sm border border-amber-100 hover:shadow-lg transition-all duration-300 hover:border-amber-300" data-astro-cid-ijrc534b> <div class="bg-gradient-to-br from-amber-400 to-orange-400 w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white shadow-sm group-hover:rotate-6 transition-transform" data-astro-cid-ijrc534b> <span class="text-3xl" data-astro-cid-ijrc534b>\u{1F969}</span> </div> <h3 class="font-bold text-xl text-gray-900 mb-3" data-astro-cid-ijrc534b>Fuentes de Hierro</h3> <p class="text-gray-600" data-astro-cid-ijrc534b>
Incluye carnes rojas magras, h\xEDgado (1-2 veces por semana) y pescado oscuro. Para vegetarianos: lentejas, espinacas y cereales fortificados.
</p> </div> <!-- Consejo 2 --> <div class="group bg-white p-7 rounded-2xl shadow-sm border border-orange-100 hover:shadow-lg transition-all duration-300 hover:border-orange-300" data-astro-cid-ijrc534b> <div class="bg-gradient-to-br from-orange-400 to-red-400 w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white shadow-sm group-hover:rotate-6 transition-transform" data-astro-cid-ijrc534b> <span class="text-3xl" data-astro-cid-ijrc534b>\u{1F34A}</span> </div> <h3 class="font-bold text-xl text-gray-900 mb-3" data-astro-cid-ijrc534b>Mejora la Absorci\xF3n</h3> <p class="text-gray-600" data-astro-cid-ijrc534b>
Combina alimentos con hierro no hem\xEDnico (vegetales) con vitamina C (c\xEDtricos, pimientos, fresas) para aumentar su absorci\xF3n hasta 3 veces.
</p> </div> <!-- Consejo 3 --> <div class="group bg-white p-7 rounded-2xl shadow-sm border border-amber-100 hover:shadow-lg transition-all duration-300 hover:border-amber-300" data-astro-cid-ijrc534b> <div class="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white shadow-sm group-hover:rotate-6 transition-transform" data-astro-cid-ijrc534b> <span class="text-3xl" data-astro-cid-ijrc534b>\u{1F469}\u200D\u2695\uFE0F</span> </div> <h3 class="font-bold text-xl text-gray-900 mb-3" data-astro-cid-ijrc534b>Prevenci\xF3n</h3> <p class="text-gray-600" data-astro-cid-ijrc534b>
Realiza controles de hemoglobina seg\xFAn recomendaci\xF3n m\xE9dica. La anemia en ni\xF1os puede afectar su desarrollo cognitivo y motor.
</p> </div> </div> <!-- Banner adicional --> <div class="mt-12 bg-gradient-to-r from-amber-200 to-orange-200 rounded-2xl p-6 text-center border border-amber-300 shadow-inner" data-astro-cid-ijrc534b> <p class="text-amber-900 font-medium text-lg" data-astro-cid-ijrc534b> <span class="text-2xl mr-3" data-astro-cid-ijrc534b>\u{1F4CC}</span> La lactancia materna exclusiva hasta los 6 meses es la primera defensa contra la anemia infantil.
</p> </div> </section> <!-- Secci\xF3n de suscripci\xF3n redise\xF1ada --> </main>  <script>
    // Actualizar selector activo al hacer scroll
    document.addEventListener('DOMContentLoaded', () => {
      const ageGroups = Object.keys(gruposEdad);
      const links = document.querySelectorAll('[href^="#"]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            links.forEach(link => {
              link.setAttribute('data-active', 
                link.getAttribute('href') === \\\`#\\\${id}\\\`);
            });
          }
        });
      }, {threshold: 0.5});
      
      ageGroups.forEach(age => {
        const section = document.getElementById(age.replace(/\\\\s+/g, "-"));
        if (section) observer.observe(section);
      });
    });
  <\/script> `])), maybeRenderHead(), Object.keys(gruposEdad).map((edad) => renderTemplate`<a${addAttribute(`#${edad.replace(/\s+/g, "-")}`, "href")} class="flex-shrink-0 px-6 py-2 mx-1 rounded-full text-sm font-medium 
                    bg-white text-orange-600 border border-orange-200 hover:bg-orange-50
                    transition-colors duration-200 flex items-center whitespace-nowrap
                    data-[active=true]:bg-orange-500 data-[active=true]:text-white
                    data-[active=true]:border-orange-500"${addAttribute(false, "data-active")} data-astro-cid-ijrc534b> ${edad === "6 a 8 meses" && renderTemplate`<span class="mr-2" data-astro-cid-ijrc534b>👶</span>`} ${edad === "9 a 11 meses" && renderTemplate`<span class="mr-2" data-astro-cid-ijrc534b>🍼</span>`} ${edad === "12 a 23 meses" && renderTemplate`<span class="mr-2" data-astro-cid-ijrc534b>🧒</span>`} ${edad} </a>`), Object.entries(gruposEdad).map(([edad, recetas]) => renderTemplate`<section${addAttribute(edad.replace(/\s+/g, "-"), "id")} class="mb-20 scroll-mt-16" data-astro-cid-ijrc534b> <!-- Encabezado rediseñado --> <div class="flex items-start mb-10 p-5 bg-white rounded-2xl shadow-md border-l-4 border-amber-400 text" data-astro-cid-ijrc534b> <div class="mr-5 p-3 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 text-white shadow-sm" data-astro-cid-ijrc534b> <span class="text-3xl block" data-astro-cid-ijrc534b> ${edad === "6 a 8 meses" && "\u{1F476}"} ${edad === "9 a 11 meses" && "\u{1F37C}"} ${edad === "12 a 23 meses" && "\u{1F9D2}"} </span> </div> <div data-astro-cid-ijrc534b> <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-1.5" data-astro-cid-ijrc534b>
Recetas para ${edad} </h2> <p class="text-gray-600 max-w-2xl" data-astro-cid-ijrc534b> ${edad === "6 a 8 meses" && "Introducci\xF3n a s\xF3lidos con pur\xE9s ricos en hierro y texturas suaves"} ${edad === "9 a 11 meses" && "Alimentos con m\xE1s textura para estimular la masticaci\xF3n"} ${edad === "12 a 23 meses" && "Dieta variada que incluye alimentos de la familia"} </p> </div> </div> ${recetas.length > 0 ? renderTemplate`<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-ijrc534b> ${recetas.map((receta) => renderTemplate`<article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transitio duration-300 
                        border border-gray-100 hover:border-amber-300 flex flex-col h-full transform hover:-translate-y-2 transition-transform" data-astro-cid-ijrc534b>  <div class="relative aspect-[5/4] overflow-hidden group" data-astro-cid-ijrc534b> <img${addAttribute(receta.imagen, "src")}${addAttribute(receta.titulo, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" data-astro-cid-ijrc534b> <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" data-astro-cid-ijrc534b></div> <span class="absolute top-4 right-4 bg-white/90 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center backdrop-blur-sm" data-astro-cid-ijrc534b>
⏱️ <span class="ml-1" data-astro-cid-ijrc534b>${receta.tiempo}</span> </span> <span class="absolute bottom-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm" data-astro-cid-ijrc534b> ${receta.edad === "6-8" ? "6-8 meses" : receta.edad === "9-11" ? "9-11 meses" : "1-2 a\xF1os"} </span> </div>  <div class="p-6 flex-grow flex flex-col" data-astro-cid-ijrc534b> <div class="flex justify-between items-start mb-4" data-astro-cid-ijrc534b> <h3 class="text-xl font-bold text-gray-900 leading-snug" data-astro-cid-ijrc534b> ${receta.titulo} </h3> <span class="text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full flex items-center shadow-inner" data-astro-cid-ijrc534b>
🍽️ <span class="ml-1" data-astro-cid-ijrc534b>${receta.porciones}</span> </span> </div> <p class="text-gray-600 text-sm mb-5 line-clamp-3 flex-grow" data-astro-cid-ijrc534b> ${receta.descripcion} </p>  <div class="mb-5" data-astro-cid-ijrc534b> <h4 class="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider flex items-center" data-astro-cid-ijrc534b> <svg class="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ijrc534b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-ijrc534b></path> </svg>
Nutrientes Clave
</h4> <div class="flex flex-wrap gap-2" data-astro-cid-ijrc534b> ${receta.nutrientes?.map((nutriente) => renderTemplate`<span class="text-xs px-3 py-1 rounded-full bg-amber-50/80 text-amber-700 border border-amber-100 hover:bg-amber-100 transition-colors" data-astro-cid-ijrc534b> ${nutriente} </span>`)} </div> </div> <a${addAttribute(`/recetas/${receta.id}`, "href")} class="mt-auto text-sm font-medium inline-flex items-center justify-center
                          text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all
                          group px-5 py-3 rounded-xl hover:shadow-md w-full text-center" data-astro-cid-ijrc534b>
Ver receta completa
<svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ijrc534b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-ijrc534b></path> </svg> </a> </div> </article>`)} </div>` : renderTemplate`<div class="bg-amber-50 rounded-2xl p-10 text-center border-2 border-amber-200 border-dashed" data-astro-cid-ijrc534b> <div class="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm" data-astro-cid-ijrc534b> <span class="text-3xl" data-astro-cid-ijrc534b>🍲</span> </div> <h3 class="text-xl font-medium text-gray-900" data-astro-cid-ijrc534b>
Próximamente más recetas
</h3> <p class="text-gray-600 mt-3 max-w-md mx-auto" data-astro-cid-ijrc534b>
Estamos desarrollando nuevas recetas especialmente diseñadas para este grupo de edad.
</p> <a href="#contacto" class="mt-5 inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline" data-astro-cid-ijrc534b>
¿Tienes alguna sugerencia?
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ijrc534b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-ijrc534b></path> </svg> </a> </div>`} </section>`)) })}`;
}, "D:/anemia/src/pages/recetas.astro", void 0);

const $$file = "D:/anemia/src/pages/recetas.astro";
const $$url = "/recetas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Recetas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
