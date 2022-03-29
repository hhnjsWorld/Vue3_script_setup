<template>
    <section>
    <div>已切换</div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
section{
  perspective: 800px;
}
div {
  background: #16a085;
  padding: 20px;
  /* 动画维持多长时间 */
  animation: identifier 2s ease;
  transition: 2s;
  /* 点击后的样式是旋转 */
  &:hover {
    transform: rotateY(360deg) rotateX(100deg);
  }
}
/* 关键帧控制元素的动画 */
@keyframes identifier {
  from {
    transform: translateX(-5px);
  }
  20% {
    transform: translateX(5px);
  }
  40% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(5px);
  }
  80% {
    transform: translateX(-5px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>