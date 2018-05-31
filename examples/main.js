/**
 * Created by Feasin on 24/5/2018
 * ------------------------------------
 */
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Ixc from '../src/index'
import locale from '../src/locale/lang/en-US'

Vue.use(VueRouter)
Vue.use(Ixc, { locale })

// 开启 debug 模式
Vue.config.debug = true

// 路由配置
const router = new VueRouter({
  esModule: false,
  routes: [
    {
      path: '/xicon',
      component: (resolve) => require(['./routers/xicon.vue'], resolve)
    },
    {
      path: '/xgrid',
      component: (resolve) => require(['./routers/xgrid.vue'], resolve)
    },
    {
      path: '/xbutton',
      component: (resolve) => require(['./routers/xbutton.vue'], resolve)
    },
    {
      path: '/xradio',
      component: (resolve) => require(['./routers/xradio.vue'], resolve)
    }
  ]
})

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
})
