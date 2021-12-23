//home模块的小仓库

import {reqCategoryList, reqBannerList, reqFloorList} from "@/api";

const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
}

const mutations = {
  //处理state中的数据
  //#mutation中的函数都固有两个形参：state和value（可自定义value名），value在action中提交#
  CATEGORYLIST(state, value) {
    //this指向大仓库对象，大仓库的state里只有每个小仓库
    //this.state.home.categoryList = value
    state.categoryList = value
  },
  BANNERLIST(state, value) {
    state.bannerList = value
  },
  FLOORLIST(state, value) {
    state.floorList = value
  },
}

const actions = {
  //获取列表并提交到mutation进行处理
  async categoryList({commit}) {
    let result = await reqCategoryList()
    if (result.code === 200) commit('CATEGORYLIST', result.data)
  },
  async bannerList({commit}) {
    let result = await reqBannerList()
    if (result.code === 200) commit('BANNERLIST', result.data)
  },
  async floorList({commit}) {
    let result = await reqFloorList()
    if (result.code === 200) commit('FLOORLIST', result.data)
  },
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}