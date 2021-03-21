<template>

  <el-container >

    <el-aside width="200px">
<!--      @open="handleOpen"-->
<!--      @close="handleClose"-->
      <my_menu></my_menu>
    </el-aside>

    <el-container>

      <el-main style="padding: 0">

        <el-table
          ref="filterTable"
          :data="tableData"
          style="width: 100%">

          <el-table-column
            prop="time"
            label="日期"
            sortable
            width="180">
          </el-table-column>

          <el-table-column
            prop="orderNum"
            label="订单号"
            width="150">
          </el-table-column>

          <el-table-column
            prop="foodName"
            label="菜名"
            width="100">
          </el-table-column>

          <el-table-column
            prop="foodName1"
            label=""
            width="120">
          </el-table-column>

          <el-table-column
            prop="allPrice"
            label="价格"
            width="120">
          </el-table-column>

          <el-table-column
            prop="remark"
            label="备注"
            width="140">
          </el-table-column>

          <el-table-column
            prop="UserCf"
            label="收货完成"
            width="100">
          </el-table-column>


          <el-table-column
            prop="type"
            label="类别"
            width="120"
            :filters="[{ text: '堂食', value: '堂食' }, { text: '外卖', value: '外卖' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.type === '外卖' ? 'primary' : 'success'"
                disable-transitions>{{scope.row.type}}
              </el-tag>
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
      this.getRecord()
    },
    data() {
      return {

        tableData:[ ],

        table: false,
        dialog: false,
        loading: false,
        drawer: false
      }
    },
    methods: {
       getRecord(){
        this.$http.get("dining/OrdersRecord")
         .then(res=>{
           console.log(res)
           this.tableData = res.data

         })

      },


      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row ) {
        return row.type === value;

      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>

<style scoped>

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
