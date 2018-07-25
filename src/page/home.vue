<template>
  <div class="main-content">
    <el-row>
      <el-col :span="4">
        <div class="bg"></div>
        <el-menu class="manage" :default-active="defaultActive" background-color="#324157" text-color="#bfcbd9" active-text-color="#2097f0"
          router>
          <el-menu-item index="home">
            <i class="el-icon-menu"></i><span>首页</span></el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i><span>数据管理</span></template>
            <el-menu-item index="userList"><span>用户列表</span></el-menu-item>
            <el-menu-item index="shopList"><span>商家列表</span></el-menu-item>
            <el-menu-item index="foodList"><span>食品列表</span></el-menu-item>
            <el-menu-item index="orderList"><span>订单列表</span></el-menu-item>
            <el-menu-item index="adminList"><span>管理员列表</span></el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-plus"></i><span>添加数据</span></template>
            <el-menu-item index="addShop"><span>添加商铺</span></el-menu-item>
            <el-menu-item index="addGoods"><span>添加商品</span></el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i><span>图表</span></template>
            <el-menu-item index="visitor"><span>用户分布</span></el-menu-item>
            <el-menu-item index="newMember"><span>用户数据</span></el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i><span>编辑</span></template>
            <el-menu-item index="uploadImg"><span>上传图片</span></el-menu-item>
            <el-menu-item index="vueEdit"><span>文本编辑</span></el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i><span>设置</span></template>
            <el-menu-item index="adminSet"><span>管理员设置</span></el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-warning"></i><span>说明</span></template>
            <el-menu-item index="explain"><span>说明</span></el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    computed: {
      defaultActive: function () {
        // return this.$route.path.replace('/', '');
      }
    },
  }

</script>

<style lang="scss">
  .main-content {
   .el-icon-arrow-down:before{
     color: #fff;
     font-size: 16px;
   }
    .bg {
      width: 16.6%;
      position: fixed;
      top: 0;
      bottom: 0;
      background: #324157;
    }
    .manage {
      i {
        color: #bdc9d6;
      }
    }
  }

</style>
