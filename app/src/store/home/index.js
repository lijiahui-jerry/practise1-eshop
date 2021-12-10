//home模块的小仓库

import {reqCategoryList} from "@/api";

const state = {
  categoryList: [],
}
const mutations = {
  //处理state中的数据???????
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
}
const actions = {
  //获取列表并提交到mutation进行处理
  async categoryList({commit}) {
    let result = await reqCategoryList()
    if (result.code === 200) commit('CATEGORYLIST', result.data)
  },
}
const getter = {}

export default {
  state,
  mutations,
  actions,
  getter,
}