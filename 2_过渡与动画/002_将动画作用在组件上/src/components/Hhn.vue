<template>
    <div>
    已切换
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div{
  background: #16a085;
  padding: 20px;
  animation: identifier 2s ease;
}
/* 关键帧控制元素的动画 */
@keyframes identifier{
  from{
    transform: translateX(-5px);
  }
   20%{
    transform: translateX(5px);
  }
   40%{
    transform: translateX(-5px);
  }
   60%{
    transform: translateX(5px);
  }
   80%{
    transform: translateX(-5px);
  }
   to{
    transform: translateX(0px);
  }
}
</style>