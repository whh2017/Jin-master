<template>
  <div class="login-box">
    <div class="bg"></div>
    <transition name="form-fade" mode="in-out">
      <div class="login-content tc" v-show="showLogin">
        <div>
          <div class="box">
            <img src="../assets/images/Logo.jpg">
            <h2>Jinleme信息管理系统</h2>
          </div>
          <div class="user">
            <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm">
              <el-form-item prop="username">
                <i class="icon iconfont icon-wode"></i>
                <el-input placeholder="用户名" class="ipt" v-model="loginForm.username"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <i class="icon iconfont icon-zuji"></i>
                <el-input placeholder="密码" class="ipt" type="password" v-model="loginForm.password"></el-input>
              </el-form-item>
            </el-form>
            <el-checkbox class="remember" v-model="repwd">记住密码</el-checkbox>
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
  import API from '../api/API'
  const api = new API();
  import { setStore, getStore } from '../utils/utils'
  export default {
    data() {
      return {
        repwd: false,
        loginForm: {
          username: '',
          password: ''
        },
        loginFormRules: {
          username: [{
            required: true,
            message: '请输入账户名',
            trigger: 'blur'
          }],
          password: [{
              required: true,
              message: '请输入账户密码',
              trigger: 'blur'
            },
            {
              min: 6,
              message: '请输入至少6位字符的密码',
              trigger: 'blur'
            }
          ]
        },
        showLogin: false
      }
    },
    mounted() {
      this.showLogin = true;
      if(getStore('user')){
        this.loginForm = JSON.parse(getStore('user'));
      }
    },
    methods: {
      confirmLogin(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            let userData = Object.assign({}, this.loginForm);
            api.confirmLogin(userData).then(res => {
              if (JSON.parse(res.data).loginFlag) {
                this.$message({
                  message: '登录成功!',
                  type: 'success'
                });

                if(this.repwd){  // 记住密码则保存用户输入字段至localStorage
                  setStore('user', JSON.stringify(userData));
                }

                this.$router.push('home');
              }else{
                this.$message({
                  message: '登录失败!',
                  type: 'error'
                });
              }
            }).catch(error => {
              console.log(error);
            })
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
    background: -webkit-linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    background: -o-linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    background: -moz-1linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
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
    .el-checkbox__label {
      padding-left: 5px;
    }
    .remember{
      position: relative;
      right: -130px;
      top: -10px;
    }
    .login-btn {
      margin: 5px 0 7px;
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
