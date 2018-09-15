<template>
  <div>
    <mu-bottom-nav>
      <mu-bottom-nav-item title="index" icon="restore" to="/index"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="about" icon="favorite" to="/about"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="hello" icon="location_on" to="/"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
