import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from "path";


const __dirname = path.dirname(__filename);


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
      "~": path.resolve(__dirname, "./src"),

    },
  },
  server: {
    port:3000,
    open:true,
  }
})
