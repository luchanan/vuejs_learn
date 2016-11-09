<template>
  <div id="app1">
    <router-view></router-view>
  </div>
</template>
<script>
import FirstComponent from './components/FirstComponent'
export default {
  name: 'app',
  components: {
    FirstComponent
  }
}
</script>
<style lang='scss'>
@import "./assets/scss/test.scss";
#app1 {
  $color:blue;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display:flex;
  animation-name: dropAnim1;
  & .red{
    color:$color;
  }
}
</style>
