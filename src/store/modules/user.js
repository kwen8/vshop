import user from '../../api/user.js'
import jwt from '../../helpers/jwt'
import * as types from '../mutation-types'
export default {
  state: {
    name: '',
    authenticated: false
  },
  mutations: {
    [types.GET_USER_INFO] (state, { name }) {
      state.authenticated = true
      state.name = name
    }
  },
  actions: {
    login ({ dispatch, commit }, data) {
      return user.login(data).then(res => {
        const token = res.data.access_token
        if (token) {
          jwt.setToken(token)
        }
        return dispatch('getUserInfo')
      })
    },
    getUserInfo ({ commit }) {
      return user.getUserInfo().then(res => {
        jwt.setName(res.data.name)
        commit(types.GET_USER_INFO, res.data)
      })
    }
  }
}
