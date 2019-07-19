import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Serialdata from "./views/Serialdata/Serialdata.vue";
import Bannerimg from "./views/Bannerimg/Bannerimg.vue";
import swiperPaage from "./views/swiperPaage/swiperPaage.vue"
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/',
        name: 'home',
        component: Home
        },
        {//侧边栏详情
            path: '/serialdata',
            name: 'serialdata',
            component: Serialdata
        },
         {//详情图片
            path: '/bannerimg',
            name: 'bannerimg',
            component: Bannerimg
        },{//详情图片
            path: '/swiperPaage',
            name: 'swiperPaage',
            component: swiperPaage
        },
        {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
