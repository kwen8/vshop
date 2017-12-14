<template>
  <el-menu
    :default-active="currentRoutes"
    class="side-menu"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :collapse="collapse"
    router>
    <el-submenu v-for="menu in menuList" :key="menu.name" :index="menu.path">
      <template slot="title">
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.meta.title }}</span>
      </template>
      <el-menu-item v-for="subMenu in menu.children" v-if="!subMenu.meta.isHide" :key="subMenu.name" :index="`${menu.path}/${subMenu.path}`">
        <i :class="subMenu.icon"></i>
        {{ subMenu.meta.title }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    props: {
      backgroundColor: {
        type: String
      },
      textColor: {
        type: String
      },
      activeTextColor: {
        type: String
      },
      collapse: {
        type: Boolean
      },
      menuList: {
        type: Array
      },
      currentRoutes: {
        type: String
      }
    },
    data () {
      return {}
    }
  }
</script>
