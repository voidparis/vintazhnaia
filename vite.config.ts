
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    hmr: {
      clientPort: 443,
      host: '92fb9b44-fcb4-432d-abb5-fd6278cd057f-00-33gj4y8k73ceu.worf.replit.dev'
    }
  }
})
