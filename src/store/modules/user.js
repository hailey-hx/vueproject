const user = {
  state: {
    token: '',
    userInfo: {}
  },
  getters: {
    token: (state) => {
      return state.token
    },
    userInfo: (state) => {
      return state.userInfo
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    invokeSetToken (context, token) {
      sessionStorage.setItem('token', token)
      context.commit('SET_TOKEN', token)
    },
    invokeSetUserInfo (context, userInfo) {
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
      context.commit('SET_USER_INFO', userInfo)
    },
    clearUser (context) {
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('userInfo')
      context.commit('SET_TOKEN', '')
      context.commit('SET_USER_INFO', {})
    }
  }
}

export default user
