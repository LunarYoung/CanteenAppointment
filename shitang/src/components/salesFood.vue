<template>

  <el-container >

    <el-aside width="200px" >

      <my_menu></my_menu>

    </el-aside>

    <el-container>
      <el-main>

        <div id="main" style="width: 70%;height:80%;margin-left: 15%;margin-top: 5%"></div>

      </el-main>
    </el-container>
  </el-container>



</template>

<script>
  import echarts from 'echarts';

  export default {
    data(){
      return {
        tableDataWait: [{
          date: '2016-05-02 9:50:06',
          orderNum: 45444,
          foodName:"鸡肉手法是"

        }
        ],
        table: false,
        dialog: false,
        loading: false,
        drawer: false,
      };
    },
    name: 'index',
    mounted() {
      var myChart = echarts.init(document.getElementById('main'));
      var option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['烧鸭', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','a','b','d','c'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '销量',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 90, 330, 220,33,33,33,33]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
</script>

<style scoped>

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .el-header {
    background-color: grey;
  }

  .el-aside {
    background-color: #545c64;
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 70px;*/
    /*float:left;*/
    height: 580px;


  }

  .el-main {
    padding: 0;
    /*background-color: grey;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px!important;*/
    /*height: 100%;*/

  }
</style>
