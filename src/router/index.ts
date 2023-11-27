import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

export default function () {
  // @ts-ignore
  const routerHistory = import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory()

  return createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/index.vue'),
      },
    ],
  })
}
