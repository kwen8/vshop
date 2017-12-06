import Layout from '@/components/layout/Layout'
import Login from '@/views/Login'
const loginRoutes = {
  path: '/login',
  name: 'login',
  component: Login
}

const commonRoutes = [
  {
    path: '/',
    name: 'home',
    component: Layout
  }
]

export default [
  loginRoutes,
  ...commonRoutes
]
