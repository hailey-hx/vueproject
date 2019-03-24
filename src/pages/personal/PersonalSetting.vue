<template>
  <div class="personal-setting">
    <a-tabs defaultActiveKey="info" tabPosition="left">
      <a-tab-pane tab="基本信息" key="info">
        <div class="personal-setting-title">
          基本设置
        </div>
        <a-form layout="vertical" class="personal-setting-info">
          <a-form-item label="用户名">
            <a-input v-model="userInfo.accountNumber" disabled/>
          </a-form-item>
          <a-form-item label="名称">
            <a-input v-model="userInfo.name"/>
          </a-form-item>
          <a-form-item label="创建日期">
            <a-date-picker show-time format="YYYY-MM-DD HH:mm:ss" style="width: 100%" v-model="userInfo.createTime"/>
          </a-form-item>
          <a-form-item>
            <a-button type="primary">提交</a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
      <a-tab-pane tab="修改密码" key="password">
        <div class="personal-setting-title">
          修改密码
        </div>
        <a-form layout="vertical" class="personal-setting-info">
          <a-form-item label="旧密码">
            <a-input/>
          </a-form-item>
          <a-form-item label="新密码">
            <a-input/>
          </a-form-item>
          <a-form-item label="确认密码">
            <a-input/>
          </a-form-item>
          <a-form-item>
            <a-button type="primary">提交</a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
    </a-tabs>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'PersonalSetting',
  data () {
    return {
      current: ['info']
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  }
}
</script>

<style scoped lang="less">

  .ant-tabs {
    .ant-tabs-left-content {
      padding-right: 24px;
    }
  }
  .personal-setting {
    padding: 16px 16px 16px 0;

    .personal-setting-title {
      margin-bottom: 12px;
      color: rgba(0,0,0,.85);
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }

    .personal-setting-info {
      padding-top: 12px;
      min-width: 480px;
    }
  }
</style>
