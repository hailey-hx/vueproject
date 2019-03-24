<template>
  <div class="user-list">
    <div class="user-list-search">
      <a-form :layout="formLayout">
        <a-form-item
          class="ant-col-xs-24 ant-col-sm-7 ant-col-lg-6"
          label="用户名"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol">
          <a-input v-model="accountNumber"/>
        </a-form-item>
        <a-form-item
          class="ant-col-xs-12 ant-col-sm-7 ant-col-lg-6"
          label="状态"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol">
          <a-select style="width: 100%" v-model="state">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">生效</a-select-option>
            <a-select-option value="2">挂起</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item class="ant-col-xs-12 ant-col-sm-9 search-btn">
          <a-button type="primary" @click="getUserList">查询</a-button>
          <a-button :style="{ marginLeft: $store.state.isMobile ? '4px' : '8px' }" @click="onReset">重置</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="user-list-tab">
      <app-table
        :columns="columns"
        :data="loadData"
        :rowKey="'id'"
        :pagination="pagination"
        @onCurrentPageChange="getUserList"
        @onShowSizeChange="getUserList">
        <span slot="createTime" slot-scope="text">{{text | format}}</span>
        <span slot="state" slot-scope="text">{{text === 1 ? '生效' : '挂起'}}</span>
        <template slot="action">
          <a>配置</a>
          <a>删除</a>
          <a>禁用</a>
        </template>
      </app-table>
    </div>
  </div>
</template>

<script>
import UserService from '../../services/user.service'
import AppTable from '@/components/Table'

const columns = [
  {title: '用户名', dataIndex: 'accountNumber', align: 'center', key: 'accountNumber', scopedSlots: { customRender: 'accountNumber' }, width: 100},
  {title: '别名', dataIndex: 'name', align: 'center', width: 100},
  {title: '状态', dataIndex: 'state', align: 'center', scopedSlots: { customRender: 'state' }, width: 60},
  {title: '创建日期', dataIndex: 'createTime', align: 'center', key: 'createTime', scopedSlots: { customRender: 'createTime' }, width: 130},
  {title: '操作', key: 'action', scopedSlots: { customRender: 'action' }, width: 150}]

export default {
  name: 'UserList',
  components: {AppTable},
  data () {
    return {
      accountNumber: '',
      state: '0',
      loadData: parameter => {
        console.log('loadData.parameter', parameter)
        const postData = {
          page: parameter.pageNo - 1,
          size: parameter.pageSize,
          type: this.state,
          name: this.accountNumber,
          token: this.$store.getters.token
        }
        return UserService.getUserList(postData).then(res => {
          console.log('res', res)
          return res.data
        }).catch(err => {
          console.log('catch', err)
        })
      },
      columns,
      pagination: {
        current: 1,
        total: 0,
        pageSize: 10,
        pageSizeOptions: ['10', '20', '30']
      }
    }
  },
  created () {
    this.getUserList()
  },
  computed: {
    formLayout () {
      const width = document.body.clientWidth
      return width <= 1200 ? 'vertical' : 'inline'
    },
    formItemLayout () {
      const { formLayout } = this
      return formLayout === 'inline' ? {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 }
      } : {}
    }
  },
  methods: {
    getUserList () {
      const postData = {
        page: this.pagination.current - 1,
        size: this.pagination.pageSize,
        type: this.state,
        name: this.accountNumber,
        token: this.$store.state.token
      }
      UserService.getUserList(postData).then(res => {
        this.tabData = res.data.data
        this.pagination.total = parseInt(res.data.total)
        console.log(this.pagination)
      }).catch(err => {
        console.log('catch', err)
      })
    },
    onReset () {
      this.accountNumber = ''
      this.state = 0
      this.pagination.current = 1
      this.pagination.pageSize = 10
      this.getUserList()
    },
    onShowSizeChange (current, pageSize) {
      this.pagination.pageSize = pageSize
      this.getUserList()
    }
  }
}
</script>

<style scoped lang="less">
.ant-form-item {
  padding: 0 8px;
  margin-bottom: 8px;
}

.user-list {
  padding: 16px 20px;

  .user-list-search {
    padding-bottom: 4px;
    margin-bottom: 16px;
    border-bottom: 1px solid #e8e8e8;
    overflow: hidden;
    .search-btn {
      margin-top: 0;

      @media screen and (max-width: 1200px) {
        margin-top: 29px;
      }
    }
  }
}
</style>
