<template>
  <div class="header-lump">
    <div class="clearfix bg1">
      <div class="fl">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item class="first" :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="fr">
        <el-dropdown class="user" @command="handleCommand">
          <img src="../../assets/images/maiheliang.jpg" class="avator">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="signout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      async handleCommand(command) {
        if (command == 'home') {
          this.$router.push('/home');
        } else if (command == 'signout') {
          this.$confirm('即将退出当前管理系统, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$notify({
              type: 'success',
              message: '退出成功'
            });
            this.$router.push('/login');
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  .header-lump {
    .bg1 {
      padding: 0 15px;
      background: #eff2f7;
    }
    .el-breadcrumb {
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 12px;
      .first {
        .el-breadcrumb__inner {
          color: #97a8be;
        }
      }
    }
    .user {
      .avator {
        display: inline-block;
        vertical-align: middle;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-top: 7.5px;
        cursor: pointer;
      }
    }
  }
</style>
