import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic", // ← fixes "React is not defined" across all files
    }),
  ],
  optimizeDeps: {
    include: ["three", "@react-three/fiber", "@react-three/drei"],
  },
});