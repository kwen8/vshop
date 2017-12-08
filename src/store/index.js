import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import app from './modules/system'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    app
  }
})
