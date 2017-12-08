import * as types from '../mutation-types'

export default {
  state: {
    backgroundColor: '#545c64',
    textColor: '#fff',
    activeTextColor: '#ffd04b',
    collapse: false
  },
  mutations: {
    [types.TOGGLE_SIDE_MENU] (state) {
      state.collapse = !state.collapse
    }
  },
  actions: {}
}
