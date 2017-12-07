<template>
  <el-row class="top-header" :style="{background: backgroundColor, color: textColor}">
    <el-col class="top-header-title" :style="{borderRight: backgroundColor}">
      admin
    </el-col>
    <el-col :span="10">
      <div class="toggle-side-bar">
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
      }
    }
  }
</script>
