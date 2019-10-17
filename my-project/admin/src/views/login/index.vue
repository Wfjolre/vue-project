<template>
    <div class="loginBox">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" >
        <el-form-item prop="username">
            <i class="el-icon-delete"></i>
            <el-input type="text" v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" :loading='loading'>登录</el-button>
             <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        <el-form-item>
            <router-link to="/register">注册</router-link>
        </el-form-item>
    </el-form>
    </div>
    
</template>

<script>
  export default {
    name:'login',
    data() {
      return {
           loading:false,
            msg:"",
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.loading = true;
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    try {
                        await this.$store.dispatch('userLogin', this.ruleForm)
                        this.$router.push('/')
                    } catch (error) {
                        console.log(error);
                    }
                }else{
                    console.log('error submit!!');
                    return false;
                }
            });
           
            this.loading=false;
            
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss">
.loginBox{
    width: 800px;
    height:800px;
    position: relative;
    // display: flex;
    //  align-items: center;
    //     justify-content: center;
    position: fixed;
    margin: auto;
    left:0;
    right: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    border: 1px solid #333333;
    text-align: center;
    .el-form{
        width: 400px;
            padding: 35px;
            position: absolute;
            left: 0%;
            right: 0%;
            top: 20%;
            margin: auto;
           
    }
    .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
    .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;
        }
}

</style>