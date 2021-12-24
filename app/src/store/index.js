import Vue from "vue"
import Vuex from 'vuex'
//引入小仓库
import home from "@/store/home"
import search from "@/store/search"
import detail from "@/store/detail"
import cart from "@/store/cart"
import user from "@/store/user"
import trade from "@/store/trade"

Vue.use(Vuex)

//数据存储的地方
// const state = {
// count: 1,
// }
//修改state中数据的唯一手段
// const mutations = {
// //使count自加1
// SELFADD() {
//   state.count++
// },
// //使count自减1
// SELFMINUS() {
//   state.count--
// },
// }
//数据处理的业务逻辑，接受来自组件的派发（dispatch）
// const actions = {
// //只能添加业务逻辑，不能直接操作state中的数据，写法一：通过context
// selfAdd(context) {
//   context.commit('SELFADD')
// },
// //写法二：通过解构赋值
// selfMinus({commit}) {
//   commit('SELFMINUS')
// },
// }
//简化获取的数据
// const getters = {}

//对外暴露一个store对象
export default new Vuex.Store({
  //单个大仓库的暴露方式
  // state,
  // mutations,
  // actions,
  // getters,

  //多个小仓库的暴露方式
  modules:{
    home,
    search,
    detail,
    cart,
    user,
    trade,
  },
})