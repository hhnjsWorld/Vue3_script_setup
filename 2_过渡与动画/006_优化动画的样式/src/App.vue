<script setup>
import { ref } from "vue";
import Hhn from "./components/Hhn.vue";
import Trans from "./components/Trans.vue";
const show = ref(false);
</script>
<template>

<!-- 过渡标签 -->
<transition>
  <!-- 放在组件上做单独的切换功能 -->

<!-- 意思插槽slot的方式 把组件 =>作用域化  -->
<!-- <Hhn v-if="show" #BOTTON>保存提交</Hhn> -->
  <Trans v-if="show" #BOTTON>过渡</Trans>
  </transition>
<button @click="show=!show">切换</button>

</template>
<style lang="scss" scoped>
/* 定义类 */
/* 类聚并简化下样式 */
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* 等待三秒 */
.v-leave-active,
.v-enter-active {
  transition: 3s ease;
}

/* 由于v-if的功能,没有opacity:1;也默认为显示课已不需要 */
// .v-enter-to,
// .v-leave-from {
//   transform:rotateY(100deg);//旋转特效
//   opacity: 1;
// }

button {
  margin-top: 10px;
  display: block;
}
</style>