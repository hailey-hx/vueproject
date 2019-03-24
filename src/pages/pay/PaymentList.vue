<template>
  <div class="payment-list">
    <a-form class="payment-list-search" layout="inline">
      <a-form-item label="支付平台">
        <a-input/>
      </a-form-item>
      <a-form-item label="支付方式">
        <a-input/>
      </a-form-item>
      <a-form-item label="状态">
        <a-input/>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'PaymentList'
}
</script>

<style scoped lang="less">
  .payment-list {
    .payment-list-search {
      border-bottom: 1px solid #e8e8e8;
      padding-bottom: 16px;
    }
  }
</style>
