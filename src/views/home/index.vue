<template>
  <div class="container">
    <home-header></home-header>
    <swipe class="my-swipe">
      <swipe-item class="slide cover" v-for="banner in bannerList" v-bind:style="{ 'background-image': 'url(' + banner.image + ')' }"></swipe-item>
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
        <ul>
          <li>
            <a href="">
              <div class="bg bg_lazyload"></div>
              <div class="bottom_title">
                <h2>毛里求斯皮划艇游琥珀岛 穿梭红树林</h2>
                <div class="flex">
                  <div class="left flex_item">已售288份</div>
                  <div class="right flex_item">386</div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="bg bg_lazyload"></div>
              <div class="bottom_title">
                <h2>毛里求斯皮划艇游琥珀岛 穿梭红树林</h2>
                <div class="flex">
                  <div class="left flex_item">已售288份</div>
                  <div class="right flex_item">386</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="item surprise list">
      <h1 class="title">精选</h1>
      <div class="scroll">
        <ul>
          <li>
            <a href="">
              <div class="bg bg_lazyload"></div>
              <div class="bottom_title">
                <h2>毛里求斯皮划艇游琥珀岛 穿梭红树林</h2>
                <div class="flex">
                  <div class="left flex_item">已售288份</div>
                  <div class="right flex_item">386</div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="bg bg_lazyload"></div>
              <div class="bottom_title">
                <h2>毛里求斯皮划艇游琥珀岛 穿梭红树林</h2>
                <div class="flex">
                  <div class="left flex_item">已售288份</div>
                  <div class="right flex_item">386</div>
                </div>
              </div>
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
        bannerList: []
      }
    },
    mounted: function () {
      this.$http.get('static/api/Home/homepageV3.json').then((response) => {
        // 为bannerList赋值数据，然后html就可以遍历
        this.bannerList = response.data.banner_list
      }, (response) => {
        console.log(response)
      })
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
  .surprise{
    &.list{
     padding-bottom:0;
     ul{
       padding: 0;
     }
  .scroll,ul,a{
    height: auto;
    width: auto;
  }
  .bg{
    width: px2rem(690);
    height: px2rem(436);
  }
      li{
        display: block;
        margin: 0 0 px2rem(30) 0;
        padding: 0 px2rem(30);
      &:last-child{
    margin-bottom: 0;
    a{
      border-bottom: 0;
    }
       }
        a{
          border-bottom: solid 1px $color_DBDBDB;
        }
      }
     }
    .scroll{
      height: px2rem(579);
    }
    ul{
      height: px2rem(589);
      a{
        width: px2rem(655);
        height: px2rem(436);
      }
    }
  }
  .bottom_title{
    color:$color_424242;
    h2{
      line-height: px2rem(42);
      max-height: px2rem(84);
      @include clamp(2);
      padding: px2rem(34) 0 px2rem(11) 0;
      @include px2px(font-size,34);
    }
    .flex{
      color:$color_9E9E9E;
      @include px2px(font-size,28);
      .flex_item{
        line-height:2;
      }
      .right{
        text-align: right;
        color:$color_FC5D7B;
        &:before{
          content: '¥';
          display: inline-block;
          margin-right: px2rem(7);
          @include px2px(font-size,22);
          vertical-align: top;

        }
        &:after{
           content: '起';
           display: inline-block;
           margin-left: px2rem(5);
           @include px2px(font-size,22);
           color:$color_9E9E9E;
         }
      }
    }
  }
</style>
