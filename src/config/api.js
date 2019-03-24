const SERVER_BASE_URL = 'http://106.12.196.145:8080'

const _dataPath = (url) => {
  return `${SERVER_BASE_URL}/${url}`
}

/**
 * API请求参数和响应内容的具体说明可参考
 *
 */
export default {
  LOGIN: _dataPath('login/login'), // 登录
  GET_CURRENT_USER_INFO: _dataPath('login/getLoginUserByToken'), // 通过token获取用户信息接口
  LOGOUT: _dataPath('login/logout'), // 登出
  GET_USER_LIST: _dataPath('user/selectUserList'), // 获取用户列表
  GET_MERCHANT_USER_LIST: _dataPath('merchantUser/getMerchantUser') // 获取商户列表
}
