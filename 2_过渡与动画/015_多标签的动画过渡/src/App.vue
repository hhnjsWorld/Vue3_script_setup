
<script setup>
// import Onoff from "./components/Onoff.vue";
import { ref } from "vue";
/* 引入AnimateCss的格式 */
import "animate.css";
const action = ref("on");
</script>

<template>
<section>
  <!-- 在我 yarn add animate.css 依赖以后 可以使用的类  -->

  <!-- mode="out-in" 舍去了定位的显隐做法 mode="in-out"-->
  <!-- 还可以定义类 -->
  <transition

   enter-active-class="animate__animated animate__zoomIn go"
   leave-active-class="animate__animated animate__zoomOut to"
   
   mode="out-in"
   >
   <!-- <Onoff/> -->
    <button class="on" v-if="action=='on'" @click="action='off'">开启</button>
  <button class="off" v-else @click="action='on'">关闭</button>
  </transition>
</section>
</template>
<style lang="scss" scoped>
section {
  // position: relative;

//一.以 引入的类定义
  // .animate__animated {
  //   /* 自定义过渡时间 */
  //   animation-duration: 5s;
  // }
  //二.以 自定义的类定义
  .go{
    animation-duration: 1s;
    
  }
  .to{
    animation-duration: 5s;
  }
  button {
    // position: absolute;
    border: none;
    padding: 5px 10px;
    color: #fff;
    cursor: pointer;
    &.on {
      background: #16a850;
    }
    &.off {
      background: #d35400;
    }
  }
}
</style>