<!-- 单文件组件 -->
<!-- 在VUE中，一个vue单文件组件分成3部分 -->
<!-- 页面结构 + 逻辑 + 样式 -->
<template>
  <!-- 在vue单文件组件中，template下只允许有一个根元素 -->
  <div>
    <div>
      <input v-model="inputValue">
      <button @click="handleSubmit">提交</button>
    </div>
    <ul>
      <todo-item v-for="(item, index) of itemList"
        :key="index"
        :mycontent="item"
        :index="index"
        @delete="handleDel">
      </todo-item>
    </ul>
  </div>
</template>

<script>
// 引入组件
import TodoItem from './components/TodoItem'

export default {

  // 注册局部组件，这里用这种写法，可以使用别名
  components: {
    'todo-item': TodoItem
  },

  // 在cli工具中，data不再是一个对象
  // 要写成函数，返回数据对象
  // 在es6语法中，可以简写成data () {...}形式
  data: function () {
    return {
      inputValue: '',
      itemList: []
    }
  },
  methods: {
    'handleSubmit': function () {
      this.itemList.push(this.inputValue)
      this.inputValue = ''
    },
    'handleDel': function (index) {
      this.itemList.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
