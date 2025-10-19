import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // make JSX parsing global
    include: /src\/.*\.js$/, // only target .js files in src
  },
});
