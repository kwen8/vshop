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
          :current-routes="currentRoutes.path"
          :background-color="backgroundColor"
          :text-color="textColor"
          :active-text-color="activeTextColor"
          :collapse="collapse"
          :menu-list="menuList"
        ></side-menu>
      </div>
      <div class="content" :style="{marginLeft: collapse?'60px':'200px'}">
        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(breadcrumb, index) in currentRoutes.matched" :key="index" :to="{ path: breadcrumb.path }">
              {{ breadcrumb.meta.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
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
      return {
        currentRoutes: this.$router.currentRoute
      }
    },
    watch: {
      '$route' (to) {
        this.currentRoutes = to
      }
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
