<template>
  <div class="merchant-list">
    <div class="merchant-list-search">
      <a-form>
        <a-form-item class="ant-col-xs-12 ant-col-sm-8 ant-col-xl-6" label="代理号">
          <a-input v-model="agencyNum"/>
        </a-form-item>
        <a-form-item class="ant-col-xs-12 ant-col-sm-8 ant-col-xl-6" label="商户号">
          <a-input v-model="merchantNum"/>
        </a-form-item>
        <a-form-item class="ant-col-xs-12 ant-col-sm-8 ant-col-xl-6" label="账户类型">
          <a-select style="width: 100%" v-model="state">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">生效</a-select-option>
            <a-select-option value="2">挂起</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item class="ant-col-xs-12 ant-col-sm-8 ant-col-xl-6" label="状态">
          <a-select style="width: 100%" v-model="state">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">生效</a-select-option>
            <a-select-option value="2">挂起</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="起止时间" class="ant-col-xs-24 ant-col-sm-16 ant-col-xl-12">
          <a-range-picker show-time format="YYYY-MM-DD HH:mm:ss" style="width: 100%"/>
        </a-form-item>
        <a-form-item class="ant-col-xs-12 ant-col-sm-8 ant-col-xl-6" label="出款方式">
          <a-select style="width: 100%" v-model="state">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">生效</a-select-option>
            <a-select-option value="2">挂起</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item class="ant-col-xs-12 ant-col-xl-6 search-btn">
          <a-button type="primary" @click="getMerchantList">查询</a-button>
          <a-button :style="{marginLeft: $store.state.isMobile ? '4px' : '8px'}">重置</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="merchant-list-tab">
      <app-table
        :columns="columns"
        :data="loadData">
        <span slot="accountNumber" slot-scope="accountNumber">
          {{ accountNumber }}
        </span>
      </app-table>
    </div>
  </div>
</template>

<script>
import MerchantService from '../../services/merchant.service'
import AppTable from '@/components/Table'

const columns = [
  {title: '商户号', dataIndex: 'accountNumber', key: 'accountNumber', scopedSlots: { customRender: 'accountNumber' }, width: 100},
  {title: '所属代理', dataIndex: 'parentUserId'},
  {title: '账户类型', dataIndex: 'type'},
  {title: '可用余额', dataIndex: 'balance'},
  {title: '冻结金额', dataIndex: 'freezeBalance'},
  {title: '余额', key: 'totalBalance'},
  {title: '代付费用', dataIndex: 'cost'},
  {title: '出款方式', dataIndex: 'kind'},
  {title: '状态', dataIndex: 'state'},
  {title: '注册时间', dataIndex: 'createTime'},
  {title: '备注', dataIndex: 'description'},
  {title: '充值费率', key: 'aa'},
  {title: '操作', key: 'action'}]

export default {
  name: 'MerchantList',
  components: {AppTable},
  data () {
    return {
      agencyNum: '',
      merchantNum: '',
      type: '1',
      state: '1',
      kind: '1',
      columns,
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        console.log('loadData.parameter', parameter)
        return MerchantService.getMerchantList({
          agencyNum: this.agencyNum,
          merchantNum: this.merchantNum,
          type: this.type,
          state: this.state,
          kind: this.kind,
          page: this.pagination.current - 1,
          size: this.pagination.pageSize,
          role: '4'
        }).then(res => {
          console.log('res', res)
          return res.data
        }).catch(err => {
          console.log(err)
        })
      },
      pagination: {
        current: 1,
        total: 0,
        pageSize: 10,
        pageSizeOptions: ['10', '20', '30']
      }
    }
  },
  created () {
    this.getMerchantList()
  },
  methods: {
    getMerchantList () {
      console.log('slot', this.$slots)
      MerchantService.getMerchantList({
        agencyNum: this.agencyNum,
        merchantNum: this.merchantNum,
        type: this.type,
        state: this.state,
        kind: this.kind,
        page: this.pagination.current - 1,
        size: this.pagination.pageSize,
        role: '4'
      }).then(res => {
        this.tabData = res.data.data
        this.pagination.total = parseInt(res.data.total)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="less">
.ant-form-item {
  padding: 0 8px;
  margin-bottom: 8px;
}

.merchant-list {
  padding: 16px 20px;

  .merchant-list-search {
    padding-bottom: 4px;
    margin-bottom: 16px;
    border-bottom: 1px solid #e8e8e8;
    overflow: hidden;
    .search-btn {
      margin-top: 39px;

      @media screen and (max-width: 576px) {
        margin-top: 28px;
      }
    }
  }
}
</style>
