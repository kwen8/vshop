<template>
  <el-menu
    default-active="1-1"
    class="side-menu"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :collapse="collapse"
    router>
    <side-menu-item
      :menu-list="menuList"
    ></side-menu-item>
  </el-menu>
</template>

<script>
  import sideMenuItem from './SideMenuItem'
  export default {
    components: {
      sideMenuItem
    },
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
