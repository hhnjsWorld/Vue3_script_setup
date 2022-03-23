<script setup>
import useTodo from "../composables/useTodo";
const { del } = await useTodo();
const { todo } = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<template>


  <div class="item">
    <input type="text" :value="todo.title">
    <button @click="del(todo.id)">删除</button>
  </div>


</template>

<style lang='scss'>
div.item {
  display: flex;

  input {
    padding: 10px;
  }
}
</style>