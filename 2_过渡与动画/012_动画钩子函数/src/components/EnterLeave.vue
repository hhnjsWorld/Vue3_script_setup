<template>
    <section>
      <!-- 插槽化组件 -->
    <div>
      <slot name="钩子函数"/>
      </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
section {
  perspective: 800px;
  width: 200px;
  
}
div {
  background: #16a085;
  padding: 10px 20px;
 
  border-radius: 0.5rem;
  display: inline-block;
  color: #fff;
 
}

</style>