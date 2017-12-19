<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>
