/*
路由器对象模块
*/
// 引入vue和路由模块
 import Vue from 'vue'
 import VueRouter from 'vue-router'

 // 引入组件
 import Msite from '../pages/Msite/Msite.vue'
 import Search from '../pages/Search/Search.vue'
 import Profile from '../pages/Profile/Profile.vue'
 import Order from '../pages/Order/Order.vue'

 // 申明使用插件
 Vue.use(VueRouter)

 export default new VueRouter({
   // 所有路由
   routes: [
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/',
      // 重定向
      redirect: '/msite'
    }
   ]
})
