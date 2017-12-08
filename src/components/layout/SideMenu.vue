<template>
  <el-menu
    default-active="1-1"
    class="side-menu"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :collapse="collapse"
    router>
    <el-submenu v-for="menu in menuList" :key="menu.name" :index="menu.path">
      <template slot="title">
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.title }}</span>
      </template>
      <el-menu-item v-for="subMenu in menu.children" :key="subMenu.name" :index="subMenu.path">
        <i :class="subMenu.icon"></i>
        {{ subMenu.title }}
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
      }
    },
    data () {
      return {}
    }
  }
</script>
