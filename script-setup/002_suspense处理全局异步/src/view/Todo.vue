

<script setup>
/* 关键学习 舍去onMounted的异步运行机制 通过<suspense>代替async处理全局异步,还有通过promise启动一个加载内容 */
import { /* onMounted, */ ref } from "vue";

/* 完成数据响应式 */
const todos = ref([]);

/* 舍去了onMounted(async () => {})后 想要执行异步获取数据的的话有个标签 <suspense>*/

// onMounted(async () => {
/* ajax xhr fetch 等网络获取 */
todos.value = await fetch(`http://127.0.0.1:3333/news`).then(
  // data()
  /* promise完成一个延迟动作 */
  (r) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(r.json()), 2000);
    });
  }
);
/* 获取后台数据 */
// function data() {
//   return (r) => r.json();
// }
</script>
<template>
<!-- todo被注册可以使用 -->
  <div>{{todos}}</div>
</template>
<style scoped lang='scss'>
</style>