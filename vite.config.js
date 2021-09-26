import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    cors: { origin: '*' },
    proxy: {
      '/auth': 'http://hackathon.rodial.pro:8080/',
      '/register': 'http://hackathon.rodial.pro:8080/',
      '/user-subsidy-map': 'http://hackathon.rodial.pro:8080/',
    }
  }
})
