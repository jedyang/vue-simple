<template>
<div>
    <li class="item" @click="onClick">{{mycontent}}</li>
</div>
</template>

<script>
export default {
  props: ['mycontent', 'index'],
  methods: {
    'onClick' () {
      this.$emit('delete', this.index)
    }
  }
}
</script>

// scoped设置局部样式
<style scoped>
  .item {
    color: green
  }

</style>
