import store from '@/store'
import axios from 'axios'
import router from '@/router'
import Message from 'muse-ui-message'
import ENV from '@/../env.js'
import utils from '@/utils'

var request = axios.create({
  baseURL: ENV.API_SERVER,
  timeout: ENV.REQUEST_TIMEOUT,
  withCredential: true,
  headers: {
    'x-Requested-with': 'XMLHttpRequest',
    'common': {
      'Authorization': 'Bearer ' + utils.auth.getToken()
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
  switch (Number(response.data.code)) {
    case ENV.HTTP_UNAUTHORIZED:
      Message.alert('认证过期，请登录后重试！', '提示').then(result => {
        if (result) {
          utils.auth.logout()
          router.replace({name: 'AuthLogin'})
        }
      })
      // break promise chain
      return new Promise(() => {})
    case ENV.HTTP_FORBIDDEN:
      Message.alert('你无权访问！', '提示').then(result => {
        if (result) {
          router.go(-1)
        }
      })
      return new Promise(() => {})
    case ENV.HTTP_FAIL:
      Message.alert(response.data.msg, '失败')
      return new Promise(() => {})
    default:
  }

  return response
}, err => {
  store.commit('setLoading', false)
  Message.alert('请求出错，请联系管理员处理！', '失败')
  return Promise.reject(err)
})

export default request
