// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'material-icons/iconfont/material-icons.css'

import Toast from 'muse-ui-toast'
import Message from 'muse-ui-message'
import Loading from 'muse-ui-loading'
import NProgress from 'muse-ui-progress'

import 'muse-ui-message/dist/muse-ui-message.css'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import 'muse-ui-progress/dist/muse-ui-progress.css'

import './assets/main.css'

Vue.config.productionTip = false

Vue.use(MuseUI)
Vue.use(Toast)
Vue.use(Message)
Vue.use(Loading)
Vue.use(NProgress)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
