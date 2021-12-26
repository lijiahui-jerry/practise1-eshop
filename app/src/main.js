import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
//引入全局路由组件
import TypeNav from "@/components/TypeNav"
import Carousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"
import {Button,MessageBox} from "element-ui"
//引入仓库
import store from "@/store"
//引入模拟数据
import '@/mock/mockServe'
//引入swiper样式
import 'swiper/css/swiper.css'
//引入全局api
import * as API from '@/api'
import VueLazyload from "vue-lazyload"
import atm from '@/assets/images/1.gif'
//引入表单校验插件
import '@/plugins/validate'
Vue.config.productionTip=false
//注册全局路由组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)

Vue.prototype.$msgbox=MessageBox
Vue.prototype.$alert=MessageBox.alert

Vue.use(VueLazyload,{
  loading:atm,
})

new Vue({
  render:h=>h(App),

  beforeCreate(){
    //配置全局总线
    Vue.prototype.$bus=this

    //全局API
    Vue.prototype.$API=API
  },

  //注册路由，即往组件身上添加$route和$router
  router,
  //注册仓库，即往组件身上添加$store
  store,
}).$mount('#app')
