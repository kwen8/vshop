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
    meta: {
      title: '会员管理'
    },
    component: Layout,
    children: [
      {
        path: 'list',
        icon: 'el-icon-tickets',
        meta: {
          title: '会员列表'
        },
        name: 'member_list',
        component: resolve => {
          require(['@/views/member/MemberList.vue'], resolve)
        }
      },
      {
        path: 'add',
        icon: 'el-icon-circle-plus-outline',
        meta: {
          title: '添加会员'
        },
        name: 'member_add',
        component: resolve => {
          require(['@/views/member/MemberAdd.vue'], resolve)
        }
      },
      {
        path: ':id/edit',
        meta: {
          title: '会员编辑',
          isHide: true
        },
        name: 'member_list_edit',
        component: resolve => {
          require(['@/views/member/MemberEdit.vue'], resolve)
        }
      }
    ]
  },
  {
    path: '/goods',
    icon: 'el-icon-goods',
    name: 'goods',
    meta: {
      title: '商品管理'
    },
    component: Layout,
    children: [
      {
        path: 'list',
        icon: 'el-icon-tickets',
        meta: {
          title: '商品列表'
        },
        name: 'goods_list',
        component: resolve => {
          require(['@/views/goods/GoodsList.vue'], resolve)
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
