import axios from '../helpers/fetch'

export default {
  getMemberList (page) {
    page = page || 1
    return axios.get('/api/users?', {
      params: {
        page
      }
    })
  }
}
