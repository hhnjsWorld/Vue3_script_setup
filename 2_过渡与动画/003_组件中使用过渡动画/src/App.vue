<script setup>
  import {
    ref
  } from 'vue'
  import Hhn from './components/Hhn.vue'
  const show = ref(false)
</script>
<template>
<!-- 放在组件上做单独的切换功能 -->
 <Hhn v-if="show"/>
  <button @click="show=!show">切换</button>
</template>
<style lang="scss" scoped>
button{
  margin-top:60px;
}
</style>