import {reqGoodsInfo,reqCartInfo} from "@/api";
import {getUUID} from "@/utils/uuid_token";

const state={
  goodsInfo:{},

  uuid_token:getUUID(),
}

const mutations={
  GETGOODSINFO(state,v){
    state.goodsInfo=v
  },
}

const actions={
  async getGoodsInfo({commit},skuId){
    let result=await reqGoodsInfo(skuId)

    if(result.code===200)
      commit('GETGOODSINFO',result.data)
  },

  //将物品添加到购物车的行为
  async addToCart({commit},{id,count}){
    let result=await reqCartInfo(id,count)
    if(result.code==200) return '加入购物车成功'
    else return Promise.reject(new Error('加入购物车失败'))
  },
}

const getters={
  view(state){
    return state.goodsInfo.view||{}
  },
  skuInfo(state){
    return state.goodsInfo.skuInfo||{}
  },
  spuSaleAttrList(state){
    return state.goodsInfo.spuSaleAttrList||{}
  },
  skuImageList(state){
    return state.goodsInfo.skuInfo.skuImageList||[]
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}