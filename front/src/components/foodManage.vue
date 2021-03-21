<template>

  <el-container >

    <el-aside width="200px"  >

       <my_menu></my_menu>

    </el-aside>

    <el-container>

      <el-main style="padding: 0">

        <el-table
          :data="tableData"
          style="width: 100%">

          <el-table-column
            label="图片"
            width="180">
            <template slot-scope="scope">
              <i ></i>
              <el-image style="height: 80px;width: 80px;margin: 0" :src="scope.row.ImageUrl"> </el-image>
            </template>
          </el-table-column>
          <el-table-column
            label="菜名"
            width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <div slot="reference" class="name-wrapper">
                  <span> {{ scope.row.Name }}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column
            label="价格"
            width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <div slot="reference" >
                  <el-tag type="danger" size="medium">{{ scope.row.Price }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"

                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>




        </el-table>


      </el-main>
    </el-container>
  </el-container>

<!--  <el-image style="height: 80px;width: 80px" :src="tableData[0].image"> </el-image>-->

</template>

<script>
  export default {
    created() {
      this.getFood()
    },
    data() {
      return {
        tableData: [{

        },


        ],

        table: false,
        dialog: false,
        loading: false,
        drawer: false
      }
    },
    methods: {



      getFood() {
        this.$http.get("dining/manageFood")
          .then(res => {
            console.log(res)
            this.tableData = res.data

          })

      },

      handleEdit(index, row) {
        console.log(index, row);

        this.$prompt('请输入价格', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',

        }).then(({ value }) => {

          let data = new FormData();
          let a =value
          let b =row.ImageId
          data.append('imageId',b);
          data.append('price',a);
          this.$http.post('/dining/foodEdit',data).then(() =>
            {this.getFood()}
          )
          console.log(b)

          this.$message({
            type: 'success',
            message: '你修改的价格是: ' + value
          });






        }).catch(() => {

          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });

      },
       handleDelete(index, row) {

          this.$confirm('永久删除, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let data = new FormData();
            let a =row.ImageId
            data.append('imageId',a);
            this.$http.post('/dining/foodDe',data).then(() =>
            {this.getFood()}
            )

            this.$message({
              type: 'success',
              message: '删除成功!'
            });

          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }

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
    /*height: 580px;*/
    position: relative;


  }

  .el-main {
    background-color: grey;
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px!important;*/
    /*height: 100%;*/

  }
</style>
