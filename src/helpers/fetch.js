import axios from 'axios'
import jwt from './jwt'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://shop-api.test' : 'http://shop.chenkewen.com'

axios.defaults.baseURL = baseURL

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (jwt.getToken()) {
    config.headers['Authorization'] = 'Bearer ' + jwt.getToken()
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

export default axios
