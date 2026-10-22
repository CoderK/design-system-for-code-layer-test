import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // The shadcn examples are written for Next.js.
      'next/image': path.resolve(__dirname, './src/catalog/shims/next-image.tsx'),
      'next/link': path.resolve(__dirname, './src/catalog/shims/next-link.tsx'),
    },
  },
})
