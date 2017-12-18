<template>
  <el-row class="top-header" :style="{background: backgroundColor, color: textColor}">
    <el-col class="top-header-title" :style="{width: collapse?'64px':'200px'}">
      <router-link to="/" tag="div">{{ collapse?'K' : 'admin' }}</router-link>
    </el-col>
    <el-col class="top-header-collapse">
      <div class="toggle-side-bar" @click="toggleSideBar">
        <i class="el-icon-menu"></i>
      </div>
    </el-col>
    <el-col class="top-header-user">
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
  import gravatar from 'gravatar'
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
        this.$store.dispatch('logout').then(res => {
          this.$router.push({ name: 'login' })
        })
      }
    },
    computed: {
      name () {
        return this.$store.state.user.name
      },
      email () {
        return this.$store.state.user.email
      },
      sysUserAvatar () {
        return gravatar.url(this.email)
      }
    }
  }
</script>
