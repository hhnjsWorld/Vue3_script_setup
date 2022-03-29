//替代了 setup(){} 进行composition api去开发
<script setup>
import Todo from "./view/Todo.vue";
</script>
<template>
  <div>
    <!-- <suspense></suspense> 这个标签充当了async的角色 完成异步操作-->
    <suspense>
    
      <template #default>
        <todo/>
      </template>

<!-- 加载动画 -->
<template #fallback>loading...</template>
      
    </suspense>
  </div>
</template>

<style>
div {
  color: #fff;
}
</style>