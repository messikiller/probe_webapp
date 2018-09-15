import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Content from '@/components/layouts/Content'
import About from '@/components/About'
import Transform from '@/components/user/Transform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Content',
      component: Content
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/about',
      name: 'UserTransform',
      component: Transform
    }
  ]
})
