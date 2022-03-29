<script setup>
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
  await fetch(`http://127.0.0.1:3333/news/${todo.id}`, {
    method: "delete",
  });
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
