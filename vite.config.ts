import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      ...mdx(),
      enforce: 'pre', 
    },
  ],
  root: './client',
  build: { outDir: 'dist', emptyOutDir: true },
  server: { open: true, fs: { strict: false } },
})
