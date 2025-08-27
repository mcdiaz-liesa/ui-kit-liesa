import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/app.js'),
      name: 'LiesaLib',
      fileName: (format) => `liesa-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['bootstrap'],
      output: {
        globals: {
          bootstrap: 'bootstrap',
        },
      },
    },
    minify: true,
  },
})
