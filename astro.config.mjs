// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify"; // <--- 👈 Importar el adaptador

export default defineConfig({
  output: "server", // <--- 👈 Importante para Netlify
  adapter: netlify(), // <--- 👈 Aquí se conecta el adaptador
  
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
