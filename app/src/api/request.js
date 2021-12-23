//axios的二次封装

import axios from "axios"
//引入进度条插件
import nprogress from 'nprogress'
import store from "@/store"
import 'nprogress/nprogress.css'

//创建一个axios对象（requests）并配置
const requests=axios.create({
  //基础路径
  baseURL:'/api/',
  //超时时间
  timeout:5000,
})

//请求拦截器
requests.interceptors.request.use(
  (config)=>{
    if(store.state.detail.uuid_token)
      config.headers.userTempId=store.state.detail.uuid_token

    if(store.state.user.token) config.headers.token=store.state.user.token

    nprogress.start()
    return config
  },
)
//响应拦截器
requests.interceptors.response.use(
  (res)=>{
    nprogress.done()
    return res.data
  },
  (err)=>{
    nprogress.done()
    return Promise.reject(new Error(err.message))
  },
)

export default requests
