<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>
<script> 
export default {
  name: "ThreeTileset",
  data () {
    return {
      tileset: null,
      viewer: null,
    }
  },
  mounted () {
    this.initMap();
  },
  methods: {
    initMap () {
      this.viewer = new this.Cesium.Viewer("cesiumContainer", {
        // terrainProvider: Cesium.createWorldTerrain(),
        animation: false,  //动画控制不显示
        timeline: false,    //时间线不显示
        fullscreenButton: false, //全屏按钮不显示
        infoBox: false,
        geocoder: false, //右上角 搜索
        homeButton: false, //右上角 Home
        sceneModePicker: false, //右上角 2D/3D切换
        baseLayerPicker: false,  //右上角 地形
        navigationHelpButton: false, //右上角 Help
      });
      this.viewer._cesiumWidget._creditContainer.style.display = "none";
      this.scene = this.viewer.scene;
      this.change3DTileset('https://earthsdk.com/v/last/Apps/assets/dayanta/tileset.json');
    },
    changHeight (tileset) {
      let cartographic = this.Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center);
      let surface = this.Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height);
      let offset = this.Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
      let translation = this.Cesium.Cartesian3.subtract(offset, surface, new this.Cesium.Cartesian3());
      tileset.modelMatrix = this.Cesium.Matrix4.fromTranslation(translation);
    },
    change3DTileset (url) {
      this.tileset && this.removeTileset(this.tileset);
      this.tileset = this.scene.primitives.add(new this.Cesium.Cesium3DTileset({
        url: url
      }));
      this.tileset.readyPromise.then((tile) => {
        // Set the camera to view the newly added tileset
        this.viewer.flyTo(tile);
        this.changHeight(tile)
      });
    },
    removeTileset (tileset) {
      this.scene.primitives.remove(tileset);
      tileset.destroy();
      tileset = null;
    },
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