import requests from "@/api/request"
import mockRequests from "@/api/mockRequest";

//ajax获取三级菜单的函数
export const reqCategoryList =
  () => requests.get('/product/getBaseCategoryList')

//ajax获取banner（首页轮播图）的函数
export const reqBannerList =
  () => mockRequests.get('/banner')