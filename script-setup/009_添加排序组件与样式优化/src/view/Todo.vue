
<script setup>
/* 关键学习 舍去onMounted的异步运行机制 通过<suspense>代替async处理全局异步,还有通过promise启动一个加载内容 */
// import { /* onMounted, */ ref } from "vue";
import Item from "../components/Item.vue";

/* 引入一个封装过的fetch请求 */
// import userRequest from "../composables/userRequest";

/* 引入自定义公共数据管理*/
import useTodo from "../composables/useTodo";
/* 定义数据并且函数化 */
/* 解构我的包含的两个方法 */
const { todos,sort, finishedLoading } = useTodo();
finishedLoading();


/* 引入添加 */
import Add from "../components/Add.vue";
/* 引入排序 */
import Sort from "../components/Sort.vue";

/* 解构 或者 定义 */
// const { request } = userRequest();
// const  request  = userRequest();
/* 打印一下这个userRequest(),是个js函数 */
// console.log(userRequest());

/* 完成数据响应式 */
// const todos = ref([]);

/* 舍去了onMounted(async () => {})后 想要执行异步获取数据的的话有个标签 <suspense>*/

// onMounted(async () => {
/* ajax xhr fetch 等网络获取 */
// todos.value = await request._get() /* fetch(`http://127.0.0.1:3333/news`).then(data()); */

/* 当我完成删除之后 定义一个数据*/
/* 根组件完成删除效果的渲染 触发视图*/
// const del = async () => {
//   todos.value = await request._get() /* await fetch(`http://127.0.0.1:3333/news`).then(data()); */
// };
</script>
<template>
<div class="form">
  <Add/>
  <Sort/>
</div>
  <div class="todo">
    <!-- todo被注册可以使用 -->
    <!-- 此todo代表某个 -->

    <!-- 舍去了子传父emit过来的方法 -->
    <item :todo="todo" class="item" v-for="todo of todos" :key="todo.id"/>
  </div>

</template>
<style lang='scss'>
.form {
  display: flex;
  margin-bottom: 20px;
  .add {
    flex: 1;
  }
}
div.todo {
  display: flex;
  flex-direction: column;
  .item {
    margin-bottom: 10px;
  }
}
</style>