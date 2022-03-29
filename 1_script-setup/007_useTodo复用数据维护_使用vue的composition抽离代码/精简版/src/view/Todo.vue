<script setup>
import Item from "../components/Item.vue";
import useTodo from "../composables/useTodo";
const { todos, deleted } = /* await */ useTodo();
deleted();


</script>
<template>
  <div class="todo">
    <item :todo="todo" class="item" v-for="todo of todos" :key="todo.id" />
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