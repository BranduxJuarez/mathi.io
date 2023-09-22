// Router define
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    name: 'home',
    path: '/mathi.io',
    component: () => import('@/components/Wellcome.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
