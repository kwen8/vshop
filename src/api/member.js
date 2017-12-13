import axios from '../helpers/fetch'

export default {
  getMemberList () {
    return axios.get('/api/users')
  }
}
