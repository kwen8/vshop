<template>
  <el-card class="member-list">
    <el-table
      v-loading="loading"
      :data="memberData"
      border
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="id"
        label="id"
        width="55">
      </el-table-column>
      <el-table-column
        label="性别"
        width="50">
        <template slot-scope="scope">{{ formatGender(scope.row.gender) }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号码"
        width="130"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="email"
        label="email"
        width="200"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="注册日期"
        width="150">
      </el-table-column>
      <el-table-column label="操作" width="150" fixed="right">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="member-list-pagination"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pagination.per_page"
      layout="total, prev, pager, next, jumper"
      :total="pagination.total">
    </el-pagination>
  </el-card>
</template>

<script>
  import member from '../../api/member'
  export default {
    data () {
      return {
        msg: 'hello vue',
        memberData: [],
        pagination: {},
        loading: true
      }
    },
    created () {
      member.getMemberList().then(res => {
        this.loading = false
        console.log(res)
        this.pagination = res.data.meta
        this.memberData = res.data.data
      })
    },
    methods: {
      handleCurrentChange (page) {
        this.loading = true
        member.getMemberList(page).then(res => {
          this.loading = false
          this.pagination = res.data.meta
          this.memberData = res.data.data
        })
      },
      formatGender (gender) {
        const genderData = ['无', '男', '女']
        return genderData[gender]
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
  .member-list {
    width: 100%;
    &-pagination {
      text-align: right;
      margin-top: 15px;
    }
  }
</style>
