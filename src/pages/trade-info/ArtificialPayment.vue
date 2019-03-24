<template>
  <div class="artificial-payment">
    <a-form class="artificial-payment-search" layout="inline">
      <a-form-item label="系统订单号">
        <a-input/>
      </a-form-item>
      <a-form-item label="商户号">
        <a-input/>
      </a-form-item>
      <a-form-item label="状态">
        <a-input/>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" icon="search">查询</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'ArtificialPayment'
}
</script>

<style scoped lang="less">
.artificial-payment {
  padding: 16px 20px;

  .artificial-payment-search {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 16px;
  }

}
</style>
