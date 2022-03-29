<script setup>
  import {
    ref
  } from 'vue'
  import Hhn from './components/Hhn.vue'
  const show = ref(false)
</script>
<template>
<!-- 放在组件上做单独的切换功能 -->

<!-- 意思插槽slot的方式 把组件 =>作用域化  -->
 <Hhn v-if="show" #BOTTON>保存提交</Hhn>
  <button @click="show=!show">切换</button>
</template>
<style lang="scss" scoped>
button{
  margin-top:60px;
}
</style>