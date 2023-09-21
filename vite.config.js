import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  //ajout de cette ligne pour le deploiement
  base: "/ExerciceCopieSiteResto/",

  plugins: [vue(),],
  // resolve: {
  //   alias: [

  //   ]
  // },
  // plugins: [
  //   vue(),
  //   // [vue()],
  // ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // '@': fileURLToPath(new URL('.', import.meta.url))
      // '@': fileURLToPath(new URL('./ExerciceCopieSiteResto/src', import.meta.url))
    }
  },
})
