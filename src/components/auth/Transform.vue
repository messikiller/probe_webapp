<template>
  <mu-container>
    <mu-card>
      <mu-card-text>

        <mu-form ref="dataForm" :model="form">
          <mu-form-item label="账号：" prop="username" :rules="notEmptyRules">
            <mu-select v-model="form.username" filterable full-width>
              <mu-option
                v-for="user in users"
                :label="user.username + '（' + user.nickname + '）'"
                :key="user.id"
                :value="user.username"
              >{{ user.username }}（{{ user.nickname }}）</mu-option>
            </mu-select>
          </mu-form-item>
          <mu-form-item label="密码：" prop="password" :rules="notEmptyRules">
            <mu-text-field
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              :action-icon="showPassword ? 'visibility_off' : 'visibility'"
              :action-click="() => (showPassword = !showPassword)"
              full-width
            >
            </mu-text-field>
          </mu-form-item>
        </mu-form>

        <mu-button color="primary" full-width @click="clickExecuteBtn">提交</mu-button>

        <mu-container class="chips" v-if="transforms.length > 0">
          <mu-chip
            class="user-chip"
            color="teal"
            v-for="(user, idx) in transforms"
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
      transforms: [],
      form: {
        username: '',
        password: ''
      },
      notEmptyRules: [
        { validate: (val) => !!val, message: '该字段不能为空！' }
      ],
      showPassword: false
    }
  },
  mounted () {
    this.$http.get(this.$api.AuthTransformList).then(res => {
      this.transforms = res.data.data
    })
    this.$http.get(this.$api.UserList).then(res => {
      this.users = res.data.data
    })
  },
  methods: {
    clickExecuteBtn: function () {
      this.$refs.dataForm.validate().then((result) => {
        if (result) {
          this.$confirm('确定要切换到：' + this.form.username + '？', '提示', {
            type: 'warning'
          }).then(({ result }) => {
            if (result) {
              this.$http.post(this.$api.AuthTransformExecute, {
                username: this.form.username,
                password: this.form.password
              }).then(res => {
                utils.auth.login(res.data.data.access_token, res.data.data.user)
                this.$message.alert('切换成功！', '成功').then(() => {
                  this.$router.go(0)
                })
              })
            }
          })
        }
      })
    },
    handleClickChip: function (user) {
      this.$confirm('确定要快速切换到：' + user.dest_username + '？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
          this.$http.post(this.$api.AuthTransformQuick, {
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
    handleDeleteChip: function (user, index) {
      this.$confirm('确定要删除这一快速切换：' + user.dest_username + '？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
          this.$http.get(this.$api.AuthTransformDelete, {
            params: {
              id: user.id
            }
          }).then(res => {
            this.transforms.splice(index, 1)
            this.$alert('删除成功！', '成功', {
              type: 'success'
            })
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
