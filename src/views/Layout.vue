<template>
  <div class="home">
    <el-container>
      <el-aside width="295px">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Aside from "@/components/aside/index.vue";
import Main from "@/components/main/index.vue";
export default {
  name: 'Layout',
  components: {
    Aside, Main
  }
}
</script>
<style lang="less" scoped>
.home {
  // background-color: antiquewhite;
  height: 100%;
  width: 100%;
  /deep/ .el-container {
    height: 100%;
  }
  /deep/ .el-main {
    padding: 0px;
    margin: 0px;
  }
}
</style>