import Cookies from 'js-cookie'

export default {
  getToken () {
    return Cookies.get('jwtToken')
  },

  setToken (token) {
    Cookies.set('jwtToken', token)
  },

  removeToken () {
    Cookies.remove('jwtToken')
  }
}
