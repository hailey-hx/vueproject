import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000 // 超时默认设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true // 表示跨域请求时是否需要使用凭证

// http request 拦截器
axios.interceptors.request.use(
  config => {
    return config
  }, err => {
    return Promise.reject(err)
  })

// 响应拦截器即异常处理
axios.interceptors.response.use(response => {
  return response
}, err => {
  return Promise.resolve(err.response)
})

export default {
  get (url, params, headers) {
    /* eslint-disable no-new */
    return new Promise((resolve, reject) => {
      axios.get(url, {params, headers}).then(res => {
        resolve(res)
      })
    })
  },
  post (url, data) {
    /* eslint-disable no-new */
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data)).then(res => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  }
}
