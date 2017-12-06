<template>
  <div class="layout">
    <div class="layout-side">
      <side-menu></side-menu>
    </div>
  </div>
</template>

<script>
import SideMenu from './SideMenu'
export default {

  name: 'Layout',

  components: {
    SideMenu
  },

  data () {
    return {

    }
  },

  created () {
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style lang="scss">
  @import './Layout.scss'
</style>
