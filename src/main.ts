import { createPinia } from 'pinia'
import { createSSRApp } from 'vue'
import App from './app.vue'
import createRouter from '@/router'

export function createApp() {
  const app = createSSRApp(App)
  const store = createPinia()
  const router = createRouter()
  app.use(store).use(router)

  return { app, router, store }
}
