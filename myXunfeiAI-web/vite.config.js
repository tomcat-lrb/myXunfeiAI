import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import AutoImport from 'unplugin-auto-import'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolve } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      import: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolve()]
    }),
    Components({
      resolvers: [ElementPlusResolve()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
