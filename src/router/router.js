import Layout from '@/components/layout/Layout'

const loginRoutes = {
  path: '/login',
  name: 'login',
  component: resolve => { require(['@/views/Login'], resolve) }
}

const commonRoutes = [
  {
    path: '/',
    name: 'home',
    component: Layout
  }
]

export const appRoutes = [
  {
    path: '/member',
    icon: 'el-icon-edit',
    name: 'member',
    title: '会员管理',
    component: Layout,
    children: [
      {
        path: 'list',
        icon: 'el-icon-tickets',
        title: '会员管理',
        name: 'member_list',
        component: resolve => {
          require(['@/views/member/MemberList.vue'], resolve)
        }
      },
      {
        path: 'add',
        icon: 'el-icon-circle-plus-outline',
        title: '添加会员',
        name: 'member_add',
        component: resolve => {
          require(['@/views/member/MemberAdd.vue'], resolve)
        }
      }
    ]
  }
]

export default [
  loginRoutes,
  ...commonRoutes,
  ...appRoutes
]
