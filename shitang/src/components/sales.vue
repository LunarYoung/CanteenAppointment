<template>

  <el-container >

    <el-aside width="200px">

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
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['金额', '总销量', '堂食', '外卖',]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
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
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '外卖',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [20, 32, 31, 34, 30, 30, 30]
          },
          {
            name: '堂食',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 10]
          },
          {
            name: '总销量',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '金额',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },



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
