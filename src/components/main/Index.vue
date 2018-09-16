<template>
  <div>
    <div class="title">
      <h3>探头无纸化系统（移动版）</h3>
    </div>
    <mu-container>
      <mu-row align-items="stretch" align-content="stretch" fill>
        <mu-col v-for="(item, index) in list" span="3" class="grid" :key="index">
            <div class="wrapper">
              <router-link :to="{ name: item.route == undefined ? 'MainIndex' : item.route }">
              <mu-ripple class="ripple" color="grey">
                  <mu-paper class="cell" :z-depth="1">
                    <mu-icon :value="item.icon" style="color: rgba(0, 0, 0, 0.87);"></mu-icon>
                    <div class="grid-title">{{ item.title }}</div>
                  </mu-paper>
              </mu-ripple>
            </router-link>
            </div>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      list: [
        { icon: 'home', title: '电缆操作', route: 'CableOperate' },
        { icon: 'list', title: '芯部操作' },
        { icon: 'backup', title: '总装操作' },
        { icon: 'build', title: '使用说明' },
        { icon: 'explore', title: '表单列表' },
        { icon: 'dns', title: '批量操作' },
        { icon: 'settings', title: '用户指南' },
        { icon: 'verified_user', title: '系统说明' },
        { icon: 'visibility', title: 'ML工序' }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  margin: 30px auto;
  text-align: center;
}
.grid {
  min-height: 100px;
}
.wrapper {
  height: 100%;
  padding: 3px;
}
.ripple {
  position: relative;
  height: 100%;
}
.cell {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
}

.grid-title {
  color: rgba(0, 0, 0, 0.87);
  display: block;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  word-break: break-all;
  max-height: 40px;
}
</style>
