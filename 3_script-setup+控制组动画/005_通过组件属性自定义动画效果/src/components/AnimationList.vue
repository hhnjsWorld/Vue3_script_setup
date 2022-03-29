<script setup>
/* 动画钩子编程 */
import gsap from "gsap";

import "animate.css";

/* 父传子 定制  过渡时间 */
const props = defineProps({
  duration: { default: 0.6 },
  delay: { default: 0.2 },
  tag: { default: null },
});

/* 初始的时候 */
const beforeEnter = (el) => {
  gsap.set(el, {
    opacity: 0,
  });
};
/* 过渡 */
const enter = (el, done) => {
  console.log(el.dataset);
  gsap.to(el, {
    opacity: 1,
    duration: props.duration,
    /* 延迟 */
    delay: el.dataset.index * props.delay,
  });
};
</script>

<template> 
  <!-- tag='ul'动画组件渲染成一个标签 -->
        <transition-group :tag="tag" name="todo" @before-enter="beforeEnter" @enter="enter" appear>
            <slot name="animate" />
        </transition-group>
   
</template>

<style lang="scss">
// /* 入场一组 */
// .todo-enter-from {
//   opacity: 0;
//   transform: scale(0);
// }
// .todo-enter-to {
//   opacity: 1;
//   transform: scale(1);
// }
// /* 效果持续的时间 */
// .todo-enter-active {
//   transition: 2s ease;
// }

/* 退场一组 */
.todo-leave-from {
  opacity: 1;
  transform: scale(1);
}

.todo-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* 效果的时间 */
.todo-leave-active {
  transition: 1.5s ease;
  //没有绝对定位  move 上移不平滑 相对于相对定位做的平滑效果
  /* 控制消失的时候的动画效果  */
  position: absolute;
}

/* 平滑的往上移效果 */
.todo-move {
  transition: all 1s ease;
}

.form {
  display: flex;
  margin-bottom: 20px;

  .add {
    flex: 1;
  }
}
</style>