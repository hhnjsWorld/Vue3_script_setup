<script setup lang="ts">
/* 引入 集成Api */
import { all, find } from "../apis/article";

/* 获取全部 */
const { response: articles } = await all();

/* 获取单条 */
const { response: article } = await find(1);
</script>
<template>
<div v-for="article of articles" :key="article.id">
  {{article.id}}
  
</div>
<hr/>
{{article?.author}}
</template>



<style scoped lang="scss">
</style>