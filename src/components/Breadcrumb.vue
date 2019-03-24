<template>
  <div>
    <a-breadcrumb :routes="routes">
      <template slot="itemRender" slot-scope="{route, params, routes, paths}">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{route.breadcrumbName}}
      </span>
        <router-link v-else :to="`${basePath}/${paths.join('/')}`">
          {{route.breadcrumbName}}
        </router-link>
      </template>
    </a-breadcrumb>
    <br/>
    {{$route.path}}
  </div>
</template>

<script>
import siderMenuList from '../config/sider-menu.config'
export default {
  name: 'Breadcrumb',
  data () {
    const routeName = this.$route.path.split('/').slice(-1)
    const xxx = siderMenuList.indexOf(routeName)

    const { lang } = this.$route.params
    console.log(xxx)
    return {
      basePath: `/${lang}/components/breadcrumb`,
      routes: []
    }
  },
  created: function () {
    this.$root.$on('siderMenuTrigger', val => {
      this.routes[0] = {
        path: 'index',
        breadcrumbName: '首页'
      }
      val.forEach((item, i) => {
        const obj = {}
        obj.path = item.id
        obj.breadcrumbName = item.name
        this.routes.splice(i + 1, 1, obj)
        console.log(this.routes)
      })
      console.log(val)
    })
  },
  watch: {
    '$route.path': function (newVal, oldVal) {
      const routeName = newVal.split('/').slice(-1)
      console.log(`${routeName} - ${newVal} - ${oldVal}}`)
    }
  }
}
</script>

<style scoped>

</style>
