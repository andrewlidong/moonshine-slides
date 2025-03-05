import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/moonshine-slides/' : '/',
  optimizeDeps: {
    include: ['prop-types']
  },
  build: {
    commonjsOptions: {
      include: [/prop-types/, /node_modules/]
    },
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  server: {
    port: 5173,
    strictPort: true
  }
})
