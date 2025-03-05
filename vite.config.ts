import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/moonshine-slides/', // This should match your repository name
  optimizeDeps: {
    include: ['prop-types', 'katex', 'react-katex']
  },
  build: {
    commonjsOptions: {
      include: [/prop-types/, /node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      external: ['prop-types'],
      output: {
        globals: {
          'prop-types': 'PropTypes'
        }
      }
    }
  },
  resolve: {
    alias: {
      'prop-types': 'prop-types'
    }
  }
})
