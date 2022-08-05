<template>
  <div class="aside">
    <el-card v-for="(card,index) in list" :key="index" style="margin:5px">
      <img :src="card.img" width="125px" height="125px">
      <div class='aside-text'>
        <div>{{card.disName}}</div>
        <div class="aside-text-button" @click="checkCurrentCom(card.name)">查看</div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { layers } from "./config.js"
export default {
  data () {
    return {
      list: null,
    }
  },
  mounted () {
    debugger;
    console.log("mounted", layers)
    this.list = layers;
  },
  methods: {
    checkCurrentCom (name) {
      this.Bus.$emit('changeCurrentCom', name)
    }
  }
}
</script>

<style lang="less" scoped>
.aside {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  /deep/ .el-card__body {
    padding: 5px;
  }
  &-text {
    display: flex;
    justify-content: space-between;
    &-button {
      color: blue;
    }
    &-button:hover {
      cursor: pointer;
    }
  }
}
</style>