<template>
  <div>
    <el-table-column
      v-for="item in columns"
      :key="item.prop"
      :prop="item.prop"
      :width="item.width"
      :label="item.label"
      show-overflow-tooltip>
    </el-table-column>
  </div>
</template>

<script>
  export default {
    name: 'member-list-table-item',
    data () {
      return {
        columns: [
          {
            prop: 'id',
            label: 'id',
            width: '100'
          },
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'address',
            label: '地址'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
