import http from '../utils/http'
import api from '../config/api'

const LoginService = {
  login: async (params) => {
    return http.post(api.LOGIN, params)
  },
  logout: async (params) => {
    return http.post(api.LOGOUT, params)
  }
}

export default LoginService
