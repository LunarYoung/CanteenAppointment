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

    created () {
      this.getSales()

    },

    data () {
      return {
        list: [],
        aa: [1, 0, 0, 5, 0],
        table: false,
        dialog: false,
        loading: false,
        drawer: false,
      };
    },

    mounted () {
      this.drawLine();
    },

    methods: {
    //   getSales() {
    //     this.$http.get("dining/sales")
    //       .then(res => {
    //         console.log(res)
    //         this.list = res.data
    //
    //          console.log(this.list)
    //       })
    // },

      drawLine(){
        this.char = echarts.init(document.getElementById('main'));

        this.char.setOption({

          title: {
            text: '销量折线图',
            textStyle:{					//---主标题内容样式
              color:'#3398DB'
            },

            padding:[0,0,100,100]				//---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位

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
              data: ['最近第七天', '最近第六天', '最近第五天', '最近第四天', '最近第三天', '最近第二天', '最近第一天']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],

          order: [],

          series: [
            {
              name: '外卖',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: []

            },
            {
              name: '堂食',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data:[]
            },
            {
              name: '总销量',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: this.list
            },
          ]
        })
        this.$http.get('http://localhost:80/dining/sales')
          .then((res)=>{
            console.log('访问后台');
            // console.log(res.data);
            this.list=res.data;
            console.log(this.list);
            // this.labList = eval('('+data+')');
            this.char.setOption({
              series: [
                {
                  name: '外卖',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data: this.list.a

                },
                {
                  name: '堂食',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data:this.list.b
                },
                {
                  name: '总销量',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data: this.list.c
                },
              ]
            })
          });
      }

 }


  }

      // 使用刚指定的配置项和数据显示图表。




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
