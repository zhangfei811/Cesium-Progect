<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script> 
export default {
  name: "ThreeEarth",
  mounted () {
    let viewer = new this.Cesium.Viewer("cesiumContainer");
    console.log('viewer', viewer);
  }
};
</script> 
<style scoped>
.map-box {
  width: 100%;
  height: 100%;
}
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>