<template>
    <div class="recharge-amount">
      <div class="recharge-amount-bg">
        <a-card class="recharge-amount-induce">
          <a-row>
            <div class="ant-col-xs-24 ant-col-sm-8">
              <div class="recharge-amount-induce-item">
                <span>当日充值总额</span>
                <p>75696.00元</p>
                <em></em>
              </div>
            </div>
            <div class=" ant-col-xs-24 ant-col-sm-8">
              <div class="recharge-amount-induce-item">
                <span>利润总额</span>
                <p>220.14元</p>
                <em></em>
              </div>
            </div>
            <div class=" ant-col-xs-24 ant-col-sm-8">
              <div class="recharge-amount-induce-item">
                <sapn>盈利率</sapn>
                <p>0.29%</p>
              </div>
            </div>
          </a-row>
        </a-card>
      </div>
    </div>
</template>

<script>
export default {
  name: 'RechargeAmount'
}
</script>

<style scoped lang="less">
  .recharge-amount {
    .recharge-amount-bg {
      background: #f0f2f5;
      padding-bottom: 20px;

      .recharge-amount-induce{
        border: 0;

        .recharge-amount-induce-item {
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
  }
</style>
