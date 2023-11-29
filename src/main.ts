import { createSSRApp } from 'vue'
import App from './app.vue'

import { createPinia } from 'pinia'
import createRouter from '@/router'
import { createYmaps } from 'vue-yandex-maps'

export function createApp() {
  const app = createSSRApp(App)
  const store = createPinia()
  const router = createRouter()
  const yaMap = createYmaps({
    apikey: 'd65da6d0-6511-4e7d-a829-4060a0cfbcc7',
    lang: 'ru_RU',
  })

  app.use(store).use(router).use(yaMap)

  return { app, router, store }
}
