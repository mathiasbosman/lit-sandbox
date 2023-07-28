import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from '../../../vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    include: ['**/driver/vitest/**/*.{test,spec}.?(c|m)[jt]s?(x)']
  }
}))
