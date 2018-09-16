<template>
  <mu-container>
    <mu-breadcrumbs>
      <mu-breadcrumbs-item :to="{name: 'MainIndex'}">首页</mu-breadcrumbs-item>
      <mu-breadcrumbs-item disabled>电缆操作</mu-breadcrumbs-item>
    </mu-breadcrumbs>
    <mu-card>
      <mu-card-text>
        <mu-text-field label="电缆号：" v-model="cable_number" full-width ref="dataCableNumber"></mu-text-field>
      </mu-card-text>
    </mu-card>
  </mu-container>
</template>

<script>
export default {
  name: 'Operate',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$refs.dataCableNumber.$el.querySelector('input').focus()
    })
  },
  data () {
    return {
      cable_number: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
