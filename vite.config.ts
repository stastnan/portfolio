import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@ui": "/src/ui",
    },
  },
  plugins: [react()],
});
