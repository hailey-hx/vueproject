<template>
    <div class="rechargeRate">
      <a-form class="achievement-search" layout="inline">
        <a-form-item label="起止时间">
          <a-range-picker show-time format="YYYY-MM-DD HH:mm:ss"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">查询</a-button>
        </a-form-item>
      </a-form>
    </div>
</template>

<script>
export default {
  name: 'RechargeRate'
}
</script>

<style scoped lang="less">
  .rechargeRate{
    padding: 16px 20px;

    .achievement-search {
      border-bottom: 1px solid #e8e8e8;
      padding-bottom: 16px;
    }
  }

</style>
