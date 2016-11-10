import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 各个页面视图
import homeIndex from './views/home/index'
// 更多vue-router 2路由配置http://router.vuejs.org/zh-cn/index.html
// 导出默认名为文件名供外部使用

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      title: '首页', // 页面设置<title></title>
      component: homeIndex
    }
  ]
})

