import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/example5-1',
      name: '5-模拟用户输入 键盘操作',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/example5-1.vue')
    },
    {
      path: '/example5-2',
      name: '5-模拟用户输入 鼠标操作',
      component: () => import('../views/example5-2.vue')
    },
    // 404 return home
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router
