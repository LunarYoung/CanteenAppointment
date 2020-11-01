<template>

  <div class="out_div" >
    <el-card class="box-card">
      <div class="card_left_image" >
        <el-image style="border-radius: 10px" src="https://s1.ax1x.com/2020/10/20/BpDih4.png">
        </el-image>
      </div>
      <div class="card_left_ti">
          食堂预约点餐
      </div>

    </el-card>


    <el-card class="box-card1" shadow="hover">
        <div class="title">
          用户登录
        <div>
      </div>
        <div class="from">
        <el-form hide-required-asterisk="true" :model="loginForm" :rules="formRules" ref="formRules"  >

          <el-form-item  prop="username">
            <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
          </el-form-item>

            <el-form-item  prop="password">
              <el-input v-model="loginForm.password"prefix-icon="el-icon-key" ></el-input>
            </el-form-item>

          <el-form-item  prop="password">

            <el-input style="width: 60%" v-model="loginForm.code"prefix-icon="el-icon-document-checked" placeholder="验证码" >

            </el-input>

<!--            <el-button style="margin-left: 10%">默认按钮</el-button>-->
            <el-image  style="height: 37px;width: 80px ;float: right;margin-left: 15%" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
            </el-image>

          </el-form-item>


          <el-form-item>
            <el-button style="width: 100%" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
    </div>
      </div>
    </el-card>

</div>


</template>

<script>
  export default {
    data(){
      return{





        loginForm:{
          username:'',
          password:'',
          code:""

        },
        formRules: {
          username:[
            {min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur'},
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password:[
            {min: 6, max: 11, message: '密码长度在 6 到 11 个字符', trigger: 'blur'},
            { required: true, message: '请输入密码', trigger: 'blur' },

          ]
        },


    };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

  };
</script>

<style scoped>

.out_div{

  width: 100%;
  height: 100%;
  background-image: url("../assets/155807-1529481487f5ce.jpg");
  background-size: 100%;
  display: flex;
}


  .box-card {
    width: 500px;
    height: 500px;
    /*background-color: #8CC5FF;*/
    margin-left: 10%;
    margin-top: 3%;
    background: rgba( 182,193,198, 0.1);
  }


  .card_left_image{
    height: 100px;
    width: 100px;
    margin-left: 39%;
    margin-top: 35%;



  }
  .card_left_ti{
    text-align: center;
    font-size: 25px;
    margin-top:5%;
    color: white

  }
  .box-card1 {
    width: 500px;
    height: 500px;
    margin-top: 3%;


    background: rgba( 182,193,198, 0.5);




  }

  .title{
    width: 325px;
    height: 25px;
    font-size: 25px;
    text-align: center;
    margin-left: 15%;
    margin-top: 15%;
    color: white;

  }


.from{
  width: 325px;
  margin-top: 10%;

}
</style>
