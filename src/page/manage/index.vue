<template>
  <div class="index">
    <header-lump></header-lump>
    <div class="data-count">
      <h2>数据统计</h2>
      <ul class="today clearfix">
        <li>当日数据：</li>
        <li>
          <span>7</span>新增用户</li>
        <li>
          <span>7</span>新增订单</li>
        <li>
          <span>7</span>新增管理员</li>
      </ul>
      <ul class="final clearfix">
        <li class="blue">总数据：</li>
        <li>
          <span>7</span>注册用户</li>
        <li>
          <span>7</span>订单</li>
        <li>
          <span>7</span>管理员</li>
      </ul>
      <div id="myChart" class="user-chart"></div>
    </div>
  </div>
</template>

<script>
  import API from '../../api/API'
  const api = new API();
  import headerLump from '../../components/header/header'
  // 引入Echarts模板
  var echarts = require('echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    data() {
      return {
        allData: []
      }
    },
    components: {
      headerLump
    },
    created: function() {},
    mounted: function() {
      // 初始化
      this.drawLine();

      var myChart = echarts.init(document.getElementById('myChart'));
      // mock数据
      api.getAllData().then(res => {
        myChart.hideLoading();
        let YData = JSON.parse(res.data).Ydata;
        let XData = JSON.parse(res.data).Xdata;
        myChart.setOption({
          series: YData,
          xAxis: {
            data: XData
          }
        })
      });
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('myChart'));
        myChart.showLoading();
        // 绘制图表
        myChart.setOption({
          title: {
            text: '新增数据折线图'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['新注册用户', '新增订单', '新增管理员']
          },
          grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
          },
          yAxis: {
            type: 'value'
          }
        });
      }
    }
  }
</script>

<style lang="scss">
  .data-count {
    .user-chart {
      width: 1100px;
      height: 400px;
      margin: 40px auto;
    }
    padding: 20px;
    h2 {
      text-align: center;
      font-size: 30px;
      margin-bottom: 10px;
      font-family: "宋体";
    }
    .today,
    .final {
      li {
        float: left;
        width: 200px;
        height: 40px;
        line-height: 50px;
        padding-left: 20px;
        background: #e5e9f2;
        text-align: center;
        border-radius: 5px;
        color: #000;
        margin: 0 20px 10px 0;
        font-size: 18px;
        font-family: "宋体";
        span {
          margin-right: 5px;
          color: #333;
          font-size: 24px;
          font-family: "微软雅黑";
        }
        &:first-child {
          background: #ff9800;
          color: #fff;
          font-size: 24px;
          line-height: 40px;
          font-family: "微软雅黑";
        }
        &.blue {
          background: #20a0ff;
        }
      }
    }
  }
</style>
