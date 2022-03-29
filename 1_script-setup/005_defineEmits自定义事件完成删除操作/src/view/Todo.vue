

<script setup>
/* 关键学习 舍去onMounted的异步运行机制 通过<suspense>代替async处理全局异步,还有通过promise启动一个加载内容 */
import { /* onMounted, */ ref } from "vue";
import Item from "../components/Item.vue";

/* 完成数据响应式 */
const todos = ref([]);

/* 舍去了onMounted(async () => {})后 想要执行异步获取数据的的话有个标签 <suspense>*/

// onMounted(async () => {})
/* ajax xhr fetch 等网络获取 */
todos.value = await fetch(`http://127.0.0.1:3333/news`).then(data());
/* 获取后台数据 */
function data() {
  return (r) => r.json();
}
/* 当我完成删除之后 定义一个数据*/
const del = async () => {
  todos.value = await fetch(`http://127.0.0.1:3333/news`).then(data());
};
</script>
<template>
  <div class="todo">
    <!-- todo被注册可以使用 -->
    <!-- 此todo代表某项 -->
    <item :todo="todo" @delFunc="del" class="item" v-for="todo of todos" :key="todo.id"/>
  </div>
</template>
<style lang='scss'>
div.todo {
  display: flex;
  flex-direction: column;
  .item {
    margin-bottom: 10px;
  }
}
</style>