<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import jwt from './helpers/jwt'
  export default {
    created () {
      if (jwt.getToken()) {
        this.$store.dispatch('getUserInfo')
      } else {
        this.$router.push({ name: 'login' })
      }
    }
  }
</script>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
  }
</style>
