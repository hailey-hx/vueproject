<template>
  <user-layout>
    <a-form id="user-login" :form="form" class="login-form" @submit="onSubmit">
      <a-form-item>
        <a-input
          v-decorator="['userName', {rules: [{required: true, message: '请输入您的用户名!'}], initialValue: 'admin'}]"
          placeholder="用户名">
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="['password', {rules: [{required: true, message: '请输入您的密码!'}], initialValue: '123123'}]"
          type="password"
          placeholder="密码">
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox v-decorator="['remember', {valuePropName: 'checked', initialValue: true}]">记住密码</a-checkbox>
        <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
      </a-form-item>
    </a-form>
  </user-layout>
</template>

<script>

import UserLayout from '../../layouts/UserLayout'
import LoginService from '../../services/login.service'
export default {
  name: 'Login',
  components: {UserLayout},
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          LoginService.login({
            userName: values.userName,
            passWord: values.password
          }).then(res => {
            this.$store.dispatch('invokeSetToken', res.data.data.token)
            this.$store.dispatch('invokeSetUserInfo', res.data.data)
            this.$router.push('index')
          }).catch(err => {
            console.log('catch', err)
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  #user-login {
    .login-form-button {
      width: 100%;
    }
  }
</style>
