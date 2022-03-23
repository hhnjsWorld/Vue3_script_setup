<script setup>
/* 以defineProps的方式注册 */
defineProps({
  todo: { type: Object, required: true },
});
</script>

<template>
<!-- :value使用本组件数据 -->
<!-- <section> -->

  <div class="item">
   <input type="text" :value="todo.title">
 <button>删除</button>
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
