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

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}