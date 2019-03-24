// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Icon, Form, Input, Checkbox, Layout, Menu, Breadcrumb, Row, Col,
  Select, DatePicker, Tabs, Card, LocaleProvider, Drawer, Badge, Avatar, Dropdown, Table, Pagination } from 'ant-design-vue'
import router from './router'
import App from './App'
import Index from './pages/index/Index'
import BasicLayout from './layouts/BasicLayout'
import UserLayout from './layouts/UserLayout'
import Login from './pages/login/Login'
import SiderMenu from './components/SiderMenu'
import UserList from './pages/settings/UserList'
import ParameterSettings from './pages/settings/ParameterSettings'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import axios from './utils/http'
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.prototype.axios = axios

Vue.use(Vuex)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Form)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(Tabs)
Vue.use(Card)
Vue.use(LocaleProvider)
Vue.use(Drawer)
Vue.use(Badge)
Vue.use(Avatar)
Vue.use(Dropdown)
Vue.use(Table)
Vue.use(Pagination)

const padDate = function (va) {
  va = va < 10 ? '0' + va : va
  return va
}

Vue.filter('format', function (val) {
  var value = new Date(val)
  var year = value.getFullYear()
  var month = padDate(value.getMonth() + 1)
  var day = padDate(value.getDate())
  var hour = padDate(value.getHours())
  var minutes = padDate(value.getMinutes())
  var seconds = padDate(value.getSeconds())
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
})

router.beforeEach((to, from, next) => {
  store.dispatch('invokeSetToken', sessionStorage.getItem('token')) // 获取本地存储的token
  store.dispatch('invokeSetUserInfo', JSON.parse(sessionStorage.getItem('userInfo'))) // 获取本地存储的token
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.getters.token) { // 通过vuex state获取当前的token是否存
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
      console.log(to.fullPath)
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  data () {
    return {
      hub: new Vue({}),
      locale: zhCN
    }
  },
  template: '<a-locale-provider :locale="locale"><App/></a-locale-provider>',
  components: {
    App,
    BasicLayout,
    UserLayout,
    SiderMenu,
    Index,
    Login,
    UserList,
    ParameterSettings
  }
})
