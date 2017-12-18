import axios from 'axios'
import jwt from './jwt'
import * as types from '../store/mutation-types'
import store from '../store'
import { router } from '../router'
import { Message } from 'element-ui'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://shop-api.test' : 'http://shop.chenkewen.com'

axios.defaults.baseURL = baseURL

/**
 * 请求拦截器-Authorization
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
axios.interceptors.request.use(
  config => {
    if (jwt.getToken()) {
      config.headers['Authorization'] = `Bearer ${jwt.getToken()}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

/**
 * 响应拦截器-如果登录信息出错则跳转登录页
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    Message({
      type: 'error',
      message: '登录失败'
    })
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.commit(types.UNSET_USER_INFO)
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
  })

export default axios
