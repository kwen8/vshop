<template>
  <el-card v-loading="loading">
    <el-checkbox-group v-model="checkedPermissions" @change="handleCheckedPermissionsChange">
      <el-checkbox v-for="permission in permissions" :label="permission.name" :key="permission.name">{{ permission.name }}</el-checkbox>
    </el-checkbox-group>
  </el-card>
</template>

<script>
  import permission from '../../api/permission'
  import member from '../../api/member'
  export default {
    data () {
      return {
        permissions: [],
        checkedPermissions: [],
        loading: true
      }
    },
    created () {
      const userId = this.$router.currentRoute.query.id
      member.getPermissions(userId).then(res => {
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
      }
    }
  }
</script>

<style>

</style>
