<template>
  <div class="main">
    <App-Header class="header"></App-Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <App-Footer class="footer"></App-Footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Page',
  components: {
    AppHeader: Header,
    AppFooter: Footer
  }
}
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header {
  width: 100%;
}
.footer {
  width: 100%;
}
.content {
  width: 100%;
  flex: 1;
  overflow-y: auto;
  padding: 15px 0;
}
</style>
