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
    <el-col :span="4" class="top-header-user">
      <el-dropdown trigger="hover" :style="{color: textColor}">
        <span class="el-dropdown-link user-inner">
          <span class="user-name">{{ name }}</span>
          <img :src="this.sysUserAvatar" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
      },
      logout () {
        this.$store.dispatch('logout')
      }
    },
    computed: {
      name () {
        return this.$store.state.user.name
      },
      sysUserAvatar () {
        return require('../../assets/user/default-avatar.jpg')
      }
    }
  }
</script>
