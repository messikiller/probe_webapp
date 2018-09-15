<template>
  <div>
    <mu-drawer :open="show" :docked="false" v-on:close="closeSelf">
      <mu-list>
        <mu-list-item button @click="closeGo('UserTransform')">
          <mu-list-item-title>Transform</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="closeSelf">
          <mu-list-item-title>Close</mu-list-item-title>
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
    }
  }
}
</script>

<style scoped>

</style>
