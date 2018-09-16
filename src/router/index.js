import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/main/Index'
import About from '@/components/main/About'
import Transform from '@/components/auth/Transform'
import Login from '@/components/auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainIndex',
      component: Index
    },
    {
      path: '/about',
      name: 'MainAbout',
      component: About
    },
    {
      path: '/auth/transform',
      name: 'AuthTransform',
      component: Transform
    },
    {
      path: '/login',
      name: 'AuthLogin',
      component: Login
    }
  ]
})
