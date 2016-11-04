<template>
  <div id="app1">
    <img src="./assets/logo.png">
    <FirstComponent></FirstComponent>
    <ul>
      <li><router-link to="/foo">点我跳转到第一页</router-link></li>
      <li><router-link to="/bar">点我跳转到第二页</router-link></li>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
