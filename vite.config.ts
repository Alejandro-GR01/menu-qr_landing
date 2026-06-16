import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/menu-qr-electron_landing/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
