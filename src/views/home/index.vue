<template>
    <div class="container">
        <home-header></home-header>
        <home-banner></home-banner>
        <button  v-on:click="addTodo" class="btn">点击</button>
    </div>
</template>
<script>
    // import $ from 'jquery'
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
          // window.alert($('.btn').get(0).tagName)
          // console.log($.md5('a'))
        }

      }
    }
</script>
