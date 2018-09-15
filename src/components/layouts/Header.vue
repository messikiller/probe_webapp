<template>
  <div>
    <mu-appbar color="primary">
      <mu-button icon slot="left" @click="showDrawer">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <mu-flex justify-content="center" align-items="center"><mu-icon value="account_circle"></mu-icon>&ensp;Administrator</mu-flex>
      <mu-button icon slot="right" @click="clickExit">
        <mu-icon value="exit_to_app"></mu-icon>
      </mu-button>
    </mu-appbar>
    <App-Sider :show="showSider" :docked="false" v-on:close="hideDrawer"></App-sider>
  </div>
</template>

<script>
import Sider from './Sider'

export default {
  name: 'Header',
  components: {
    AppSider: Sider
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
    clickExit: function () {
      this.$confirm('确定要退出系统？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
          this.$toast.message('点击了确定')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
