<template>
  <el-table
    :data="adminList"
    border
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
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
      label="最后登录时间"
      width="150">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="allocatePermission(scope.$index, scope.row)">分派权限</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="adminDelete(scope.$index, scope.row)">删除</el-button>
      </template>
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
    },
    methods: {
      allocatePermission (i, admin) {
        this.$router.push({
          name: 'allocate_permission',
          query: {
            id: admin.id
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
