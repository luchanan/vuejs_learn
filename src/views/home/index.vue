<template>
  <div class="container">
    <home-header></home-header>
    <swipe class="my-swipe">
      <swipe-item class="slide slide1"></swipe-item>
      <swipe-item class="slide slide2"></swipe-item>
      <swipe-item class="slide slide3"></swipe-item>
    </swipe>
    <div class="item boutique">
      <h1 class="title">精选频道</h1>
      <div class="scroll">
        <ul>
          <li>
            <a href="">
              <div class="bg bg_lazyload"></div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="bg bg_lazyload"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="item">
      <h1 class="title">热门目的地</h1>
      <div class="scroll">
      <ul class="recomment">
        <li>
          <a href="">
            <div class="bg bg_lazyload"></div>
            <div class="text flex flex_v_center"><div class="flex_item">普吉</div></div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="bg bg_lazyload"></div>
            <div class="text flex flex_v_center"><div class="flex_item">普吉</div></div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="bg bg_lazyload"></div>
            <div class="text flex flex_v_center"><div class="flex_item">普吉</div></div>
          </a>
        </li>
      </ul>
      </div>
    </div>
    <div class="item surprise">
      <h1 class="title">当季惊喜</h1>
      <div class="scroll">
        <ul class="recomment">
          <li>
            <a href="">
              <div class="bg bg_lazyload"></div>
              <div class="text flex flex_v_center"><div class="flex_item">普吉</div></div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="bg bg_lazyload"></div>
              <div class="text flex flex_v_center"><div class="flex_item">普吉</div></div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="bg bg_lazyload"></div>
              <div class="text flex flex_v_center"><div class="flex_item">普吉</div></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <button v-on:click="addTodo" class="btn" style="display:none">点击</button>
</template>
<script>
  // js引入css文件
  require('vue-swipe/dist/vue-swipe.css')
  import $ from 'jquery'
  import 'md5'
  import base64 from 'base64'
  console.log(base64)
  // import $ from 'expose?$!expose?jQuery!jquery'
  import homeHeader from '../../components/home/home-header.vue'
  import HomeBanner from '../../components/home/home-banner.vue'
  // 引入vue-swipe
  import { Swipe, SwipeItem } from 'vue-swipe'
  export default{
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    // 注册组件
    components: {
      'home-header': homeHeader,
      'home-banner': HomeBanner,
      'swipe': Swipe,
      'swipe-item': SwipeItem
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
<style lang='scss' scoped>
  @import "../../assets/scss/base/necessary.scss";
  html,body{
    background: #fff;
  }
  .my-swipe {
    /*padding-top:66.66666666666667%;/*500/700*/
    height: px2rem(500);
  }

  .slide {

  }

  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }

  .slide2 {
    background-color: #ffd705;
    color: #000;
  }

  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
  /*index*/
  .title{
    color:$color_424242;
    @include px2px(font-size,40);
    padding:px2rem(60) 0 px2rem(34) px2rem(30);
  }
  .item{
    padding-bottom: px2rem(74);
    border-bottom: solid 1px $color_DBDBDB;
  }
  .scroll{
    height: px2rem(315);
    overflow-y:hidden;
  }
  ul{
    height: px2rem(325);
    padding:0 0 10px px2rem(7);
    white-space: nowrap;
    @extend .xoverflow_scroll;
    font-size:0;
    li{
      display:inline-block;
      height: 100%;
      margin: 0 px2rem(11);
      &:first-child{
         margin-left:px2rem(23);
       }
      &:last-child{
         margin-right:px2rem(23);
       }
      a{
        display: block;
        width: px2rem(315);
        height: 100%;
        text-decoration:none;
        position:relative;
        .bg{
          height: 100%;
        }
        .text{
          position: absolute;
          left:0;
          top:0;
          width: 100%;
          height: 100%;
          color: #fff;
          @include px2px(font-size,34);
          text-align: center;
        }
      }

    }
  }
  .boutique{
    ul{
      height: 100%;
      padding-bottom: 0;
    }
    a{
      width: px2rem(334);
    }
    .scroll{
      height: px2rem(257);
    }
  }
</style>
