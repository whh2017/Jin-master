<template>
  <div class="login-box">
    <div class="bg"></div>
    <transition name="form-fade" mode="in-out">
      <div class="login-content tc" v-show="showLogin">
        <div>
          <div class="box">
            <img src="../assets/images/Logo.jpg">
            <h2>Jin后台信息管理系统</h2>
          </div>
          <div class="user">
            <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm" >
              <el-form-item prop="user">
                <i class="icon iconfont icon-wode"></i>
                <el-input placeholder="用户名" class="ipt" v-model="loginForm.user"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <i class="icon iconfont icon-zuji"></i>
                <el-input placeholder="密码" class="ipt" type="password" v-model="loginForm.password"></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" class="login-btn" @click="confirmLogin('loginForm')">登陆</el-button>
            <el-alert title="未登录过的账号，将自动注册!" type="warning" show-icon :closable="false">
            </el-alert>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          user: '',
          password: ''
        },
        loginFormRules: {
          user: [
            {
              required: true, message: '请输入账户名', trigger: 'blur'
            }
          ],
          password: [
            {
              required: true, message: '请输入账户密码', trigger: 'blur'
            },
            { min: 6, message: '请输入至少6位字符的密码', trigger: 'blur'}
          ]
        },
        showLogin: false
      }
    },
    mounted() {
      this.showLogin = true;
    },
    methods: {
      confirmLogin(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

          } else {

            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss">
  .bg {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    right: 0;
    background: #62A8F1;
    z-index: -999;
  }
  .form-fade-enter-active,
  .form-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter,
  .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
  .login-content {
    width: 360px;
    height: 260px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -130px;
    margin-left: -180px;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    .login-btn {
      margin: 5px 0 20px;
      width: 100%;
    }
    .user {
      .el-form-item {
        position: relative;
        input {
          text-indent: 25px;
        }
        i.icon {
          position: absolute;
          top: 2px;
          left: 10px;
          z-index: 2;
          font-size: 22px;
        }
      }
    }
    .box {
      position: absolute;
      top: -140px;
      left: 0;
      right: 0;
      img {
        width: 80px;
        height: 80px;
      }
      h2 {
        color: #fff;
        font-size: 28px;
        margin-top: 5px;
      }
    }
  }
</style>
