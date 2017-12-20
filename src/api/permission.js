import axios from '../helpers/fetch'

export default {
  getAllPermissions () {
    return axios.get('/api/permissions')
  }
}
