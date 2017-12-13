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
      return user.logout().then(res => {
        jwt.removeToken()
        dispatch('unsetAuthUser')
      })
    },
    getUserInfo ({ commit, dispatch }) {
      return user.getUserInfo().then(res => {
        commit(types.GET_USER_INFO, res.data)
      }).catch(e => {
        return dispatch('refreshToken')
      })
    },
    unsetAuthUser ({ commit }) {
      commit(types.UNSET_USER_INFO)
    },
    refreshToken ({ commit }) {
      return user.refresh().then(res => {
        jwt.setToken(res.headers.authorization.split(' ').pop())
        commit(types.GET_USER_INFO, res.data)
      }).catch(e => {
        commit(types.UNSET_USER_INFO)
        throw new Error()
      })
    }
  }
}
