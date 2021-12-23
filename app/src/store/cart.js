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

  delAllCheckedFromCart({dispatch,getters}){
    let result=[]

    getters.cartList.cartInfoList.forEach(item=>{
      let r=
        item.isChecked==1?dispatch('delCartList',item.skuId):Promise.resolve()
      result.push(r)
    })

    return Promise.all(result)
  },

  async toggleChecked({commit},{skuId,isChecked}){
    let result=await changeCheckedInCart(skuId,isChecked)
    if(result.code==200) return 'succeed'
    else return Promise.reject(new Error('failed'))
  },

  toggleAllChecked({dispatch,state},isChecked){
    let result=[]
    state.carList[0].cartInfoList.forEach(item=>{
      //item.isChecked==isChecked?'':dispatch("toggleChecked",item.isChecked==isChecked?)
      let r=dispatch("toggleChecked",{skuId:item.skuId,isChecked})
      result.push(r)
    })

    return Promise.all(result)
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