import Vue from 'vue'
import App from './App'
import routers from './routers'
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  router: routers,
  render: h => h(App)
}).$mount('#app')
