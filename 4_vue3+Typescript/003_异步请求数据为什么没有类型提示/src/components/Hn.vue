<script setup lang="ts">
import { ref } from "vue";
const res = await fetch(`http://127.0.0.1:3222/articles/1`).then((r) =>
  r.json()
);
/* 我不知道后台给我的啥 */
/* 帮助收纳后台数据<{title:string}> */
const articles = ref<{title:string}>(res);

const state = ref(false);
</script>
<template>
   <!-- {{articles.created_at}} -->
   <button @click="state=!state">toggle</button>
   <!-- 判断的前提是知道articles里有什么？什么数据类型 -->
   <!-- 访问一个错误的信息的话不点他也不报错 -->
   <div v-if="state" style="border:2px solid red">value={{articles.title}}</div>
</template>



<style scoped lang="scss">
</style>