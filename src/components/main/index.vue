<template>
  <div class="main-container">
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentComponent: 'ThreeEarth' // 当前激活的组件，默认为地球
    }
  },
  mounted () {
    this.Bus.$on('changeCurrentCom', (name) => {
      let currentName = name || 'ThreeEarth';
      this.currentComponent = currentName;
    })
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
</style>