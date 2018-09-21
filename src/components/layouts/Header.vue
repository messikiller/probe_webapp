<template>
  <div>
    <mu-appbar color="primary">
      <mu-button icon slot="left" @click="clickBack">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>
      <mu-flex justify-content="center" align-items="center"><mu-icon value="account_circle"></mu-icon>&ensp;{{ nickname }}</mu-flex>
      <mu-button icon slot="right" @click="showDrawer">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
    </mu-appbar>
    <App-Sider :show="showSider" :docked="false" v-on:close="hideDrawer"></App-sider>
  </div>
</template>

<script scoped>
import Sider from './Sider'
import utils from '@/utils'

export default {
  name: 'Header',
  components: {
    AppSider: Sider
  },
  computed: {
    nickname: function () {
      var user = utils.auth.getUserInfo()
      return user.nickname || '未登录'
    }
  },
  data () {
    return {
      showSider: false
    }
  },
  methods: {
    showDrawer: function () {
      this.showSider = true
    },
    hideDrawer: function () {
      this.showSider = false
    },
    clickBack: function () {
      this.$router.back(-1)
    }
  }
}
</script>

<style scoped>
</style>
