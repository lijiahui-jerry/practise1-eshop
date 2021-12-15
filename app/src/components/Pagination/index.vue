<template >
  <div class="pagination">
    <!-- 点击往前翻页，并且在第一页不能点击 -->
    <button :disabled="pageNo === 1" @click="$emit('getPage', pageNo - 1)">
      上一页
    </button>
    <button
      v-if="startAndEnd.start > 1"
      @click="$emit('getPage', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>

    <button v-if="startAndEnd.start > 2">···</button>

    <button
      v-for="(page, index) in startAndEnd.end"
      :key="index"
      v-if="page >= startAndEnd.start"
      @click="$emit('getPage', page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>

    <button v-if="startAndEnd.end < totalPage - 1">···</button>
    <button v-if="startAndEnd.end < totalPage">
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo === totalPage"
      @click="$emit('getPage', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px" :disabled="true">
      共&nbsp;{{ total }}&nbsp;条
    </button>
  </div>
</template >

<script >
export default {
  name: "Pagination",

  props: [
    "pageNo", //当前页数
    "pageSize", //每页的数据量
    "total", //数据总量
    "continues", //连续的页数
  ],

  computed: {
    //计算总共应显示多少页
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },

    //计算连续页面的起始页数和结束页数
    startAndEnd() {
      const { pageNo, continues, totalPage } = this;
      let start = 0,
        end = 0;
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);

        if (start < 1) {
          start = 1;
          end = continues;
        }

        if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }

      return { start, end };
    },
  },
};
</script >

<style scoped lang="less" >
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style >
