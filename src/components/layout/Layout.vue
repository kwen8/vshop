<template>
  <div class="layout">
    <top-header
      :backgroundColor="backgroundColor"
      :textColor="textColor"
      :collapse="collapse"
    ></top-header>
    <div class="main">
      <div class="layout-side">
        <side-menu
          :background-color="backgroundColor"
          :text-color="textColor"
          :active-text-color="activeTextColor"
          :collapse="collapse"
          :menu-list="menuList"
        ></side-menu>
      </div>
      <div class="content">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import SideMenu from './SideMenu'
  import TopHeader from './TopHeader'
  import {mapState} from 'vuex'
  import { appRoutes } from '../../router/router'
  export default {
    name: 'Layout',
    components: {
      TopHeader,
      SideMenu
    },
    data () {
      return {}
    },
    created () {
      this.$store.dispatch('getUserInfo')
    },
    computed: {
      ...mapState({
        backgroundColor: state => state.app.backgroundColor,
        textColor: state => state.app.textColor,
        activeTextColor: state => state.app.activeTextColor,
        collapse: state => state.app.collapse
      }),
      menuList () {
        return appRoutes
      }
    }
  }
</script>

<style lang="scss">
  @import './Layout.scss';
</style>
