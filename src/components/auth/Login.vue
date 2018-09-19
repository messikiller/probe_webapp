<template>
  <div class="content">
    <mu-container style="max-width: 500px;x">
      <mu-card>
        <mu-card-text>
          <div class="title">欢迎登录探头无纸化系统（移动版）</div>

          <mu-text-field label="用户名：" v-model="username" full-width></mu-text-field>

          <mu-text-field
            label="密码："
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            :action-icon="showPassword ? 'visibility_off' : 'visibility'"
            :action-click="() => (showPassword = !showPassword)"
            full-width
          >
          </mu-text-field>

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
      showPassword: false,
      username: '',
      password: ''
    }
  },
  methods: {
    clickSubmitBtn: function () {
      let that = this
      this.$http.post(this.API.auth_login, {
        username: this.username,
        password: this.password
      }).then(res => {
        if (Number(res.data.code) === that.ENV.HTTP_OK) {
          that.$store.dispatch('login', {
            token: res.data.data.access_token,
            userinfo: res.data.data.user
          })
          that.$router.push({name: 'MainIndex'})
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
