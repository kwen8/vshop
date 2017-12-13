<template>
  <el-card>
    <el-row>
      <el-col  :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <MemberInfoForm :buttonText="buttonText" :formAction="formAction"></MemberInfoForm>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  import MemberInfoForm from '../../components/member/MemberInfoForm'
  export default {
    components: {
      MemberInfoForm
    },
    data () {
      return {
        buttonText: '立即创建',
        formAction: '/test',
        msg: 'hello vue'
      }
    }
  }
</script>
