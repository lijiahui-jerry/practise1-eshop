<template >
  <!--banner轮播-->
  <div class="swiper-container" ref="mySwiper" >
    <div class="swiper-wrapper" >
      <div class="swiper-slide"
           v-for="v in carouselList" :key="v.id" >
        <img alt=""
             :src="v.imgUrl" />
      </div >
    </div >
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" ></div >

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev" ></div >
    <div class="swiper-button-next" ></div >
  </div >
</template >

<script >
//引入swiper插件
import Swiper from 'swiper'

export default {
  name: "Carousel",

  props: ['carouselList'],

  watch: {
    carouselList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          new Swiper(
            this.$refs.mySwiper,
            {
              //循环轮播
              loop: true,

              //分页器设置
              pagination: {
                el: '.swiper-pagination',
                //点击分页器切换轮播图
                clickable: true,
              },

              //前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            },
          )
        })
      },
    },
  },
}
</script >

<style scoped >

</style >