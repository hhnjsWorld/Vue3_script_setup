<script setup>
/* 以defineProps的方式注册 */
defineProps({
  todo: { type: Object, required: true },
});
</script>

<template>
<!-- :value使用本组件数据 -->
 <input type="text" :value="todo.title">
</template>

<style scoped lang='scss'>
input {
  padding: 10px;
  width: 50%;
}
</style>
