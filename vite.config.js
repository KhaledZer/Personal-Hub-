import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/weather': {
        target: 'https://wttr.in',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/weather/, ''),
      },
    },
  },
})
