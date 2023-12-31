import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import SVGLoader from 'vite-svg-loader'
console.log(process.env.NODE_ENV,'process.env.NODE_ENV')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), SVGLoader()],
  publicDir: 'assets',
  define: {
    'process.env': {}
  },
  base: '/mathi.io/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
