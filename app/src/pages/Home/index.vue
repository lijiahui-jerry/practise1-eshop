<template >
  <div >
    <!--  直接使用全局路由组件  -->
<!--    <button @click="selfAdd">+1</button >-->
<!--    <span >{{ count }}</span >-->
<!--    <button @click="selfMinus" >-1</button >-->

    <TypeNav ></TypeNav >
    <ListContainer ></ListContainer >
    <Recommend ></Recommend >
    <Rank ></Rank >
    <Like ></Like >
    <Floor ></Floor >
    <Floor ></Floor >
    <Brand ></Brand >
  </div >
</template >

<script >
//引入路由组件
import ListContainer from "@/pages/Home/ListContainer"
import Recommend from "@/pages/Home/Recommend"
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor"
import Brand from "@/pages/Home/Brand"
//引入仓库数据映射函数
// import {mapState} from "vuex"

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },

  computed: {
    //映射仓库数据，映射之后就不用再通过this.$store.state获取仓库数据了
    // ...mapState(['count']),
  },

  methods: {
    // //向仓库派发自加action
    // selfAdd() {
    //   this.$store.dispatch('selfAdd')
    // },
    // selfMinus() {
    //   this.$store.dispatch('selfMinus')
    // },
  },
}
</script >

<style scoped >

</style >