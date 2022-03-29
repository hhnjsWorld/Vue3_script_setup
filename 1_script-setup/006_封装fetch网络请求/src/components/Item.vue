<script setup>

/* 引入一个封装过的fetch请求 */
import userRequest from "../composables/userRequest";

/* 解构 或者 定义 */
// const { request } = userRequest();
const  request  = userRequest();
/* 打印一下这个userRequest(),是个js函数 */
console.log(userRequest());



/* 以defineProps的方式注册 */
/* 删除数据的函数 */
/* 解构法 */
const /*  props */ { todo } = defineProps({
    todo: { type: Object, required: true },
  });
/* 以defineEmits的方式注册 */
const emit = defineEmits(["delFunc"]);
/* 拿删除函数做事情异步删除它 */
const del = async () => {
  /* 后台跟着绑定id的某一项 */
  await request._delete(todo.id);
  /* 子传父一个根据id删除单个的方法 */
  emit("delFunc");
};
</script>

<template>
<!-- :value使用本组件数据 -->
<!-- <section> -->

  <div class="item">
   <input type="text" :value="todo.title">
 <button @click="del">删除</button>
</div>

<!-- </section> -->
</template>

<style lang='scss'>
div.item {
  display: flex;
  input {
    padding: 10px;
  }
}
</style>
