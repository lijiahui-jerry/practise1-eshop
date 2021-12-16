// 配置路由的地方

import Vue from "vue"
import VueRouter from "vue-router"
//引入路由
import routes from "@/router/routes";

//使用插件
Vue.use(VueRouter)
//备份原push
let originPush = VueRouter.prototype.push
//备份原replace
let originReplace = VueRouter.prototype.push

//重写VueRouter原型对象的push方法
VueRouter.prototype.push =
  function (target, succeed, failed) {
    if (succeed && failed)
      originPush.call(this, target, succeed, failed)
    originPush.call(this, target, () => { }, () => { })
  }

//重写VueRouter原型对象的replace方法
VueRouter.prototype.replace =
  function (target, succeed, failed) {
    if (succeed && failed)
      originReplace.call(this, target, succeed, failed)
    originReplace.call(this, target, () => { }, () => { })
  }

//配置路由
export default new VueRouter({
  routes,
  //控制路由跳转后的滚动条处于哪里
  scrollBehavior() {
    return {y: 0}
  },

})