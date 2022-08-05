import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as Cesium from 'cesium/Cesium'
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZDRiOTdhZC0xYjEyLTRiNWItOWRiMC1mZGVjMjc0NmEzMmEiLCJpZCI6OTk1NjIsImlhdCI6MTY1NjU2OTY4Mn0.q04hKW0WtrERo6nfx1mjlE4_jCJbsQUrYiwWxKuYdNQ';
Vue.config.productionTip = false
import 'cesium/Widgets/widgets.css'
Vue.prototype.Cesium = Cesium;
Vue.prototype.Bus = new Vue();
Vue.use(ElementUI);
import '@/components/cesium/registerComponents.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')