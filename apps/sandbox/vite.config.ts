import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Cuando el sandbox pida la librería, Vite leerá directamente el TS
      "@andromeda/ui-react": resolve(
        __dirname,
        "../../packages/ui-react/src/index.ts",
      ),
      // Y para el CSS
      "@andromeda/css-framework": resolve(
        __dirname,
        "../../packages/css-framework/src/index.css",
      ),
    },
  },
});
