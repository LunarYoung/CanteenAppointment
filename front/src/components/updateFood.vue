<template>
  <el-container >

    <el-aside width="200px" >
      <my_menu></my_menu>
    </el-aside>

    <el-container>
      <el-main style="padding: 0">

        <div class="mid">


          <el-form :model="ruleForm" ref="ruleForm" style="width:600px" >
            <el-form-item label="名称"  label-width="100px">
              <el-input v-model="ruleForm.name" ></el-input>
            </el-form-item >
            <el-form-item label="价格"  label-width="100px">
              <el-input v-model="ruleForm.price" ></el-input>
            </el-form-item >
            <el-form-item label="图片" label-width="100px">
              <el-upload
                action="http://localhost:80/dining/addFood"
              list-type="picture-card"
              :on-success="handleAvatarSuccess"
              ref="upload"
              :auto-upload="false"
              :limit="1"
              :data="ruleForm">
              <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
          </el-form>
          <el-button class="btn" plain type="primary" @click="submit">提交</el-button>


        </div>

      </el-main>
    </el-container>
  </el-container>


</template>

<script>
  export default {
    data() {
      return {
        ruleForm:["name","price"]
      }
    },

    methods: {




      submit() {
        this.$refs["ruleForm"].validate(valid => {
          this.$refs.upload.submit(); //图片上传
        });
      },

      handleAvatarSuccess(res) {

        this.ruleForm = {};
        this.$notify({
          title: '提交成功',
          type: 'success',
          duration: 1500,
          position: 'bottom-right'
        });

      },
    }}













</script>

<style scoped>

  .mid{
    width: 50%;
    margin-top: 10%;
    margin-left: 20%;
  }
.btn{
  width: 200px;
  margin-left: 45%;

}
</style>
