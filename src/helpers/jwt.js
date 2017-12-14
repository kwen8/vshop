import Cookies from 'js-cookie'

export default {
  getToken () {
    return Cookies.get('jwtToken')
  },

  setToken (token, data) {
    data = data || { expires: 1 / 24 }
    Cookies.set('jwtToken', token, data)
  },

  removeToken () {
    Cookies.remove('jwtToken')
  }
}
