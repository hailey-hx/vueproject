<template>
  <div class="screen-lg">
    <a-layout id="basic-layout-trigger">
      <a-drawer v-if="isMobile" placement="left" :closable="false" @close="() => collapsed = !collapsed" :visible="!collapsed">
        <sider-menu></sider-menu>
      </a-drawer>
      <a-layout-sider v-else :trigger="null" v-model="collapsed" collapsible width="256" breakpoint="lg">
        <sider-menu></sider-menu>
      </a-layout-sider>
      <a-layout>
        <app-header :collapsed="collapsed" @updateComputed="updateComputed"></app-header>
        <!--<breadcrumb></breadcrumb>-->
        <a-layout-content :style="{margin: '24px 16px', background: '#fff', minHeight: 'calc(100vh - 112px)', overflowY: 'auto'}">
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import SiderMenu from '../components/SiderMenu'
import Breadcrumb from '../components/Breadcrumb'
import UserList from '../pages/settings/UserList'
import ParameterSettings from '../pages/settings/ParameterSettings'
import AppHeader from '../components/Header'

export default {
  name: 'BasicLayout',
  components: {AppHeader, SiderMenu, Breadcrumb, UserList, ParameterSettings},
  data () {
    return {
      isMobile: this.$store.state.isMobile,
      collapsed: this.isMobiles
    }
  },
  methods: {
    collapsedChange: function (value) {
      console.log('collapsedChange', value)
      this.collapsed = value
    },
    onClickcollapsed: function () {
      // this.collapsed = !this.collapsed
    },
    updateComputed: function (value) {
      this.collapsed = value
    }
  }
}
</script>

<style scoped lang="less">
  .screen-lg {
    height: 100vh;
    overflow: auto;

    #basic-layout-trigger {
      height: 100%;

      .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;

        &:hover {
          color: #1890ff;
        }
      }
    }
  }

</style>
<style lang="less">
  .ant-drawer-body {
    padding: 0;
    height: 100vh;
    background: #001529;
  }
</style>
