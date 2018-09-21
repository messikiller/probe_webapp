import ENV from '@/../env.js'

export default {
  logout: function () {
    this.setToken('')
    this.setUserInfo('')
  },
  login: function (token, user) {
    this.setToken(token)
    this.setUserInfo(JSON.stringify(user))
  },
  getToken: function () {
    return window.localStorage.getItem(ENV.JWT_KEY) || ''
  },
  setToken: function (token) {
    window.localStorage.setItem(ENV.JWT_KEY, token)
  },
  getUserInfo: function () {
    let user = window.localStorage.getItem(ENV.USERINFO_KEY)
    return user.length > 0 ? JSON.parse(user) : ''
  },
  setUserInfo: function (user) {
    var userinfo = typeof user === 'string' ? user : JSON.stringify(user)
    window.localStorage.setItem(ENV.USERINFO_KEY, userinfo)
  }
}
