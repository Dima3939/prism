import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

function glslPlugin(): Plugin {
  return {
    name: 'vite-plugin-glsl-inline',
    transform(code: string, id: string) {
      if (/\.(glsl|vert|frag|vs|fs)$/i.test(id)) {
        return {
          code: `export default ${JSON.stringify(code)};`,
          map: { mappings: '' }
        }
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Relative asset paths for GitHub Pages static hosting
  plugins: [
    vue(),
    glslPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173,
    host: true
  }
})