import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_SUPAKEY: process.env.VITE_SUPAKEY,
    VITE_DEPLOYED: process.env.VITE_DEPLOYED,
  }
})
