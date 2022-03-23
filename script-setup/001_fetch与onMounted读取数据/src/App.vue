//替代了 setup(){} 进行composition api去开发
<script setup>
import { onMounted, ref } from "vue";
const todos = ref([]);
onMounted(async () => {
  /* ajax xhr fetch 等网络获取 */
  todos.value = await fetch(`http://127.0.0.1:3333/news`).then(data());
  /* 获取后台数据 */
  function data() {
    return (r) => r.json();
  }
});
</script>
<template>
  <div>{{ todos }}</div>
</template>

<style>
div {
  color: #fff;
}
</style>