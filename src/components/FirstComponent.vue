<template>
  <h2>{{text}}</h2>
</template>
<script>
  export default{
    data () {
      return {
        text: '这是我的第一个组件'
      }
    }
  }
</script>
<style scoped>
  h2{
    background: red;
    display: flex;
    animation-name: dropAnim1;
  }
</style>
