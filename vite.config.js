/// <reference types="vitest" />

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', //defined so we can read the DOM
  },
})