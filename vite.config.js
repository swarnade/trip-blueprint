import dotenv from 'dotenv';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      '@react-google-maps/api': path.resolve(__dirname, 'node_modules/@react-google-maps/api'),
    },
  },
  optimizeDeps: {
    include: ['@react-google-maps/api'],
  },
  build: {
    rollupOptions: {
      external: ['@react-google-maps/api'],
    },
  },
})
