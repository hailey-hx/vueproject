<template>
  <div class="merchant-report">
    <a-form class="merchant-report-search" layout="inline">
      <a-form-item label="商户号">
        <a-input/>
      </a-form-item>
      <a-form-item label="起止时间">
        <a-range-picker show-time format="YYYY-MM-DD HH:mm:ss"/>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" icon="search">查询</a-button>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" icon="download">导出Excel</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'MerchantReport'
}
</script>

<style scoped lang="less">
.merchant-report {
  padding: 16px 20px;

  .merchant-report-search {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 16px;
  }
}
</style>
