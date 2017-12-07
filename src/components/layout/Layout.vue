<template>
  <div class="layout">
    <top-header
      :backgroundColor="backgroundColor"
      :textColor="textColor"
    ></top-header>
    <div class="layout-side">
      <side-menu
        :backgroundColor="backgroundColor"
        :textColor="textColor"
        :activeTextColor="activeTextColor"
      ></side-menu>
    </div>
  </div>
</template>

<script>
import SideMenu from './SideMenu'
import TopHeader from './TopHeader'
import { mapState } from 'vuex'
export default {

  name: 'Layout',

  components: {
    TopHeader,
    SideMenu
  },
  data () {
    return {

    }
  },
  created () {
    this.$store.dispatch('getUserInfo')
  },
  computed: {
    ...mapState({
      backgroundColor: state => state.app.backgroundColor,
      textColor: state => state.app.textColor,
      activeTextColor: state => state.app.activeTextColor
    })
  }
}
</script>

<style lang="scss">
  @import './Layout.scss';
</style>
