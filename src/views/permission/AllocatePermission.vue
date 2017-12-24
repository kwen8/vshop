<template>
  <el-card v-loading="loading">
    <el-checkbox-group v-model="checkedPermissions" @change="handleCheckedPermissionsChange">
      <el-checkbox v-for="permission in permissions" :label="permission.name" :key="permission.name">{{ $t(`permission.${permission.name}`) }}</el-checkbox>
    </el-checkbox-group>
    <el-button type="primary" @click="submitPermissions">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </el-card>
</template>

<script>
  import permission from '../../api/permission'
  import admin from '../../api/admin'
  export default {
    data () {
      return {
        permissions: [],
        checkedPermissions: [],
        userId: this.$router.currentRoute.query.id,
        loading: true
      }
    },
    created () {
      admin.getAdminPermissions(this.userId).then(res => {
        this.checkedPermissions = res.data.data
      })
      permission.getAllPermissions().then(res => {
        this.loading = false
        this.permissions = res.data.data
      })
    },
    methods: {
      handleCheckedPermissionsChange () {
        console.log(this.checkedPermissions)
      },
      submitPermissions () {
        admin.allocatePermission(this.userId, this.checkedPermissions).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style>

</style>
