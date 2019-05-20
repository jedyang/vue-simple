<template>
  <div>
    This is my info page
    <button type="button" @click="add()">增加</button>
  </div>
</template>

<script>
// 引入store组件，@表示的就是src目录
import store from '@/store'
export default {
  name: 'Info',
  store,
  methods: {
    add () {
      console.log('on add...')
      // 使用commit触发方法，参数就是方法名
      store.commit('addOne')
    }
  }
}
</script>

<style scoped>

</style>
