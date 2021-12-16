import Home from "@/pages/Home";
import Detail from "@/pages/Detail/Detail";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      show: true,
    },
  },
  {
    path: '/detail/:skuId',
    component: Detail,
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
    name: 'search',
    path: '/search/:keyword?',
    component: Search,
    meta: {
      show: true,
    },
    //写法一：布尔值，不能传递额外参数到目标的$attr
    //props:true,
    //写法二：对象形式，可以传递额外参数（a，b）到目标的$attr
    //props: {a: 101, b: 202},
    //写法三：函数形式，可以传递额外参数（ljh）到目标的$attr
    //props:$route=>({keyword:$route.params.keyword,k:$route.query.k,ljh:'23'})
    //综上：路由可以传递props参数，并且函数形式的写法最强大。
    props: $route => ({keyword: $route.params.keyword}),
  },
  //重定向
  {
    path: '/',
    redirect: '/home',
  },
]