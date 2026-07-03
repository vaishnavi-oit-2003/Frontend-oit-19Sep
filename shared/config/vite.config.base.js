import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export function createViteConfig(projectDir) {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@shared": path.resolve(projectDir, "../shared"),
      },
    },
  });
}
