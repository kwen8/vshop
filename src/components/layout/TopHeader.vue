<template>
  <el-row class="top-header" :style="{background: backgroundColor, color: textColor}">
    <el-col class="top-header-title" :style="{width: collapse?'64px':'200px'}">
      {{ collapse?'K' : 'admin' }}
    </el-col>
    <el-col :span="10">
      <div class="toggle-side-bar" @click="toggleSideBar">
        <i class="el-icon-menu"></i>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    props: {
      backgroundColor: {
        type: String
      },
      textColor: {
        type: String
      },
      collapse: {
        type: Boolean
      }
    },
    methods: {
      toggleSideBar () {
        this.$store.commit('TOGGLE_SIDE_MENU')
      }
    }
  }
</script>
