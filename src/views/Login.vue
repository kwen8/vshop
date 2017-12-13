<template>
  <el-row type="flex" justify="center" align="middle" class="login-page">
    <el-col :xs="20" :sm="12" :md="10" :lg="6">
      <el-card class="loginForm">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model.number="loginForm.email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {

  name: 'Login',

  data () {
    const validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        email: '',
        password: ''
      },
      loginRules: {
        email: [
          { validator: validateEmail, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = {
            email: this[formName].email,
            password: this[formName].password
          }
          this.$store.dispatch('login', data).then(res => {
            this.$router.push({ name: 'home' })
          }).catch((e) => {
            this.$message.error(e.response.data.message)
          })
        } else {
          this.$message.error('请完整填写表单')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-page {
    height: 100%;
    .loginForm {
      transform: translateY(-10%);
    }
  }
</style>
