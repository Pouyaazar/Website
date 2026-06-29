import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages, set base to '/<your-repo-name>/' (see README).
  // For Vercel / Netlify / Cloudflare Pages, leave base as '/'.
  base: '/',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Cache-friendly vendor split: the heavy 3D libs sit in their own
          // chunk and are only fetched when the lazy 3D hero mounts.
          three: ['three', '@react-three/fiber', '@react-three/drei', 'isosurface'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
