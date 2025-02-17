import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //開發中、產品路徑
  base: process.env.Node_ENV === 'production' ? '/DessertStory_React/' : '/',
  plugins: [react()],
})
