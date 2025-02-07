import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'http://localhost/login-page/',
  server: {
    port: 7600,
  },
});
