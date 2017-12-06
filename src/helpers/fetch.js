import axios from 'axios'
import jwt from './jwt'
axios.defaults.baseURL = 'http://shop-api.dev'

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
