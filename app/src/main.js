import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
//引入全局路由组件
import TypeNav from "@/components/TypeNav"
// //引入统一管理的api接口
// import {reqCategoryList} from "@/api"
//引入仓库
import store from "@/store"

Vue.config.productionTip = false
//注册全局路由组件
Vue.component(TypeNav.name, TypeNav)

// //请求数据
// reqCategoryList()
new Vue({
  render: h => h(App),
  //注册路由，即往组件身上添加$route和$router
  router,
  //注册仓库，即往组件身上添加$store
  store,
}).$mount('#app')
