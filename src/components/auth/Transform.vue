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
            @delete="handleDeleteChip(user)"
          >
            <mu-avatar :size="32" color="teal">
              <mu-icon value="account_circle"></mu-icon>
            </mu-avatar>
            {{ user.username }}（{{ user.nickname }}）
          </mu-chip>
        </mu-container>

      </mu-card-text>
    </mu-card>
  </mu-container>
</template>

<script>
export default {
  name: 'Tansform',
  data () {
    return {
      users: [
        {username: 'Tom', nickname: '汤姆'},
        {username: 'Jerry', nickname: '杰瑞'},
        {username: 'Sam', nickname: '山姆'},
        {username: 'Foo', nickname: '丹妮'},
        {username: 'Bar', nickname: '维恩'}
      ],
      username: '',
      password: '',
      showPassword: false
    }
  },
  methods: {
    handleClickChip: function (user) {
      this.$confirm('确定要快速切换到：' + user.username + '？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
          this.$toast.message('点击了确定')
        }
      })
    },
    handleDeleteChip: function (user) {
      this.$confirm('确定要删除这一快速切换：' + user.username + '？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
          this.$toast.message('点击了确定')
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
