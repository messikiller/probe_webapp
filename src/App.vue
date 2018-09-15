<template>
  <div id="app">
    <App-Header></App-Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <App-Footer></App-Footer>
  </div>
</template>

<script>
import Header from './components/layouts/Header'
import Content from './components/layouts/Content'
import Footer from './components/layouts/Footer'

export default {
  name: 'App',
  components: {
    AppHeader: Header,
    AppContent: Content,
    AppFooter: Footer
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  overflow-y: auto;
}
</style>
