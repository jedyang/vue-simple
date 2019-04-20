// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// main.js是整个项目的入口文件
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  /* 根挂载点 */
  el: '#app',
  /* 注册局部组件，是从App.vue里import进来的 */
  components: { App },
  /* 模板 */
  template: '<App/>'
})
