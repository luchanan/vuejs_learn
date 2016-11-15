<template>
    <div class="container">
        <home-header></home-header>
        <home-banner></home-banner>
        <button  v-on:click="addTodo" class="btn">点击</button>
    </div>
</template>
<script>
    import $ from 'jquery'
    import 'md5'
    // import $ from 'expose?$!expose?jQuery!jquery'
    import homeHeader from '../../components/home/home-header.vue'
    import HomeBanner from '../../components/home/home-banner.vue'
    export default{
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },

      components: {
        'home-header': homeHeader,
        'home-banner': HomeBanner
      },

      methods: {
        addTodo: function () {
          console.log($)
          window.alert($('.btn').get(0).tagName)
          console.log($.md5('a'))
        }

      }
    }
</script>
