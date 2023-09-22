// Router define
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    name: 'init',
    path: '/mi-babyShower',
    component: () => import('@/components/Wellcome.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
