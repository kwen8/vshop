import user from '../../api/user.js'
import jwt from '../../helpers/jwt'
import * as types from '../mutation-types'
export default {
  state: {
    name: '',
    email: '',
    authenticated: false
  },
  mutations: {
    [types.GET_USER_INFO] (state, { name, email }) {
      state.authenticated = true
      state.name = name
      state.email = email
    },
    [types.UNSET_USER_INFO] (state) {
      state.authenticated = false
      state.name = ''
    }
  },
  actions: {
    login ({ dispatch }, data) {
      return user.login(data).then(res => {
        const token = res.data.access_token
        dispatch('loginSuccess', token)
      })
    },
    loginSuccess ({ dispatch }, token) {
      jwt.setToken(token)
      dispatch('getUserInfo')
    },
    logout ({ dispatch }) {
      return user.logout().then(res => {
        jwt.removeToken()
        dispatch('unsetAuthUser')
      })
    },
    getUserInfo ({ commit, dispatch }) {
      return user.getUserInfo().then(res => {
        commit(types.GET_USER_INFO, res.data)
      }).catch(e => {
        dispatch('refreshToken')
      })
    },
    unsetAuthUser ({ commit }) {
      commit(types.UNSET_USER_INFO)
    },
    refreshToken ({ commit, dispatch }) {
      return user.refresh().then(res => {
        dispatch('loginSuccess', res.headers.authorization.split(' ').pop())
      }).catch(e => {
        jwt.removeToken()
        commit(types.UNSET_USER_INFO)
      })
    }
  }
}
