import Vue from 'vue'
import App from './App'
import routers from './routers'
// require('assets/js/lib/flexible/flexible.js')
// require('assets/js/lib/flexible/flexible.js')
// import './assets/js/lib/bootstrap/bootstrap'
// import 'assets/js/lib/flexible/flexible.js'
// require('libs/js/flexible.js')
// 引入css
import './assets/scss/common.scss'
import wx from 'wx'
console.log(wx)
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  router: routers,
  render: h => h(App)
}).$mount('#app')
