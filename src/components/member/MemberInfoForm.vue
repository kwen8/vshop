<template>
  <el-form labelWidth="100px" >
      <el-form-item label="会员名称">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="邮箱地址">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="登录密码">
        <el-input type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group >
          <el-radio label="保密"></el-radio>
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="身份证号码">
        <el-input type=""></el-input>
      </el-form-item>
      <el-form-item label="身份证正面">
        <el-upload>
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="身份证反面">
        <el-upload>
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="收货地址">
        <el-row>
          <el-col :span="8">
            <el-select  placeholder="请选择省份">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <el-select  placeholder="请选择省份">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <el-select  placeholder="请选择省份">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input placeholder="填写详细地址"></el-input>
      </el-form-item>
      <el-form-item label="审核状态">
        <el-select  placeholder="请选择">
          <el-option label="审核成功" value="shanghai"></el-option>
          <el-option label="审核失败" value="beijing"></el-option>
          <el-option label="未审核" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">{{buttonText}}</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
  export default {
    props: {
      buttonText: {
        type: String
      }
    },
    components: {},
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>