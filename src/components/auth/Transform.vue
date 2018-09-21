<template>
  <mu-container>
    <mu-card>
      <mu-card-text>

        <mu-select label="选择账号：" v-model="username" filterable full-width>
          <mu-option label="city" value="123"></mu-option>
        </mu-select>

        <mu-text-field
          label="密码："
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          :action-icon="showPassword ? 'visibility_off' : 'visibility'"
          :action-click="() => (showPassword = !showPassword)"
          full-width
        >
        </mu-text-field>

        <mu-button color="primary" full-width>提交</mu-button>

        <mu-container class="chips" v-if="users.length > 0">
          <mu-chip
            class="user-chip"
            color="teal"
            v-for="(user, idx) in users"
            :key="idx"
            delete
            @click="handleClickChip(user)"
            @delete="handleDeleteChip(user, idx)"
          >
            <mu-avatar :size="32" color="teal">
              <mu-icon value="account_circle"></mu-icon>
            </mu-avatar>
            {{ user.dest_username }}（{{ user.dest_nickname }}）
          </mu-chip>
        </mu-container>

      </mu-card-text>
    </mu-card>
  </mu-container>
</template>

<script>
import utils from '@/utils'

export default {
  name: 'Tansform',
  data () {
    return {
      users: [],
      username: '',
      password: '',
      showPassword: false
    }
  },
  mounted () {
    this.$http.get(this.API.AuthTransformList).then(res => {
      this.users = res.data.data
    })
  },
  methods: {
    handleClickChip: function (user) {
      this.$confirm('确定要快速切换到：' + user.dest_username + '？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
          this.$http.post(this.API.AuthTransformQuick, {
            user_id: user.dest_id
          }).then(res => {
            utils.auth.login(res.data.data.access_token, res.data.data.user)
            this.$message.alert('切换成功！', '成功').then(() => {
              this.$router.go(0)
            })
          })
        }
      })
    },
    handleDeleteChip: function (user) {
      this.$confirm('确定要删除这一快速切换：' + user.dest_username + '？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
          this.$message.$alert('删除成功！').then(() => {
            this.$router.go(0)
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.chips {
  margin-top: 10px;
}
.user-chip {
  margin: 5px;
}
</style>
