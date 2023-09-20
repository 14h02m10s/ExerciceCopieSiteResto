import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // [vue()],
  ],
  //ajout de ces lignes pour le deploiement
  base: "/ExerciceCopieSiteResto/",
  plugins: [],
  resolve: {
    alias: [

    ]
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
