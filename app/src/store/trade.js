import {reqOrderInfo,reqUserAddressList} from "@/api"

const state={
  address:[],
  orderInfo:{},
}

const mutations={
  GETUSERADDRESSLIST(state,address){
    state.address=address
  },

  GETORDERINFO(state,orderInfo){
    state.orderInfo=orderInfo
  },
}

const actions={
  //获取用户地址信息
  async getUserAddressList({commit}){
    let result=await reqUserAddressList()

    if(result.code==200) commit("GETUSERADDRESSLIST",result.data)
    else return Promise.reject(new Error(result.message))
  },

  //获取订单支付信息
  async getOrderInfo({commit},orderId){
    let result=await reqOrderInfo(orderId)

    if(result.code==200) commit('GETORDERINFO',result.data)
    else return Promise.reject(new Error(result.message))
  },
}

const getters={}

export default {
  state,
  mutations,
  actions,
  getters,
}