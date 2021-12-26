// 配置路由的地方

import Vue from "vue"
import VueRouter from "vue-router"
//引入路由
import routes from "@/router/routes"
import store from "@/store"
import {clearToken,getToken} from "@/utils/token"

//使用插件
Vue.use(VueRouter)
//备份原push
let originPush=VueRouter.prototype.push
//备份原replace
let originReplace=VueRouter.prototype.push

//重写VueRouter原型对象的push方法
VueRouter.prototype.push=
  function(target,succeed,failed){
    if(succeed && failed)
      originPush.call(this,target,succeed,failed)
    originPush.call(this,target,()=>{},()=>{})
  }

//重写VueRouter原型对象的replace方法
VueRouter.prototype.replace=
  function(target,succeed,failed){
    if(succeed && failed)
      originReplace.call(this,target,succeed,failed)
    originReplace.call(this,target,()=>{},()=>{})
  }

//配置路由
let router=new VueRouter({
  routes,
  //控制路由跳转后的滚动条处于哪里
  scrollBehavior(){
    return {y:0}
  },
})

router.beforeEach(async(to,from,next)=>{
  let token=store.state.user.token
  let userInfo=store.state.userInfo

  if(token)
    if(to.path=='/login' || to.path=='/register') next('/')
    else{
      if(userInfo) next()
      else{
        try{
          await store.dispatch('getUserInfo')
          next()
        }catch(e){
          await store.dispatch('userLogout')
          next('/login')
        }
      }
    }
  else{
    let toPath=to.path
    if(toPath.indexOf('/trade')!= -1 || toPath.indexOf('/pay')!= -1 ||
      toPath.indexOf('/paysuccess')!= -1 || toPath.indexOf('/myorder')!= -1)
      next('/login?redirect='+toPath)
    else next()
  }

})

export default router