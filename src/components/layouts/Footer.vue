<template>
  <mu-bottom-nav :value="this.$router.currentRoute.name">
    <mu-bottom-nav-item title="首页" icon="home" :to="{name: 'MainIndex'}" value="MainIndex"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="关于" icon="favorite" :to="{name: 'MainAbout'}" value="MainAbout"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="切换" icon="repeat" :to="{name: 'AuthTransform'}" value="AuthTransform"></mu-bottom-nav-item>
  </mu-bottom-nav>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
