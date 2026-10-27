import { resolve } from 'path';
import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const appSpaFallback = (): Plugin => ({
  name: 'app-spa-fallback',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url || '';
      // If requesting /app or /app/... and it's not a static asset file with extension (.js, .css, etc.)
      if ((url === '/app' || url.startsWith('/app/')) && !url.includes('.')) {
        req.url = '/app/index.html';
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), appSpaFallback()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        app: resolve(__dirname, 'app/index.html')
      }
    }
  }
});
