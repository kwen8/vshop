import axios from '../helpers/fetch'
export default {
  login (data) {
    return axios.post('/api/login', data)
  },
  getUserInfo () {
    return axios.get('/api/admin')
  }
}
