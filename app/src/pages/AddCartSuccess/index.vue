<template>
 <div class="cart-complete-wrap">
  <div class="cart-complete">
   <h3>
    <i class="sui-icon icon-pc-right"/>
    商品已成功加入购物车！
   </h3>

   <div class="goods">
    <div class="left-good">
     <div class="left-pic">
      <img :src="skuInfo.skuDefaultImg">
     </div>

     <div class="right-info">
      <p class="title">{{skuInfo.skuName}}</p>
      <p class="attr">
       {{skuInfo.skuDesc}} 数量：{{this.$route.query.skuCount}}
      </p>
     </div>

    </div>
    <div class="right-gocart">
     <router-link class="sui-btn btn-xlarge" :to="`/detail/${skuInfo.id}`">
      查看商品详情
     </router-link>

     <router-link to="/shopcart">
      去购物车结算
     </router-link>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  name:'AddCartSuccess',

  computed:{
    skuInfo(){
      return JSON.parse(sessionStorage.getItem('SKUINFO'))
    },
  },
}
</script>

<style lang="less" scoped>
.cart-complete-wrap{
  background-color:#F4F4F4;

  .cart-complete{
    width:1200px;
    margin:0 auto;

    h3{
      font-weight:400;
      font-size:16px;
      color:#6AAF04;
      padding-top:15px;
      padding-bottom:15px;
      margin:0;

      .icon-pc-right{
        background-color:#FFFFFF;
        border:2px solid #6AAF04;
        padding:3px;
        margin-right:8px;
        border-radius:15px;
      }
    }

    .goods{
      overflow:hidden;
      padding:10px 0;

      .left-good{
        float:left;

        .left-pic{
          border:1px solid #DFDFDF;
          width:60px;
          float:left;

          img{
            width:60px;
            height:60px;
          }
        }

        .right-info{
          color:#444444;
          float:left;
          margin-left:10px;

          .title{
            width:100%;
            line-height:28px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            font-size:14px;
          }

          .attr{
            color:#AAAAAA;
          }
        }
      }

      .right-gocart{
        float:right;

        a{
          padding:7px 36px;
          font-size:15px;
          line-height:22px;
          color:#333333;
          background-color:#EEEEEE;
          text-decoration:none;
          box-sizing:border-box;
          border:1px solid #E1E1E1;
        }

        a:hover{
          background-color:#F7F7F7;
          border:1px solid #EAEAEA;
        }

        a:active{
          background-color:#E1E1E1;
          border:1px solid #D5D5D5;
        }

        .btn-danger{
          background-color:#E1251B;
          color:#FFFFFF;
        }

        .btn-danger:hover{
          background-color:#E1251B;
        }
      }

    }
  }
}
</style>