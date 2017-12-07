<template>
  <div class="layout">
    <top-header
      :backgroundColor="backgroundColor"
      :textColor="textColor"
      :collapse="collapse"
    ></top-header>
    <div class="layout-side">
      <side-menu
        :backgroundColor="backgroundColor"
        :textColor="textColor"
        :activeTextColor="activeTextColor"
        :collapse="collapse"
      ></side-menu>
    </div>
  </div>
</template>

<script>
  import SideMenu from './SideMenu'
  import TopHeader from './TopHeader'
  import {mapState} from 'vuex'

  export default {
    name: 'Layout',
    components: {
      TopHeader,
      SideMenu
    },
    data () {
      return {}
    },
    beforeCreate () {
      this.$store.dispatch('getUserInfo').catch(() => {
        this.$message({
          message: '用户登录已超时',
          type: 'error',
          duration: 1000
        })
        this.$router.push({ name: 'login' })
      })
    },
    computed: {
      ...mapState({
        backgroundColor: state => state.app.backgroundColor,
        textColor: state => state.app.textColor,
        activeTextColor: state => state.app.activeTextColor,
        collapse: state => state.app.collapse
      })
    }
  }
</script>

<style lang="scss">
  @import './Layout.scss';
</style>
