<template>
  <div class="welcome-content">
    <div class="solar">
      <i class="mercury"></i>
      <i class="venus"></i>
      <i class="earth"></i>
      <i class="mars"></i>
      <i class="belt"></i>
      <i class="jupiter"></i>
      <i class="saturn"></i>
      <i class="uranus"></i>
      <i class="neptune"></i>
    </div>
    <transition name="welcome-button">
      <div class="start" v-show="finishWelcomeFlag">
        <router-link to='/login'>进入系统</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        finishWelcomeFlag: false
      }
    },
    mounted: function() {
      setTimeout(() => {
        this.finishWelcomeFlag = true;
      },2000);
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../style/loading/loading.css';

  .welcome-button-enter-active, .welcome-button-leave-active{
    transition: all .5s linear;
  }
  .welcome-button-enter, .welcome-button-leave-to{
    opacity: 0;
  }

  .welcome-content .start a{
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    margin-top: -100px;
    margin-left: -100px;
    width: 200px;
    height: 200px;
    line-height: 200px;
    font-size: 28px;
    border-radius: 50%;
    text-align: center;
    border: solid 5px #aeeeee;
    background: #4facfe;
    color: #4facfe;
    background: #fff;
    &:hover{
      color: #fff;
      background: #4facfe;
    }
  }
</style>
