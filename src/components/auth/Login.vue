<template>
  <div class="content">
    <mu-container style="max-width: 500px;x">
      <mu-card>
        <mu-card-text>
          <div class="title">欢迎登录探头无纸化系统（移动版）</div>

          <mu-form ref="dataForm" :model="form">
            <mu-form-item label="用户名：" prop="username" :rules="notEmptyRules">
              <mu-text-field prop="username" v-model="form.username" full-width></mu-text-field>
            </mu-form-item>
            <mu-form-item label="密码：" prop="password" :rules="notEmptyRules">
              <mu-text-field
                prop="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                :action-icon="showPassword ? 'visibility_off' : 'visibility'"
                :action-click="() => (showPassword = !showPassword)"
                full-width
              >
              </mu-text-field>
            </mu-form-item>
          </mu-form>
          <mu-button color="primary" full-width @click="clickSubmitBtn">登录</mu-button>
          <App-Loading></App-Loading>
        </mu-card-text>
      </mu-card>
    </mu-container>
  </div>

</template>

<script>
import Loading from '@/components/layouts/Loading'

export default {
  name: 'Login',
  components: {
    AppLoading: Loading
  },
  data () {
    return {
      notEmptyRules: [
        { validate: (val) => !!val, message: '该字段不能为空！' }
      ],
      showPassword: false,
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    clickSubmitBtn: function () {
      let that = this
      that.$refs.dataForm.validate().then((result) => {
        if (result) {
          that.$http.post(that.API.AuthLogin, {
            username: that.form.username,
            password: that.form.password
          }).then(res => {
            that.$store.dispatch('login', {
              token: res.data.data.access_token,
              userinfo: res.data.data.user
            })
            that.$router.push({name: 'MainIndex'})
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.content {
  background-color: grey;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: center;
  margin: 20px auto;
  font-weight: bold;
}
</style>
