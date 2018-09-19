<template>
  <div v-loading="isLoading" data-mu-loading-text="加载中..."></div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
    }
  },
  computed: {
    isLoading: function () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style scoped>

</style>
