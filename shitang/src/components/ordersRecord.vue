<template>

  <el-container >

    <el-aside width="200px" >
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
            prop="OrderTime"
            label="日期"
            sortable
            width="180">
          </el-table-column>

          <el-table-column
            prop="OrderNum"
            label="订单号"
            width="180">
          </el-table-column>

          <el-table-column
            prop="FoodName"
            label="菜名"
            width="80">
          </el-table-column>

          <el-table-column
            prop="FoodName1"
            label=""
            width="100">
          </el-table-column>

          <el-table-column
            prop="Price"
            label="价格"
            width="180">
          </el-table-column>

          <el-table-column
            prop="Remark"
            label="备注"
            width="230">
          </el-table-column>

          <el-table-column
            prop="Type"
            label="类别"
            width="100"
            :filters="[{ text: '堂食', value: '堂食' }, { text: '外卖', value: '外卖' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.Type === '外卖' ? 'primary' : 'success'"
                disable-transitions>{{scope.row.Type}}</el-tag>
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

        //table: false,
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
        return row.Type === value;

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
