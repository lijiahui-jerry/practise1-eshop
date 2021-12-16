import requests from "@/api/request"
import mockRequests from "@/api/mockRequest";

//ajax获取三级菜单的函数
export const reqCategoryList =
  () => requests.get('/product/getBaseCategoryList')

//ajax获取商品搜索结果的函数
export const reqSearchInfo =
  (params) => requests({
    url: '/list',
    method: 'POST',
    data: params,
  })

//ajax获取商品详情
export const reqGoodsInfo =
  skuId => requests.get(`/item/${skuId}`)

//ajax获取banner（首页轮播图）的函数
export const reqBannerList =
  () => mockRequests.get('/banner')

//ajax获取floor的函数
export const reqFloorList =
  () => mockRequests.get('/floor')