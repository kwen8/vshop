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
    },
    [types.UNSET_USER_INFO] (state) {
      state.authenticated = false
      state.name = ''
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
    logout ({ dispatch }) {
      return dispatch('unsetAuthUser').then(res => {
        jwt.removeToken()
      })
    },
    getUserInfo ({ commit }) {
      return user.getUserInfo().then(res => {
        jwt.setName(res.data.name)
        commit(types.GET_USER_INFO, res.data)
      })
    },
    unsetAuthUser ({ commit }) {
      return user.logout().then(res => {
        commit(types.UNSET_USER_INFO)
      })
    }
  }
}
