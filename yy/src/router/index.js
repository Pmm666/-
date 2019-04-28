import Vue from 'vue'
import Router from 'vue-router'
import shopList from '@/components/shopList'
import manage from '@/components/manage'
import index from '@/components/index'
import userList from '@/components/userList'
import shop from '@/components/shop'
import foodList from '@/components/foodList'
import orderList from '@/components/orderList'
import adminList from '@/components/adminList'
import addShop from '@/components/addShop'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'manage',
      component: manage
    },
    {
      path: '/shopList',
      name: 'shopList',
      component: shopList
      // redirect:"/index",
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/userList',
      name: 'userList',
      component: userList
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/foodList',
      name: 'foodList',
      component: foodList
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList
    },
    {
      path: '/adminList',
      name: 'adminList',
      component: adminList
    },
    {
      path: '/addShop',
      name: 'addShop',
      component: addShop
    },
  ]
})
