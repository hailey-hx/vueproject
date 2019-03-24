<template>
  <div class="container">
    <div class="user-layout-content">
      <div class="user-layout-top">
        <a href="/index">
          <a-icon type="deployment-unit"/>
          <span class="user-layout-header">融灿管理平台</span>
        </a>
      </div>
      <div class="user-layout-main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLayout'
}
</script>

<style scoped lang="less">
  .container {
    height: 100vh;
    background-image: url('../assets/images/bg2.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    justify-content:center;
    align-items:Center;

    .user-layout-content {
      flex: 1 1;
      padding: 144px 0 24px 0;

      .user-layout-top {
        text-align: center;
        margin-bottom: 40px;

        .anticon {
          font-size: 32px;
          margin-right: 16px;
        }

        .user-layout-header {
          color: rgba(0, 0, 0, 0.85);
          font-weight: 600;
          font-size: 32px;
        }
      }

      .user-layout-main {
        width: 388px;
        margin: 0 auto;
      }
    }
  }
</style>
