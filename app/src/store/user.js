//登录与注册的小仓库

import {
  reqPasscode,reqUserInfo,reqUserLogin,reqUserLogout,reqUserRegister,
} from "@/api"
import {clearToken,getToken,setToken} from "@/utils/token"

const state={
  code:'',
  token:getToken(),
  userInfo:{},
}
const mutations={
  REQPASSCODE(state,v){
    state.code=v
  },

  GETTOKEN(state,v){
    state.token=v
  },

  GETUSERINFO(state,v){
    state.userInfo=v
  },

  CLEARALL(state){
    state.token=''
    clearToken()
    state.userInfo={}
  },
}
const actions={
  //获取验证码
  async getPasscode({commit},phone){
    let result=await reqPasscode(phone)

    if(result.code==200){
      commit('REQPASSCODE',result.data)
      return Promise.resolve()
    }else return Promise.reject(new Error(result.message))
  },

  //注册
  async userRegister({commit},userData){
    let result=await reqUserRegister(userData)

    if(result.code==200) return Promise.resolve()
    else return Promise.reject(new Error(result.message))
  },

  //登录
  async userLogin({commit},data){
    let result=await reqUserLogin(data)

    if(result.code==200){
      commit('GETTOKEN',result.data.token)
      setToken(result.data.token)
      return Promise.resolve()
    }else return Promise.reject(new Error(result.message))
  },

  //退出登录
  async userLogout({commit}){
    let result=await reqUserLogout()
    if(result.code==200){
      commit('CLEARALL')
      return Promise.resolve()
    }else return Promise.reject(new Error(result.message))
  },

  //token获取用户信息
  async getUserInfo({commit}){
    let result=await reqUserInfo()

    if(result.code==200){
      commit('GETUSERINFO',result.data)
      return Promise.resolve()
    }else if(result.code==208){
      console.log(208)
    }
    return Promise.reject(new Error(result.message))
  },

}
const getters={}

export default {
  state,
  mutations,
  actions,
  getters,
}