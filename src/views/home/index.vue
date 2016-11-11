<template>
    <div class="container">
        <home-header></home-header>
        <home-banner></home-banner>
    </div>
</template>
<script>
    import $ from 'jquery'
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
          $('.a').click()
        }

      }
    }
</script>