import {changeCheckedInCart,delCartInfo,reqCartList} from "@/api";

const state={
  carList:[],
}

const mutations={
  GETCARTLIST(state,value){
    state.carList=value
  },
}

const actions={
  async getCartList({commit}){
    let result=await reqCartList()
    if(result.code==200) commit('GETCARTLIST',result.data)
  },

  async delCartList({commit},skuId){
    let result=await delCartInfo(skuId)
    if(result.code==200) return 'succeed'
    else return Promise.reject(new Error('failed'))
  },

  async toggleChecked({commit},{id,v}){
    let result=await changeCheckedInCart(id,v)
    if(result.code==200) return 'succeed'
    else return Promise.reject(new Error('failed'))
  },
}

const getters={
  //购物车
  cartList(){
    return state.carList[0]||{}
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}