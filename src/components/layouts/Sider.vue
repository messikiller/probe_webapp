<template>
  <div>
    <mu-drawer right :open="show" :docked="false" v-on:close="closeSelf">
      <mu-list>
        <mu-list-item button @click="closeGo('MainIndex')">
          <mu-list-item-action>
            <mu-icon value="home"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>首页</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="closeSelf">
          <mu-list-item-action>
            <mu-icon value="keyboard_tab"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>隐藏</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="closeGo('AuthTransform')">
          <mu-list-item-action>
            <mu-icon value="repeat"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>切换账号</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button @click="clickExit">
          <mu-list-item-action>
            <mu-icon value="power_settings_new"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>退出系统</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
export default {
  name: 'Sider',
  props: ['show'],
  data () {
    return {
    }
  },
  methods: {
    closeSelf: function () {
      this.$emit('close')
    },
    closeGo: function (routeName) {
      this.$emit('close')
      this.$router.push({name: routeName})
    },
    clickExit: function () {
      this.$confirm('确定要退出系统？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
          this.$store.dispatch('logout')
          this.$router.push({name: 'AuthLogin'})
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
