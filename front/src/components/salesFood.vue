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
    created () {
      this.getSales()
    },


    data(){
      return {


        a:[],
        list:[],
        name:[],
        num:[],
        table: false,
        dialog: false,
        loading: false,
        drawer: false,
      };
    },

    methods: {
      // getSales () {
      //   this.$http.get("dining/salesFood")
      //     .then(res => {
      //
      //       this.list = res.data
      //       console.log(this.list)
      //
      //     })
      //
      //
      // },
      initChart () {
        this.char = echarts.init(document.getElementById('main'));
        this.char.setOption({
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          title: {
            text: '菜品销量柱状图',
            textStyle:{					//---主标题内容样式
              color:'#3398DB'
            },

            padding:[0,0,100,100]				//---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位

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
              data:  [],
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
              data: [],
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              }
            }
          ],
        });
        this.$http.get('http://localhost:80/dining/salesFood')
          .then((res)=>{
            console.log('访问后台');
            this.list=res.data;
            console.log(this.list);
            this.char.setOption({
              series: [
                {
                  name: '销量',
                  type: 'bar',
                  barWidth: '60%',
                  data: this.list.b
                }
              ],
              xAxis: [
                {
                  type: 'category',
                   data:  this.list.a,
                  axisTick: {
                    alignWithLabel: true
                  }
                }
              ],
            })
          });

        // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);

      },

    },

    name: 'index',
    mounted() {
      this.initChart();
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
    position: relative;


  }

  .el-main {
    padding: 0;
    /*background-color: grey;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px!important;*/
    /*height: 100%;*/

  }
  
  #main{
    margin-top: 200px;
  }

</style>
