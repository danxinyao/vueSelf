//import Home from '../views/home/index.vue'
import Home from 'views/home/index.vue'
import List from 'views/list/index.vue'
import Shop from 'views/shop/index.vue'
import ShopVuex from 'views/shopVuex/index.vue'
import Detail from 'views/detail/index.vue'
import Echarts from 'views/echarts/index.vue'
import Swiper from 'views/swiper/index.vue'
import Dplayer from 'views/dplayer/index.vue'


var routes = [
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/list',
      name: '首页',
      component: List
    },
    {
      path: '/shop',
      name: '商城',
      component: Shop
    },
    {
      path: '/shopVuex',
      name: '商城-vuex',
      component: ShopVuex
    },
    {
      path: '/detail',
      name: '商品详情',
      component: Detail
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: Echarts
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: Swiper
    },
    {
      path: '/dplayer',
      name: 'Dplayer',
      component: Dplayer
    },
]
export default routes
