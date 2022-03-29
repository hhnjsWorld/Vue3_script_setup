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
/* 显示动画 */
.v-enter-from {
  /* 不可见 */
  opacity: 0;
}

.v-enter-active {
  /* 经过两秒 */
  transition: 2s ease;
}

.v-enter-to {
  /* 到可见 */
  opacity: 1;
  transform:rotateY(100deg)//旋转特效
}

/* 消失动画 */
/* 消失怎么办 */
.v-leave-from{
  opacity: 1;
}
/* 等待三秒 */
.v-leave-active{
  transition:2s ease;
}
/* 消失 */
.v-leave-to{
  opacity: 0;
  // transform: translateY(-200px)//淡出完毕
}
button {
  margin-top: 10px;
  display: block;
}
</style>