// 注册全局组件
import Vue from 'vue'
const componentsContext = require.context('.', true, /.vue$/);
console.log(componentsContext, 'componentsContext')
componentsContext.keys().forEach(component => {
  debugger;
  const componentConfig = componentsContext(component);
  const ctrl = componentConfig.default || componentConfig
  // 注册组件名称
  Vue.component(ctrl.name, ctrl)
})