import {reqGoodsInfo} from "@/api";

const state = {
  goodsInfo: {},
}

const mutations = {
  GETGOODSINFO(state, v) {
    state.goodsInfo = v
  },
}

const actions = {
  async getGoodsInfo({commit}, skuId) {
    let result = await reqGoodsInfo(skuId)

    if (result.code === 200)
      commit('GETGOODSINFO', result.data)
  },
}

const getters = {
  categoryView(state) {
    return state.goodsInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodsInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodsInfo.spuSaleAttrList || {}
  },
  skuImageList(state) {
    return state.goodsInfo.skuInfo.skuImageList || []
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}