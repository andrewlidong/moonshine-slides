import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/moonshine-slides/', // This should match your repository name
  optimizeDeps: {
    include: ['prop-types']
  },
  build: {
    commonjsOptions: {
      include: [/prop-types/, /node_modules/]
    }
  }
})
