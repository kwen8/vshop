import axios from '../helpers/fetch'
export default {
  login (data) {
    return axios.post('/api/login', data)
  },
  logout () {
    return axios.post('/api/logout')
  },
  getUserInfo () {
    return axios.get('/api/admin')
  }
}
