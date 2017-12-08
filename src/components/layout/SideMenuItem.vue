<template>
  <div>
    <el-submenu v-for="menu in menuList" :key="menu.name" :index="menu.path">
      <template slot="title">
        <i :class="menu.icon"></i>
        <span>{{ menu.title }}</span>
      </template>
      <el-menu-item v-for="subMenu in menu.children" :key="subMenu.name" :index="subMenu.path">
        <i :class="subMenu.icon"></i>
        {{ subMenu.title }}
      </el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
  export default {
    name: 'side-menu-item',
    props: {
      menuList: Array
    }
  }
</script>

<style scoped>

</style>
