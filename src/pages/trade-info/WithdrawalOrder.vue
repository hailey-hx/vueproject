<template>
  <div class="withdrawal-order">
    <div class="withdrawal-order-form">
      <a-form class="withdrawal-order-search" layout="inline">
        <a-form-item label="系统订单号">
          <a-input/>
        </a-form-item>
        <a-form-item label="银行帐户号">
          <a-input/>
        </a-form-item>
        <a-form-item label="商户号">
          <a-input/>
        </a-form-item>
        <a-form-item label="支付平台">
          <a-input/>
        </a-form-item>
      </a-form>
      <a-form class="withdrawal-order-search" layout="inline">
        <a-form-item label="商户订单号">
          <a-input/>
        </a-form-item>
        <a-form-item label="银行帐户名">
          <a-input/>
        </a-form-item>
        <a-form-item label="代理号">
          <a-input/>
        </a-form-item>
        <a-form-item label="状态">
          <a-input/>
        </a-form-item>
      </a-form>
      <a-form class="withdrawal-order-search" layout="inline">
        <a-form-item label="起止时间">
          <a-range-picker show-time format="YYYY-MM-DD HH:mm:ss"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" icon="search">查询</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WithdrawalOrder'
}
</script>

<style scoped lang="less">
  .withdrawal-order {
    .withdrawal-order-bg {
      background: #f0f2f5;
      padding-bottom: 20px;

      .withdrawal-order-induce{
        border: 0;

        .withdrawal-order-item {
          text-align: center;
          position: relative;

          span {
            display: inline-block;
            margin-bottom: 4px;
            color: rgba(0,0,0,.45);
            font-size: 14px;
            line-height: 22px;
          }

          p {
            margin: 0;
            color: rgba(0,0,0,.85);
            font-size: 24px;
            line-height: 32px;
          }

          em {
            position: absolute;
            top: 0;
            right: 0;
            width: 1px;
            height: 56px;
            background-color: #e8e8e8;
          }
        }
      }
    }

    .withdrawal-order-form{
      padding: 16px 20px;

      .withdrawal-order-search {
        border-bottom: 1px dashed #e8e8e8;
        padding-bottom: 11px;
        margin-bottom: 16px;

        &:last-child {
          border-bottom: 1px solid #e8e8e8;
          padding-bottom: 16px;
        }

      }
    }
  }
</style>
