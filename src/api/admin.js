import axios from '../helpers/fetch'

export default {
  getAdminList () {
    return axios.get('/api/admins')
  }
}
