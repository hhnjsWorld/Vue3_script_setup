<script setup>
/* 引入请求并处理过的响应式数据 */
import useTodo from "../composables/useTodo";
/* 让添加的数据成为响应式 */
import { ref } from "vue";
/* 让添加后的完成响应式 */
const title = ref("");
/* 定义添加的方法 */
const onSubmit = () => {
  useTodo().add({ title: title.value })
  title.value = ""
};
</script>

<template>
 <div class="add">
   <!-- 添加实现双绑 -->
      <input v-model="title" type="text" placeholder="回车提交任务" @keyup.enter="onSubmit">
 </div>
</template>


<style lang='scss'>
div.add {
  display: flex;
  input {
    border: solid 5px purple;
    padding: 10px;
    flex: 1;
  }
}
</style>