/*
入口JS
*/
import Vue from 'vue'
import App from './App'
// 引入路由器
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  // 配置路由器 es6写法 实际是Router: "Router"
  router
})
