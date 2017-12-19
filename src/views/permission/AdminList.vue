<template>
  <el-table
    :data="adminList"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="email"
      label="email地址">
    </el-table-column>
    <el-table-column
      prop="created_at"
      label="加入时间">
    </el-table-column>
    <el-table-column
      prop="last_login_time"
      label="最后登录时间">
    </el-table-column>
  </el-table>
</template>

<script>
  import admin from '../../api/admin'
  export default {
    name: 'admin-list',
    data () {
      return {
        adminList: []
      }
    },
    created () {
      admin.getAdminList().then(res => {
        this.adminList = res.data.data
      })
    }
  }
</script>

<style scoped>

</style>
