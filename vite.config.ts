import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:'0.0.0.0',
    port:8080
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') //路径别名
    },
    extensions:['.ts','.tsx','.js', '.jsx'],
  },  
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: '@import "@/assets/scss/public.scss";'
      }
    },
  }
})
