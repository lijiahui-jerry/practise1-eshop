<template >
  <!-- 商品分类导航 -->
  <div class="type-nav" >
    <div class="container" >
      <div @mouseleave="leaveShow" @mouseenter="enterShow" >
        <h2 class="all" >全部商品分类</h2 >
        <transition name="sort" >
          <div class="sort" v-show="show" >
            <!-- 一级分类 -->
            <div class="all-sort-list2" @click="goSearch" >
              <div class="item"
                   v-for="(c1,index) in categoryList" :key="c1.categoryId" >
                <h3 @mouseenter="changeIndex(index)" :class="{cur:currentIndex===index}" >
                  <!-- #data-：表示自定义一个属性，-后的为属性名，遵从小驼峰命名规范，但在内部会自动转为全小写# -->
                  <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId" >
                    {{ c1.categoryName }}
                  </a >
                </h3 >
                <!-- 二级分类 -->
                <div class="item-list clearfix"
                     :style="{display:currentIndex===index?'block':'none'}" >
                  <div class="subitem" >
                    <dl class="fore" v-for="(c2) in c1.categoryChild" :key="c2.categoryId" >
                      <dt >
                        <a :data-categoryName="c2.categoryName" :data-category2Id="c1.categoryId" >
                          {{ c2.categoryName }}
                        </a >
                      </dt >
                      <!-- 三级分类 -->
                      <dd >
                        <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId" >
                          <a :data-categoryName="c3.categoryName" :data-category3Id="c1.categoryId" >
                            {{ c3.categoryName }}
                          </a >
                        </em >
                      </dd >
                    </dl >
                  </div >
                </div >
              </div >
            </div >
          </div >
        </transition >
      </div >

      <nav class="nav" >
        <a href="###" >服装城</a >
        <a href="###" >美妆馆</a >
        <a href="###" >尚品汇超市</a >
        <a href="###" >全球购</a >
        <a href="###" >闪购</a >
        <a href="###" >团购</a >
        <a href="###" >有趣</a >
        <a href="###" >秒杀</a >
      </nav >
    </div >
  </div >
</template >

<script >
import {mapState} from 'vuex'
import throttle from 'lodash/throttle'

export default {
  name: "TypeNav",

  data() {
    return {
      currentIndex: -1,
      show: true,
    }
  },

  methods: {
    //获取鼠标当前在哪个一级categoryList上
    changeIndex: throttle(
      //#节流#：使浏览器每50ms反应一次，避免用户操作过快导致的过量反应
      function (i) {
        this.currentIndex = i;
      }, 50),

    //三级联动的路由跳转
    goSearch(event) {
      //获取点击的元素
      let element = event.target
      //#元素的数据组对象，*属性名全小写*#
      let {categoryname, category1id, category2id, category3id} = element.dataset
      //路由所需的location
      let location = {name: 'search'}
      //location所需的query参数
      let query = {categoryName: categoryname}

      //判断是否点在“字”上，点在空白处不反应
      if (categoryname) {
        //判断几级菜单
        if (category1id) query.category1Id = category1id
        else if (category2id) query.category2Id = category2id
        else query.category3Id = category3id

        if (this.$route.params) {
          location.params = this.$route.params
          location.query = query
          this.$router.push(location)
        }
      }
    },

    //鼠标移入“全部商品分类”时显示它
    enterShow() {
      this.show = true
    },
    //鼠标移出“全部商品分类”时隐藏它
    leaveShow() {
      this.currentIndex = -1
      if (this.$route.path !== '/home') this.show = false
    },
  },

  mounted() {
    this.show = (this.$route.path !== '/search')
  },

  computed: {
    ...mapState({
      //#这个state是大仓库的，它只有每个小仓库对象，并且可以直接获取小仓库的state#
      categoryList: state => state.home.categoryList,
    }),
  },
}
</script >

<style scoped lang="less" >
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .cur {
            background-color: rosybrown;
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }

    .sort-enter {
      height: 0;
    }

    .sort-enter-to {
      height: 461px;
    }

    .sort-enter-active {
      transition: all .2s linear;
    }

    .sort-leave {
      height: 461px;
    }

    .sort-leave-to {
      height: 0px;
    }

    .sort-leave-active {
      transition: all .2s linear;
    }
  }
}
</style >