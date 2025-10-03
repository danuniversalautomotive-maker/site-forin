import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/site-forin/", // 👈 coloque o nome do repositório aqui
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
})
