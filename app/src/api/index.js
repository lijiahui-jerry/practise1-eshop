import requests from "@/api/request"
import mockRequests from "@/api/mockRequest";

//GET
//ajax获取三级菜单的函数
export const reqCategoryList=
  ()=>requests.get('/product/getBaseCategoryList')

//ajax获取商品详情
export const reqGoodsInfo=
  skuId=>requests.get(`/item/${skuId}`)

//ajax获取购物车数据
export const reqCartList=
  ()=>requests.get('/cart/cartList')

//ajax修改购物车中商品选中状态
export const changeCheckedInCart=
  (skuID,isChecked)=>requests.get(`/cart/checkCart/${skuID}/${isChecked}`)

//POST
//ajax获取商品搜索结果的函数
export const reqSearchInfo=
  params=>requests({
    url:'/list',
    method:'POST',
    data:params,
  })

//ajax将商品添加到购物车并修改已有数据
export const reqCartInfo=
  (skuId,skuNum)=>requests({
    url:`/cart/addToCart/${skuId}/${skuNum}`,
    method:'POST',
  })

//DELETE
//ajax删除购物车中特定skuId的商品
export const delCartInfo=
  skuId=>requests({
    url:`/cart/deleteCart/${skuId}`,
    method:'DELETE',
  })


//mock
//ajax获取banner（首页轮播图）的函数
export const reqBannerList=
  ()=>mockRequests.get('/banner')

//ajax获取floor的函数
export const reqFloorList=
  ()=>mockRequests.get('/floor')