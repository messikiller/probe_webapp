import Vue from 'vue'
import Router from 'vue-router'
import utils from '@/utils'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'AuthLogin',
      component: () => import('@/components/auth/Login.vue')
    },
    {
      path: '/',
      component: () => import('../components/layouts/Page.vue'),
      children: [
        { path: '/', name: 'MainIndex', component: () => import('@/components/main/Index.vue'), alias: '/index', meta: { requireAuth: true } },
        { path: '/about', name: 'MainAbout', component: () => import('@/components/main/About.vue'), meta: { requireAuth: true } },
        { path: '/auth/transform', name: 'AuthTransform', component: () => import('@/components/auth/Transform.vue'), meta: { requireAuth: true } },

        { path: '/cable/operate', name: 'CableOperate', component: () => import('@/components/cable/Operate.vue'), meta: { requireAuth: true } }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !utils.auth.getToken()) {
    next({name: 'AuthLogin'})
  } else {
    next()
  }
})

export default router
