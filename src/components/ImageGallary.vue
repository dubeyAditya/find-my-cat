<template>
  <div class="appContainer">
    <el-row class="row-flex">
      <el-col :span="24">
        <el-card>
          <div slot="header" class="clearfix">
            <h1>{{ msg }}</h1>
          </div>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-card shadow="hover">
                <img class="clickable" alt="Vue logo" src="../assets/logo.png">
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card shadow="hover">
                <img class="clickable" alt="Vue logo" src="../assets/logo.png">
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ImageGallary",
  props: {
    msg: String
  }
};
</script>
<style scoped>
.clickable {
  cursor: pointer;
}
</style>
