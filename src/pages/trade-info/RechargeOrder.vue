<template>
  <div class="recharge-order">
    <div class="recharge-order-bg">
      <a-card class="recharge-order-induce">
        <a-row>
          <div class="ant-col-xs-12 ant-col-sm-6">
            <div class="recharge-order-item">
              <span>充值总额</span>
              <p>75696.00元</p>
              <em></em>
            </div>
          </div>
          <div class="ant-col-xs-12 ant-col-sm-6">
            <div class="recharge-order-item">
              <span>利润总额</span>
              <p>220.14元</p>
              <em></em>
            </div>
          </div>
          <div class="ant-col-xs-12 ant-col-sm-6">
            <div class="recharge-order-item">
              <span>本页充值金额</span>
              <p>13580.00元</p>
              <em></em>
            </div>
          </div>
          <div class="ant-col-xs-12 ant-col-sm-6">
            <div class="recharge-order-item">
              <span>本页利润金额</span>
              <p>40.28元</p>
            </div>
          </div>
        </a-row>
      </a-card>
    </div>
    <div class="recharge-order-form">
      <a-form class="recharge-order-search" layout="vertical">
        <a-row>
          <a-form-item label="系统订单号" class="ant-col-xs-12 ant-col-sm-8 ant-col-lg-6 ant-col-xl-4">
            <a-input/>
          </a-form-item>
          <a-form-item label="支付方式" class="ant-col-xs-12 ant-col-sm-8 ant-col-lg-6 ant-col-xl-4">
            <a-input/>
          </a-form-item>
          <a-form-item label="商户号" class="ant-col-xs-12 ant-col-sm-8 ant-col-lg-6 ant-col-xl-4">
            <a-input/>
          </a-form-item>
          <a-form-item label="代理号" class="ant-col-xs-12 ant-col-sm-8 ant-col-lg-6 ant-col-xl-4">
            <a-input/>
          </a-form-item>
          <a-form-item label="商户订单号" class="ant-col-xs-12 ant-col-sm-8 ant-col-lg-6 ant-col-xl-4">
            <a-input/>
          </a-form-item>
          <a-form-item label="支付平台" class="ant-col-xs-12 ant-col-sm-8 ant-col-lg-6 ant-col-xl-4">
            <a-input/>
          </a-form-item>
          <a-form-item label="起止时间" class="ant-col-xs-24 ant-col-sm-16 ant-col-lg-12 ant-col-xl-8">
            <a-range-picker show-time format="YYYY-MM-DD HH:mm:ss" style="width: 100%"/>
          </a-form-item>
          <a-form-item label="来源IP" class="ant-col-xs-12 ant-col-sm-8 ant-col-lg-6 ant-col-xl-4">
            <a-input/>
          </a-form-item>
          <a-form-item label="状态" class="ant-col-xs-12 ant-col-sm-8 ant-col-lg-6 ant-col-xl-4">
            <a-input/>
          </a-form-item>
          <a-form-item class="ant-col-xs-24 ant-col-sm-2 search-btn">
            <a-button type="primary" icon="search">查询</a-button>
          </a-form-item>
        </a-row>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RechargeOrder'
}
</script>

<style scoped lang="less">
  .ant-form-inline .ant-form-item {
    margin-right: 0;
    padding-bottom: 12px;
  }
  .recharge-order {
    .recharge-order-bg {
      background: #f0f2f5;
      padding-bottom: 20px;

      .recharge-order-induce{
        border: 0;

        .recharge-order-item {
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

          @media screen and (max-width: 576px) {
            margin-bottom: 16px;

            em {
              display: none;
            }
          }
        }
      }
    }

    .recharge-order-form{
      padding: 16px 20px;

      .recharge-order-search {
        padding-bottom: 4px;
        margin-bottom: 16px;
        border-bottom: 1px solid #e8e8e8;

        .search-btn {
          margin-top: 39px;

          @media screen and (max-width: 576px) {
            margin-top: 0;
          }
        }
      }
    }
  }

  .ant-form-item {
    padding: 0 8px;
    margin-bottom: 8px;
  }
</style>
