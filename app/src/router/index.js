// 配置路由的地方

import Vue from "vue"
import VueRouter from "vue-router"
//引入路由
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"

//使用插件
Vue.use(VueRouter)

//配置路由
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        show: true,
      },
    },
    {
      path: '/login',
      component: Login,
      meta: {
        show: false,
      },
    },
    {
      path: '/register',
      component: Register,
      meta: {
        show: false,
      },
    },
    {
      path: '/search/:keyword?',
      component: Search,
      meta: {
        show: true,
      },
      name: 'search',
      //写法一：布尔值，不能传递额外参数到目标的$attr
      //props:true,
      //写法二：对象形式，可以传递额外参数（a，b）到目标的$attr
      // props: {a: 101, b: 202},
      //写法三：函数形式，可以传递额外参数（ljh）到目标的$attr
      //props:($route)=>({keyword:$route.params.keyword,k:$route.query.k,ljh:'23'})
      //综上：路由可以传递props参数，并且函数形式的写法最强大。
    },
    //重定向
    {
      path: '/',
      redirect: '/home'
    }
  ]
})