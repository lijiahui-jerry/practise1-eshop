import requests from "@/api/request"
import mockRequests from "@/api/mockRequest"

//GET
//ajax获取三级菜单的函数
export const reqCategoryList=
  ()=>requests.get('/product/getBaseCategoryList')

//ajax获取商品详情
export const reqGoodsInfo=
  (skuId)=>requests.get(`/item/${skuId}`)

//ajax获取购物车数据
export const reqCartList=
  ()=>requests.get('/cart/cartList')

//ajax修改购物车中商品选中状态
export const changeCheckedInCart=
  (skuID,isChecked)=>requests.get(`/cart/checkCart/${skuID}/${isChecked}`)

//ajax获取验证码
export const reqPasscode=
  (phone)=>requests.get(`/user/passport/sendCode/${phone}`)

//token获取用户的信息
export const reqUserInfo=
  ()=>requests.get(`/user/passport/auth/getUserInfo`)

//退出登录
export const reqUserLogout=
  ()=>requests.get(`/user/passport/logout`)

//获取用户地址信息
export const reqUserAddressList=
  ()=>requests.get(`/user/userAddress/auth/findUserAddressList`)

//获取订单支付信息
export const reqOrderInfo=
  ()=>requests.get(`/order/auth/trade`)

//获取订单支付信息
export const reqPaymentInfo=
  (orderId)=>requests.get(`/payment/weixin/createNative/${orderId}`)

//获取订单支付状态
export const reqPaymentStatus=
  (orderId)=>requests.get(`/payment/weixin/queryPayStatus/${orderId}`)

//获取个人中心的数据
export const reqMyOrderList=
  (page,limit)=>requests.get(`/order/auth/${page}/${limit}`)

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

//注册
export const reqUserRegister=
  (data)=>requests({
    url:`/user/passport/register`,
    method:'POST',
    data,
  })

//登录
export const reqUserLogin=
  (data)=>requests({
    url:`/user/passport/login`,
    method:'POST',
    data,
  })

//提交订单
export const reqSubmitOrder=
  (tradeNo,data)=>requests({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method:'POST',
    data,
  })

//DELETE
//ajax删除购物车中特定skuId的商品
export const delCartInfo=
  (skuId)=>requests({
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