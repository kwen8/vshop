import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import Store from '../store/'
import jwt from '../helpers/jwt'
Vue.use(Router)

export const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (Store.state.user.authenticated === true || jwt.getToken()) {
      return next()
    } else {
      return next({ name: 'login' })
    }
  } else {
    next()
  }
})
