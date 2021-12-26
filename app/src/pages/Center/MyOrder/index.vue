<template>
 <div>
  <div class="order-right">
   <div class="order-content">
    <div class="title">
     <h3>我的订单</h3>
    </div>

    <div class="chosetype">
     <table>
      <thead>
      <tr>
       <th width="29%">商品</th>
       <th width="31%">订单详情</th>
       <th width="13%">收货人</th>
       <th>金额</th>
       <th>状态</th>
       <th>操作</th>
      </tr>
      </thead>
     </table>
    </div>

    <div class="orders">
     <table class="order-item" v-for="(record) in myOrder.records"
            :key="record.id">
      <thead>
      <tr>
       <th colspan="5">
        <span class="ordertitle">{{record.createTime}}　
                                 订单编号：{{record.outTradeNo}}
         <span class="pull-right delete"><img src="./images/delete.png"></span>
        </span>
       </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(recordDetails,index) in record.orderDetailList" :key="index">
       <td width="60%">
        <div class="typographic">
         <img :src="recordDetails.imgUrl">
         <a href="#" class="block-text">{{recordDetails.skuName}}</a>
         <span>x{{recordDetails.skuNum}}</span>
         <a href="#" class="service">售后申请</a>
        </div>
       </td>
       <td :rowspan="record.orderDetailList.length" v-if="index==0" width="8%"
           class="center">
        {{record.consignee}}
       </td>
       <td :rowspan="record.orderDetailList.length" v-if="index==0" width="13%"
           class="center">
        <ul class="unstyled">
         <li>总金额¥{{record.totalAmount}}.00</li>
         <li>支付方式：{{record.paymentWay}}</li>
        </ul>
       </td>
       <td :rowspan="record.orderDetailList.length" v-if="index==0" width="8%"
           class="center">
        <a href="#" class="btn">{{record.orderStatusName}}</a>
       </td>
       <td :rowspan="record.orderDetailList.length" v-if="index==0" width="13%"
           class="center">
        <ul class="unstyled">
         <li><a href="mycomment.html" target="_blank">评价|晒单</a></li>
        </ul>
       </td>
      </tr>
      </tbody>
     </table>
    </div>

    <div class="choose-order">
     <Pagination :pageNo="page" :continues="5" :pageSize="limit"
                 :total="myOrder.total" @getPage="getPage"/>
    </div>
   </div>
  </div>

  <!--猜你喜欢-->
  <div class="like">
   <h4 class="kt">猜你喜欢</h4>
   <ul class="like-list">
    <li class="likeItem">
     <div class="p-img">
      <img src="./images/itemlike01.png"/>
     </div>

     <div class="attr">
      <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
     </div>

     <div class="price">
      <em>¥</em><i>3699.00</i>
     </div>

     <div class="commit">
      已有6人评价
     </div>
    </li>
   </ul>
  </div>
 </div>
</template>

<script>
export default {
  name:"MyOrder",

  data(){
    return {
      page:1,
      limit:3,
      myOrder:{},
    }
  },

  mounted(){
    this.getData()
  },

  methods:{
    async getData(){
      const {page,limit}=this

      let result=await this.$API.reqMyOrderList(page,limit)
      if(result.code==200){
        this.myOrder=result.data
      }else return Promise.reject(new Error(result.message))
    },

    getPage(page){
      this.page=page
      this.getData()
    },
  },
}
</script>

<style lang="less" scoped>
//右边
.order-right{
  float:right;
  width:83.33%;

  //订单部分
  .order-content{
    margin:0 20px;
    color:#666666;

    //标题
    .title{
      margin-bottom:22px;
      border:1px solid #DDDDDD;

      h3{
        padding:12px 10px;
        font-size:15px;
        background-color:#F1F1F1;

      }
    }

    //表头
    .chosetype{
      margin-bottom:15px;
      color:#666666;

      table{
        border:1px solid #E6E6E6;
        border-collapse:separate;
        border-radius:2px;
        width:100%;
        max-width:100%;
        border-spacing:0;

        th{
          padding:6px 8px;
          color:#666666;
          font-weight:700;
          vertical-align:bottom;
          background-color:#F4F4F4;
          line-height:18px;
          border-bottom:1px solid #E6E6E6;
          font-size:12px;
          text-align:left;
        }
      }
    }

    // 表单内容
    .orders{
      font-size:12px;

      a{
        &:hover{
          color:#4CB9FC;
        }
      }

      table{
        border:1px solid #E6E6E6;
        border-collapse:collapse;
        border-radius:2px;
        width:100%;
        margin-bottom:18px;
        max-width:100%;

        th{
          padding:6px 8px;
          line-height:18px;
          text-align:left;
          vertical-align:bottom;
          background-color:#F4F4F4;
          font-size:12px;
          color:#666666;

          .pull-right{
            float:right;
            cursor:pointer;

            img{
              margin-right:10px;
              vertical-align:middle;
            }
          }
        }

        td{
          font-size:12px;
          color:#666666;
          padding:6px 8px;
          line-height:18px;
          text-align:left;
          vertical-align:middle;
          border:1px solid #E6E6E6;

          &.center{
            text-align:center;
          }

          .typographic{
            img{
              float:left;
              margin-right:10px;
              width:50px;
              height:50px;
            }

            a{
              float:left;
              min-width:80px;
              max-width:250px;
              color:#E1251B;

              &.service{
                color:#666666;
              }
            }

            span{
              float:left;
              min-width:80px;
              max-width:250px;
              text-align:center;
            }

          }
        }

      }
    }

    // 分页
    .choose-order{
      .pagination{
        margin:38px 0;

        ul{
          font-size:0;
          display:inline-block;

          li{
            display:inline-block;
            padding:4px 9px;
            font-size:14px;
            border:1px solid #E0E9EE;

            &.prev,
            &.next{
              background-color:#FAFAFA;
            }

            &.prev{
              border-right-color:#28A3EF;
            }

            &.page{
              border-color:#28A3EF;
              border-left:0;

              &.actived{
                background-color:#28A3EF;

                a{
                  color:#FFFFFF;
                }

              }
            }
          }
        }

        div{
          display:inline-block;
          font-size:14px;
          color:#333333;
        }
      }
    }
  }

  // 猜你喜欢
  .like{
    border:1px solid #DDDDDD;
    margin:15px 20px;

    .kt{
      border-bottom:1px solid #DDDDDD;
      background:#F1F1F1;
      color:#666666;
      margin:0;
      padding:12px;
      font-size:15px;
    }

    .like-list{
      padding:15px 11px;
      overflow:hidden;

      .likeItem{
        width:25%;
        float:left;

        .p-img{
          text-align:left;

          img{
            width:167px;
            height:123px;
          }
        }

        .attr{
          padding:0 15px;
        }

        .price{
          padding:0 15px;
          font-size:16px;
          color:#C81623;
          margin-bottom:20px;
        }

        .commit{
          padding:0 15px;
        }
      }
    }
  }
}
</style>