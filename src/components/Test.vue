<template>
<br />
<div class="test">
<br />
<h1>{{ msg }}</h1>
<p>
  <hello></hello>
  </div>
<p>
</template>

<script>
import Hello from './Hello'

export default {
  components: {
    Hello
  },
  data () {
    return {
      msg: 'This is a test!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.test{
  border:1px solid #0a8acd;
}
</style>