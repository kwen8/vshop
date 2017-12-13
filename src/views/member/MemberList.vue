<template>
  <el-card class="member-list-container">
    <el-table
      :data="memberData"
      border
      style="width: 100%">
      <member-list-table-item></member-list-table-item>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </el-card>
</template>

<script>
  import member from '../../api/member'
  import MemberListTableItem from '../../components/member/MemberListTableItem'
  export default {
    components: {
      MemberListTableItem
    },
    data () {
      return {
        msg: 'hello vue',
        memberData: [],
        pagination: {}
      }
    },
    created () {
      member.getMemberList().then(res => {
        console.log(res.data)
        this.pagination = res.data.meta
        this.memberData = res.data.data
      })
    },
    methods: {
      handleSizeChange () {
        console.log(123)
      },
      handleCurrentChange () {
        console.log(456)
      }
    },
    computed: {
      currentPage () {
        return this.pagination.current_page
      }
    }
  }
</script>

<style lang="scss" scoped>
  .member-list-container {

  }
</style>
