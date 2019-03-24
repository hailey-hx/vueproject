import http from '../utils/http'
import api from '../config/api'

const MerchantService = {
  getMerchantList: async (params) => {
    return http.post(api.GET_MERCHANT_USER_LIST, params)
  }
}

export default MerchantService
