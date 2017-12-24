<template>
  <el-row class="top-header" :style="{background: backgroundColor, color: textColor}">
    <el-col class="top-header-title" :style="{width: collapse?'64px':'200px'}">
      <router-link to="/" tag="div">{{ collapse?name.slice(0,1) : name }}</router-link>
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
    <el-col class="top-header-language">
      <el-dropdown :style="{color: textColor}">
        <span class="el-dropdown-link language-inner">
          {{ $t(`system.${language}`) }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>中文</el-dropdown-item>
          <el-dropdown-item>English</el-dropdown-item>
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
      },
      toggleLanguage () {
        this.$i18n.locale = 'EN'
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
      },
      language () {
        return this.$store.state.app.language
      }
    }
  }
</script>
