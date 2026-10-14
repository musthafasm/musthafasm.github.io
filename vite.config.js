import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/style.css',
        entryFileNames: 'assets/main.js',
      },
    },
  },
})
