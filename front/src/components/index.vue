<template>

  <el-container >

    <el-aside width="200px" >

       <my_menu></my_menu>

    </el-aside>
    <el-container>

      <el-main style="padding: 0">
         <div v-for="(item,i) in CardInfo"  :key="i"
               style="width: 78%">
            <el-card class="box-card">
              <div class="head">
                <div>
                  <span>{{item.foodName}}</span>
                        +
                  <span>{{item.foodName1}}</span>
                  <span v-if="item.remark===''">

                  <span>{{item.remark}}</span>

                  </span>

                  <span v-else>
                    (
                  <span>{{item.remark}}</span>
                    )
                  </span>

                </div>
                  <div class="head_right" v-if="item.remark===''">

                    <span  style="float:right;margin-right:-80px;">{{item.orderNum}}</span>
                  </div>

                <div class="head_right" v-else>

                  <span  style="float:right;margin-right:-8px;">{{item.orderNum}}</span>
                </div>


              </div>

              <div class="content">
                <div class="divImage" >
                  <img :src="item.url" class="image">
                  <img :src="item.url1" class="image1">
                </div>
                <div style="margin-left: 20px" >
                  <div>
                    <el-button @click="operate(item)" type="danger" plain class="btn_pull">挂起</el-button>
                  </div>
                  <div>
                    <el-button @click="operateFinish(item)" type="primary" plain class="btn_complete" >完成</el-button>
                  </div>
                  </div>
              </div>
            </el-card>
         </div>



      </el-main>
    </el-container>
  </el-container>



</template>

<script>
    export default {
      created() {
        this.getInFood()
      },


      data() {
        return {
          CardInfo: [],


          table: false,
          dialog: false,
          loading: false,
          gridData: [{
            order_id: 444,
            name: '鸡',

          }
          ],
          drawer: false,
        };
      },
      methods: {
        getInFood() {
          this.$http.get("dining/")
            .then(res => {
              console.log(res)
              this.CardInfo = res.data

            })
        },
        operate(item) {
          console.log(item);

          let data = new FormData();
          let a =item.orderNum
          data.append('orderId',a);
          console.log(a)

          this.$http.post('/dining/diningPu',data).then(() =>
            {this.getInFood()}
          )
          this.$notify({
            title: '已挂起',
            type: 'success',
            duration: 1500,
            position: 'bottom-right'
          });

        },

        operateFinish(item) {
          console.log(item);
          let data = new FormData();
          let a =item.orderNum
          data.append('orderId',a);
          console.log(a)
          this.$http.post('/dining/diningFi',data).then(() =>
            {this.getInFood()}
          )
          this.$notify({
            title: '订单完成',
            type: 'success',
            duration: 1500,
            position: 'bottom-right'
          });

        }
      }
    }
</script>

<style scoped>

.head{

  height: 30px;

  border-bottom: 1px solid grey;
  display: flex;

}


.head_right{
  width: 80px;
  color: #53A8FF;
  /*float: right;*/
  font-size: 20px;




}

.content{
  display: flex;
  margin-top: 25px;
}
.divImage{
  display: flex;

}
.image {
  width: 100px;
  display: block;

}

.image1 {
  width: 100px;
  display: block;
  margin-left: 10px;

}


.btn_pull{
  padding: 3px 0;
  width: 80px;
  height: 40px;
  margin-left: -5px;


}
.btn_complete{
  padding: 3px 0;
  width: 80px;
  height: 40px;
  margin-top: 10px;
  margin-left: -5px;
}


  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 350px;
    height: 200px;
    float: left;
    margin-top: 10px;
    margin-right: -250px;
    margin-left: 20px;

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
    background-color: grey;
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px!important;*/
    /*height: 100%;*/

  }
</style>
