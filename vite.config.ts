import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/moonshine-slides/',
  optimizeDeps: {
    include: ['prop-types']
  },
  build: {
    commonjsOptions: {
      include: [/prop-types/, /node_modules/]
    }
  }
})
