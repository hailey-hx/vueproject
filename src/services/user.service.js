import http from '../utils/http'
import api from '../config/api'

const UserService = {
  getUserList: async (params) => {
    return http.post(api.GET_USER_LIST, params)
  }
}

export default UserService
