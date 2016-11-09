import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 定义组件, 也可以像教程之前教的方法从别的文件引入
const Home = { template: '<div><h2 class="red"><router-link to="/second">点我跳转到第2页</router-link></h2></div>' }
const Second = { template: '<div><h2><router-link to="/">点我跳转到第1页</router-link></h2></div>' }
// 创建一个路由器实例
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/second',
      component: Second
    }
  ]
})
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
