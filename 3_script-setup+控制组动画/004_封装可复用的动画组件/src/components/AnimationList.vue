<script setup>
/* 动画钩子编程 */
import gsap from "gsap";
// import { Item,useTodo,Add,Sort } from "components";
import "animate.css";

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
    duration: 0.6,
    /* 延迟 */
    delay: el.dataset.index * 0.33,
  });
};
</script>

<template>
  
        <transition-group name="todo" @before-enter="beforeEnter" @enter="enter" appear>
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