import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: "自动化测试：Selenium - im0o"
      },
      component: HomeView
    },
    {
      path: '/example5-1',
      name: 'example5-1',
      meta: {
        title: "实例：模拟用户输入 键盘操作 | 自动化测试"
      },
      component: () => import('../views/example5-1.vue')
    },
    {
      path: '/example5-2',
      name: 'example5-2',
      meta: {
        title: "实例：模拟用户输入 鼠标操作 | 自动化测试"
      },
      component: () => import('../views/example5-2.vue')
    },
    {
      path: '/example6-1',
      name: 'example6-1',
      meta: {
        title: "实例：使用 Selenium 切换浏览器窗口 | 自动化测试"
      },
      component: () => import('../views/example6-1.vue')
    },
    {
      path: '/example6-2',
      name: 'example6-2',
      meta: {
        title: "实例：使用 Selenium 切换浏览器窗口 | 自动化测试"
      },
      component: () => import('../views/example6-2.vue')
    },
    {
      path: '/example6-3',
      name: 'example6-3',
      meta: {
        title: "实例：使用 Selenium 设置等待时间 | 自动化测试"
      },
      component: () => import('../views/example6-3.vue')
    },
    {
      path: '/login-example',
      name: 'login-example',
      meta: {
        title: "实训：使用 Selenium 模拟用户登录 | 自动化测试"
      },
      component: () => import('../views/login-example.vue')
    },
    {
      path: '/form-example',
      name: 'form-example',
      meta: {
        title: "实训：使用 Selenium 进行表单操作 | 自动化测试"
      },
      component: () => import('../views/form-example.vue')
    },
    {
      path: '/dialog-example',
      name: 'dialog-example',
      meta: {
        title: "实例：使用 Selenium 进行弹窗操作 | 自动化测试"
      },
      component: () => import('../views/dialog-example.vue')
    },
    // 404 return home
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export default router
