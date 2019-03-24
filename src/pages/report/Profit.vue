<template>
  <div class="profit">
    <div class="profit-bg">
      <a-card class="profit-induce">
        <a-row>
          <div class="ant-col-xs-24 ant-col-sm-6">
            <div class="profit-item">
              <span>充值总额</span>
              <p>75696.00元</p>
              <em></em>
            </div>
          </div>
          <div class=" ant-col-xs-24 ant-col-sm-6">
            <div class="profit-item">
              <span>利润总额</span>
              <p>220.14元</p>
              <em></em>
            </div>
          </div>
          <div class=" ant-col-xs-24 ant-col-sm-6">
            <div class="profit-item">
              <span>本页充值金额</span>
              <p>13580.00元</p>
            </div>
          </div>
          <div class=" ant-col-xs-24 ant-col-sm-6">
            <div class="profit-item">
              <span>本页利润金额</span>
              <p>40.28元</p>
            </div>
          </div>
        </a-row>
      </a-card>
    </div>
    <div class="profit-form">
      <a-form class="profit-search" layout="inline">
          <a-form-item label="系统订单号">
            <a-input/>
          </a-form-item>
          <a-form-item label="商户/代理号">
            <a-input/>
          </a-form-item>
          <a-form-item label="支付平台">
            <a-input/>
          </a-form-item>
          <a-form-item label="支付方式">
            <a-input/>
          </a-form-item>
      </a-form>
      <a-form class="profit-search" layout="inline">
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
  name: 'Profit'
}
</script>

<style scoped lang="less">
.profit {
   .profit-bg {
     background: #f0f2f5;
     padding-bottom: 20px;

     .profit-induce{
       border: 0;

       .profit-item {
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

  .profit-form{
    padding: 16px 20px;

    .profit-search {
      &:first-child {
        border-bottom: 1px dashed #e8e8e8;
        padding-bottom: 11px;
        margin-bottom: 16px;
      }

      &:last-child {
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 16px;
      }

    }
  }
 }
</style>
