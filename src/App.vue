<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #app {
    height: 100%;
  }
</style>
