<script setup>
import { ref } from "vue";
import Hhn from "./components/Hhn.vue";
import Trans from "./components/Trans.vue";
import New from "./components/New.vue";
const show = ref(false);
</script>
<template>

  <!-- 过渡标签 -->

  <!-- 动画的自定义类名 -->
  <!-- <transition
 enter-class=""
 enter-active-class=""
 enter-to-class=""
 leave-from-class=""
 leave-active-class=""
 leave-to-class=""
  >  -->

  <transition 
  enter-active-class="hn-enter"
   leave-active-class="hn-leave">

    <!-- <transition name="trans"> -->
    <!-- 放在组件上做单独的切换功能 -->
    <!-- 意思插槽slot的方式 把组件 =>作用域化  -->
    <!-- <Hhn v-if="show" #BOTTON>保存提交</Hhn> -->
    <Trans v-if="show" #BOTTON>过渡</Trans>
  </transition>




  <transition name="new">
    <New v-if="show" #BOTTON>独立</New>
  </transition>
  <button @click="show = !show">切换</button>
</template>
<style lang="scss" scoped>


/* 如class一般定义类名 */
.hn-enter{
animation: identifier 2s ease;
}
.hn-leave{
  animation: identifier 2s ease reverse;
}


/* 定义类 */
/* 类聚并简化下样式 */
.trans-enter-from,
.trans-leave-to {
  transform: rotateY(100deg); //旋转特效

  opacity: 0;
}

/* 等待三秒 */
.trans-leave-active,
.trans-enter-active {
  transition: 3s ease;
}

/* 由于v-if的功能,如果没有opacity:1;也默认为显示已不需要 */
// .trans-enter-to{
//   opacity: 1;
// }
// .trans-leave-from {
//   opacity: 1;
// }

// .new-enter-from,
// .new-leave-to {
//   opacity: 0;
// }

/* 等待三秒 */
/* 在keyframe下操作帧 */
/* 过渡:显现的时候 */
.new-enter-active {
  // transition: 3s ease;
  animation: identifier 2s ease;
}

/* 过渡:消失的时候 */
.new-leave-active {
  animation: identifier 2s ease reverse;
}

// .new-enter-to,
// .new-leave-from {
//   transform: rotateX(360deg); //旋转特效
//   opacity: 0;
// }

/* keyframe */
@keyframes identifier {
  from {
    transform: scale(0);
  }

  to {
    from {
      transform: scale(1) rotateX(360deg);
    }
  }
}

button {
  margin-top: 10px;
  display: block;
}
</style>