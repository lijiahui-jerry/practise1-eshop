<template >
  <div >
    <h1 >params:{{ $route.params }}</h1 >
    <h1 >query:{{ $route.query }}</h1 >
  </div >
</template >

<script >
export default {
  name: "Search",
  props: [
    'keyword',
    'k',
  ]
}
</script >

<style scoped >

</style >