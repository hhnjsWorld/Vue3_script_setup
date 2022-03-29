//替代了 setup(){} 进行composition api去开发
<script setup>
  import Todo from "./view/Todo.vue";
</script>
<template>
  <div>

    <suspense>

      <template #default>
        <todo />
      </template>


      <template #fallback>loading...</template>

    </suspense>
  </div>
</template>

<style>
  div {
    color: #fff;
  }
</style>