<template>
  <div>
    <mu-select label="选择账号" filterable v-model="username" full-width>
      <mu-option label="city" value="123"></mu-option>
    </mu-select>
  </div>
</template>

<script>
export default {
  name: 'Tansform',
  data () {
    return {
      username: ''
    }
  }
}
</script>

<style scoped>

</style>
