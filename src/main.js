import Vue from 'vue'
import App from './App'
import routers from './routers'
// import './assets/js/lib/flexible.js'
// 引入css
import './assets/css/test.css'
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  router: routers,
  render: h => h(App)
}).$mount('#app')
