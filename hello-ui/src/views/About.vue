<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
// 引入store组件，@表示的就是src目录
import store from '@/store'
export default {
  name: 'About',
  store,
  data () {
    return {
      msg: store.state.count
    }
  }
}
</script>
