<template>
  <div id="app1">
    <img src="./assets/logo.png">
    <FirstComponent></FirstComponent>
    <ul>
      <li><router-link to="/first">点我跳转到第一页</router-link></li>
      <li><router-link to="/second">点我跳转到第二页</router-link></li>
    </ul>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  diplay:flex;
  animation-name: dropAnim1;
  & .red{
    color:red;
  }
}
</style>
