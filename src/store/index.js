import Vue from 'vue'
import Vuex from 'vuex'
import ENV from '@/../env.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: '',
    user: '',
    isLoading: false
  },
  getters: {
    token: state => {
      var storageJwt = window.localStorage.getItem(ENV.JWT_KEY) || ''
      if (!state.jwt) {
        state.jwt = storageJwt
      }
      return storageJwt
    },
    userinfo: state => {
      if (!state.user) {
        var user = window.localStorage.getItem(ENV.USERINFO_KEY)
        if (user) {
          state.user = JSON.parse(user)
        }
      }
      return state.user
    }
  },
  mutations: {
    setJWT (state, jwt) {
      state.jwt = jwt
    },
    setUser (state, user) {
      state.user = user
    },
    setLoading (state, isLoading) {
      state.isLoading = isLoading
    }
  },
  actions: {
    login (context, payload) {
      window.localStorage.setItem(ENV.JWT_KEY, payload.token)
      window.localStorage.setItem(ENV.USERINFO_KEY, JSON.stringify(payload.userinfo))
      context.commit('setJWT', payload.token)
      context.commit('setUser', payload.userinfo)
    },
    logout (context) {
      window.localStorage.setItem(ENV.JWT_KEY, '')
      window.localStorage.setItem(ENV.USERINFO_KEY, '')
      context.commit('setJWT', '')
      context.commit('setUser', '')
    }
  }
})
