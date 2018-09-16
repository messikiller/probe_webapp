import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
        { path: '/', name: 'MainIndex', component: () => import('@/components/main/Index.vue'), alias: '/index' },
        { path: '/about', name: 'MainAbout', component: () => import('@/components/main/About.vue') },
        { path: '/auth/transform', name: 'AuthTransform', component: () => import('@/components/auth/Transform.vue') },

        { path: '/cable/operate', name: 'CableOperate', component: () => import('@/components/cable/Operate.vue') }
      ]
    }
  ]
})
