import store from '@/store'
import axios from 'axios'
import router from '@/router'
import Message from 'muse-ui-message'
import ENV from '@/../env.js'

var request = axios.create({
  baseURL: ENV.API_SERVER,
  timeout: ENV.REQUEST_TIMEOUT,
  withCredential: true,
  headers: {
    'x-Requested-with': 'XMLHttpRequest',
    'common': {
      'Authorization': 'Bearer ' + store.getters.token
    }
  }
})

request.interceptors.request.use(config => {
  store.commit('setLoading', true)
  return config
}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use(response => {
  store.commit('setLoading', false)
  return response
}, error => {
  store.commit('setLoading', false)
  if (error.response) {
    switch (Number(error.response.status)) {
      case ENV.HTTP_UNAUTHORIZED:
        Message.alert('认证过期，请登录后重试！', '提示').then(result => {
          if (result) {
            store.dispatch('logout')
            router.replace({name: 'AuthLogin'})
          }
        })
        break
      case ENV.HTTP_FORBIDDEN:
        Message.alert('你无权访问！', '提示').then(result => {
          if (result) {
            router.go(-1)
          }
        })
        break
      case ENV.HTTP_FAIL:
        Message.alert(error.response.data.msg, '失败')
        break
      default:
        Message.alert('未知错误！', '失败')
    }
  }

  return Promise.reject(error)
})

export default request
