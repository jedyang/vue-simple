import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 定义组件公用的状态
  state: {
    count: 0
  },
  // 定义改变状态的方法。不能直接操作state，state只用来传递数据
  mutations: {
    addOne () {
      this.state.count ++
    }
  },
  actions: {

  }
})
