import path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import vuePlugin from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vuePlugin(),
    eslintPlugin({
      cache: false,
      include: ['src/**/*.vue', 'src/**/*.ts']
    }),
    Components({
      directoryAsNamespace: true
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
    })
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
