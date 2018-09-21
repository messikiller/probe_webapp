<template>
  <mu-container>
    <mu-breadcrumbs>
      <mu-breadcrumbs-item :to="{name: 'MainIndex'}">首页</mu-breadcrumbs-item>
      <mu-breadcrumbs-item disabled>电缆操作</mu-breadcrumbs-item>
    </mu-breadcrumbs>
    <mu-card>
      <mu-card-text>

        <mu-form ref="dataForm" :model="form">
          <mu-form-item label="电缆号：" prop="cable_number" :rules="notEmptyRules">
            <mu-text-field v-model="form.cable_number" full-width ref="dataCableNumber"></mu-text-field>
          </mu-form-item>
        </mu-form>

        <mu-button color="primary" full-width @click="handleSubmit">提交</mu-button>

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
      notEmptyRules: [
        { validate: (val) => !!val, message: '该字段不能为空！' }
      ],
      form: {
        cable_number: ''
      }
    }
  },
  methods: {
    handleSubmit: function () {
      var that = this
      that.$refs.dataForm.validate().then((result) => {
        if (result) {
          that.$http.post(that.API.CableOperate, {
            cable_number: that.form.cable_number
          }).then(res => {
            that.$toast.success({
              message: res.data.msg,
              position: 'top-end'
            })
          })
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
