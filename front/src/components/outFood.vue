<template>

  <el-container >

    <el-aside width="200px" >

      <my_menu></my_menu>

    </el-aside>

    <el-container>
      <el-main style="padding: 0">
        <el-table
          :data="tableData"
          style="width: 100%">

          <el-table-column
            label="日期"
            width="280">
            <template slot-scope="scope">
              <i ></i>
              <span >{{ scope.row.time }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="订单号"
            width="250">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <div slot="reference" class="name-wrapper">
                  <span size="medium">{{ scope.row.orderNum }}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column
            label="菜系"
            width="80">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <div slot="reference" class="name-wrapper">
                  <span size="medium">{{ scope.row.foodName }}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            label=""
            width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <div slot="reference" class="name-wrapper">
                  <span size="medium">{{ scope.row.foodName1 }}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column
            label="备注"
            width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <div slot="reference" class="name-wrapper">
                  <span size="medium">{{ scope.row.remark}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>


          <el-table-column label="操作">
            <template slot-scope="scope">

              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(scope.$index, scope.row)">完成</el-button>
            </template>
          </el-table-column>
        </el-table>

      </el-main>
    </el-container>
  </el-container>



</template>

<script>
  export default {
    created() {
      this.getOutFood()
    },
    data() {
      return {
        tableData:[],

        table: false,
        dialog: false,
        loading: false,
        drawer: false
      }
    },
    methods: {

      getOutFood() {
        this.$http.get("dining/outFood")
          .then(res => {
            console.log(res)
            this.tableData = res.data

          })

      },


      handleDelete(index, row) {

        let data = new FormData();
        let a =row.orderNum
        data.append('orderId',a);
        console.log(a)

        this.$http.post('/dining/outFoodOp',data).then(() =>
          {this.getOutFood()}
        )

        this.$notify({
          title: '完成订单',
          type: 'success',
          duration: 1500,
          position: 'bottom-right'
        });
      },


    }
  }
</script>

<style scoped>



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
