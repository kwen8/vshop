import axios from '../helpers/fetch'

export default {
  getAdminList () {
    return axios.get('/api/admins')
  },
  getAdminPermissions (userId) {
    return axios.get(`/api/users/${userId}/permissions`)
  },
  allocatePermission (userId, permissions) {
    return axios.post(`/api/users/${userId}/permissions`, {
      permissions
    })
  }
}
