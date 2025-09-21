import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [
        "./client", 
        "./shared",
        "./", // Add root directory to allow serving index.html
        "./index.html" // Explicitly allow index.html
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin() {
  return {
    name: "express-plugin",
    apply: "serve",
    configureServer(server) {
      // Use dynamic import to avoid loading Express in production
      import("./server")
        .then(({ createServer }) => {
          const app = createServer();
          server.middlewares.use(app);
        })
        .catch((error) => {
          console.error("Failed to load Express server:", error);
        });
    },
  };
}