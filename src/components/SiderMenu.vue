<template>
  <div>
    <div class="logo">
      <a href="/index">
        <a-icon type="deployment-unit"/>
        <span class="user-layout-header">融灿管理平台</span>
      </a>
    </div>
    <a-menu
      mode="inline"
      :defaultSelectedKeys="defaultSelectedKeys"
      :defaultOpenKeys="defaultOpenKeys"
      :openKeys="openKeys"
      @openChange="onOpenChange"
      theme="dark"
      @click="onClick">
      <a-sub-menu :key="item.id" v-for="item of items">
        <span slot="title"><a-icon :type="item.icon" /><span>{{item.name}}</span></span>
        <a-menu-item :key="subItem.id" v-for="subItem of item.child" v-if="item.child">{{subItem.name}}</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import siderMenuList from '../config/sider-menu.config'

export default {
  name: 'SiderMenu',
  data () {
    return {
      items: siderMenuList,
      defaultSelectedKeys: [],
      defaultOpenKeys: [],
      openKeys: ['settings']
    }
  },
  created () {
    this.getPath()
  },
  methods: {
    getPath () {
      console.log(this.$route)
      this.defaultSelectedKeys = [this.$route.name]
      this.defaultOpenKeys = [this.$route.meta.menuName]
      this.openKeys = [this.$route.meta.menuName]
    },
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      this.openKeys = latestOpenKey ? [latestOpenKey] : []
    },
    onClick ({ item, key, keyPath }) {
      this.$router.push(`/index/${key}`)
    }
  },
  watch: {
    '$route': 'getPath'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .logo {
    position: relative;
    height: 64px;
    padding-left: 24px;
    overflow: hidden;
    line-height: 64px;
    background: #002140;
    transition: all .3s;

    .anticon {
      font-size: 32px;
      margin-right: 6px;
      margin-top: 16px;
    }

    .user-layout-header {
      color: #fff;
      font-weight: 600;
      font-size: 20px;
      line-height: 64px;
      vertical-align: top;
    }
  }
  .ant-layout-sider {
    height: 100vh;
  }
</style>
