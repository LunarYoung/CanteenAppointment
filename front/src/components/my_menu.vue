<template>
  <div>
  <el-menu
    router
    :default-active="this.$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">

    <div  class="sign" >
            <span >
                <el-avatar class="logo"  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=118364560,694459574&fm=26&gp=0.jpg"></el-avatar>
            </span>
      <span class="name" >食堂点餐</span>
    </div>


    <el-menu-item index="/">
      <i class="el-icon-tickets"></i>
      <span slot="title">订单处理</span>
    </el-menu-item>
    <el-menu-item >
      <i class="el-icon-refresh-left" ></i>
      <span slot="title" >
              <span @click="table = true" type="primary" >
            挂起订单
          </span>
          </span>
    </el-menu-item>
    <el-menu-item index="/outFood">
      <i class="el-icon-tableware"></i>
      <span slot="title">外卖处理</span>
    </el-menu-item>

    <el-submenu index="/sales">
    <template slot="title">
      <i class="el-icon-pie-chart"></i>
      <span>数据统计</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/sales">销量分析</el-menu-item>
      <el-menu-item index="/salesFood">菜品分析</el-menu-item>
    </el-menu-item-group>
  </el-submenu>

    <el-submenu index="/foodManage">
      <template slot="title">
        <i class="el-icon-dish-1"></i>
        <span>菜系管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/foodManage">编辑菜谱</el-menu-item>
        <el-menu-item index="/updateFood">增加菜谱</el-menu-item>
      </el-menu-item-group>

    </el-submenu>
    <el-menu-item index="/ordersRecord">
      <i class="el-icon-receiving"></i>
      <span slot="title">订单记录</span>
    </el-menu-item>

    <el-menu-item index="/opinions">
      <i class="el-icon-edit"></i>
      <span slot="title">意见处理</span>
    </el-menu-item>

  </el-menu>



  <el-drawer

    :open="getPull"
    :visible.sync="table"
    direction="rtl"
    size="60%">
    <el-table
      :data="tableDataWait"
      style="width: 100%">
      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
          <i ></i>
          <span >{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="订单号"
        width="150">
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
        width="130">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">

            <div slot="reference" class="name-wrapper">
              <span size="medium">{{ scope.row.foodName1 }}</span>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="类型">
        <template slot-scope="scope">

          <el-button
             plain
            type="info"
           >{{ scope.row.type }}</el-button>
        </template>
      </el-table-column>


      <el-table-column label="操作">
        <template slot-scope="scope">

          <el-button

            type="primary"
            @click="handle(scope.$index, scope.row)">完成</el-button>
        </template>
      </el-table-column>
    </el-table>


  </el-drawer>

</div>


</template>

<script>
    export default {
      created() {
        this.getPull()
      },
        name: "my_menu",

      data() {
        return {


          tableDataWait: [
           ],
          table: false,
          dialog: false,
          loading: false,
          drawer: false
        }
      },
      methods: {
        getPull() {
          this.$http.get("dining/pull")
            .then(res => {
              console.log(res)
              this.tableDataWait = res.data

            })
        },
        handle(index, row){

          let data = new FormData();
          let a =row.orderNum
          data.append('orderId',a);
          console.log(a)

          this.$http.post('/dining/pullOp',data).then(() =>
            {this.getPull()}
          )
          this.$notify({
            title: '已完成',
            type: 'success',
            duration: 1500,
            position: 'bottom-right'
          });

        }
      }
    }
</script>

<style scoped>

  .sign{
    border-bottom: 1px solid grey;
    height: 55px
  }

  .logo{
    margin-left: 10px;
    margin-top: 10px

  }

  .name{
    float: right;
    margin-right:50px;
    margin-top: 17px;
    font-size: 20px;
    color: white
  }


</style>
