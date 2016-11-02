<template>
  <div id="app">
    <img src="./assets/logo.png">
    <dark></dark>
  </div>
</template>

<script>
import Dark from './components/Hello'

export default {
  name: 'app',
  components: {
    Dark
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
