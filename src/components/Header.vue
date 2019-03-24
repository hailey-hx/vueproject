<template>
  <a-layout-header style="background: #fff; padding: 0">
    <span class="header-item-action">
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="updateComputed"/>
    </span>
    <div class="header-right">
      <span class="header-item-action header-bell">
        <a-badge :count="11" class="header-badge">
          <a-icon type="bell" />
        </a-badge>
      </span>
      <span class="header-item-action">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#">
            <a-avatar size="small" style="backgroundColor:#87d068" icon="user" />
            <span>name</span>
          </a>
          <a-menu slot="overlay" @click="onClickMenu">
            <a-menu-item key="personalSetting">
              <a href="javascript:;">个人设置</a>
            </a-menu-item>
            <a-menu-item key="logout">
              <a href="javascript:;">退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>

      </span>
    </div>
  </a-layout-header>
</template>

<script>

import LoginService from '../services/login.service'

export default {
  name: 'AppHeader',
  props: ['collapsed'],
  methods: {
    updateComputed: function () {
      this.$emit('updateComputed', !this.collapsed)
    },
    onClickMenu: function ({key}) {
      if (key === 'personalSetting') {
        console.log('personalSetting')
        this.$router.push('/index/personalSetting')
      } else if (key === 'logout') {
        LoginService.logout({
          token: this.$store.getters.token
        }).then(res => {
          console.log(res)
          this.$router.push('/login')
          this.$store.dispatch('clearUser')
        }).catch(err => {
          console.log('catch', err)
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.header-item-action {
  height: 100%;
  display: inline-block;
  padding: 0 12px;
  cursor: pointer;
}

.header-right {
  float: right;
  overflow: hidden;
  height: 100%;
  padding-right: 16px;

  .header-badge {
    font-size: 16px;

    i {
      padding: 4px;
      vertical-align: middle;
    }
  }
}
</style>
