<template>

  <el-container >
    <el-aside width="200px" >
       <my_menu></my_menu>
    </el-aside>
    <el-container>

      <el-main style="padding: 0">
        <el-table
          :data="tableData"
          style="width: 100%"
          max-height="250">

          <el-table-column
            fixed
            prop="Time"
            label="日期"
            width="150">
          </el-table-column>

          <el-table-column
            prop="FoodName"
            label="菜名"
            width="120">
          </el-table-column>

          <el-table-column
            prop="Advise"
            label="建议"
            width="550">
          </el-table-column>

          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                @click="checkDetail(scope.row)"

                type="text"
                size="small">
                删除
              </el-button>
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
      this.getOpinion()
    },
    methods: {
      getOpinion() {
        this.$http.get("dining/opinion")
          .then(res => {
            console.log(res)
            this.tableData = res.data

          })

      },



      deleteRow(index, rows) {
        rows.splice(index, 1)
      },

      checkDetail(val){

        let data = new FormData();
        let a =val.ID
        data.append('Id',a);
        this.$http.post('/dining/opinionDe',data)
        this.$notify({
          title: '删除成功',
          type: 'success',
          duration: 1500,
          position: 'bottom-right'
        });
      },
    },

    data() {
      return {
        tableData: [],

        table: false,
        dialog: false,
        loading: false,
        drawer: false
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
