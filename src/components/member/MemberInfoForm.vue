<template>
  <el-form labelWidth="100px" :model="memberForm" status-icon ref="memberForm" :rules="memberFormRules" >
      <el-form-item label="会员名称" required  prop="name">
        <el-input v-model="memberForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱地址" prop="email" required>
        <el-input  v-model="memberForm.email"></el-input>
      </el-form-item>
      <el-form-item label="手机"  prop="phone">
        <el-input v-model="memberForm.phone" ></el-input>
      </el-form-item>
      <el-form-item label="登录密码" required  prop="password">
        <el-input type="password" v-model="memberForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" required prop="checkPass">
        <el-input type="password" v-model="memberForm.checkPass" ></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group  v-model="memberForm.gender">
          <el-radio label="保密"></el-radio>
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="身份证号码" prop="idCardNum">
        <el-input type="" v-model="memberForm.idCardNum"></el-input>
      </el-form-item>
      <el-form-item label="身份证正面" >
        <el-upload
          v-model="memberForm.idCardFront"
          action=""
          :on-change="idFrontChange"
          :file-list="idFrontFileList"
          ref="uploadCardFront"
          :auto-upload="false"
          accept="image/*"
          :before-upload="addCardFront">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="身份证反面" >
        <el-upload
          v-model="memberForm.idCardBack"
          action="http://shop-api:8888/api/users"
          :on-change="idBackChange"
          :file-list="idBackFileList"
          ref="uploadCardBack"
          :auto-upload="false"
          accept="image/*"
          :before-upload="addCardBack">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="审核状态">
        <el-select  placeholder=  "请选择" v-model="memberForm.status">
          <el-option label="审核成功" value="0"></el-option>
          <el-option label="审核失败" value="1"></el-option>
          <el-option label="未审核" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('memberForm')">{{buttonText}}</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
  import member from '../../api/member'

  export default {
    props: {
      buttonText: {
        type: String
      },
      formAction: {
        type: String
      }
    },
    components: {},
    data () {
      const validateName = (rules, value, callback) => {
        if (value === '') {
          callback(new Error('请输入会员名称'))
        }
        callback()
      }
      const validateEmail = (rules, value, callback) => {
        let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (value === '') {
          callback(new Error('请输入邮箱地址'))
        }
        if (value !== '' && !reg.test(value)) {
          callback(new Error('邮箱格式不正确'))
        }
        callback()
      }
      const validatePhone = (rules, value, callback) => {
        let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
        if (value !== '') {
          setTimeout(() => {
            if (!reg.test(value)) {
              callback(new Error('手机号码格式不正确'))
            }
            callback()
          }, 1000)
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
      const validatePass2 = (rule, value, callback) => {
        if (this.memberForm.password !== '') {
          if (value === '') {
            callback(new Error('请再次输入密码'))
          } else if (value !== this.memberForm.password) {
            callback(new Error('两次输入密码不一致!'))
          } else {
            callback()
          }
        }
      }
      const validateIdCardNum = (rule, value, callback) => {
        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        if (value !== '') {
          if (!reg.test(value)) {
            callback(new Error('身份号码格式不正确'))
          } else {
            callback()
          }
        } else {
          callback()
        }
      }
      return {
        uploadForm: new FormData(),
        memberForm: {
          name: '',
          email: '',
          phone: '',
          password: '',
          checkPass: '',
          gender: '保密',
          idCardNum: '',
          idCardFront: '',
          idCardBack: '',
          status: '2'
        },
        memberFormRules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          email: [
            { validator: validateEmail, trigger: 'blur' }
          ],
          phone: [
            { validator: validatePhone, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          idCardNum: [
            { validator: validateIdCardNum, trigger: 'blur' }
          ]
        },
        idFrontFileList: [],
        idBackFileList: []
      }
    },
    methods: {
      submit (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.uploadForm.append('name', this[formName].name)
            this.uploadForm.append('email', this[formName].email)
            this.uploadForm.append('phone', this[formName].phone)
            this.uploadForm.append('password', this[formName].password)
            this.uploadForm.append('gender', this[formName].gender)
            this.uploadForm.append('idCardNum', this[formName].idCardNum)
            this.uploadForm.append('status', this[formName].status)
            member.addMember(this[formName]).then(res => {
              console.log(res)
            })
            this.$refs.uploadCardFront.submit()
            this.$refs.uploadCardBack.submit()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      idFrontChange (file, fileList) {
        this.idFrontFileList = []
        this.idFrontFileList.push(file)
      },
      idBackChange (file, fileList) {
        this.idBackFileList = []
        this.idBackFileList.push(file)
      },
      addCardFront (file) {
        this.memberForm.idCardFront = file
        return false
      },
      addCardBack (file) {
        this.memberForm.idCardBack = file
        return false
      }
    }
  }
</script>