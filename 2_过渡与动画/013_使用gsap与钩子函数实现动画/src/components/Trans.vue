<template>
    <section>
      <!-- 插槽化组件 -->
    <div>
      <slot name="BOTTON"/>
      </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
section {
  perspective: 800px;
  width: 100px;
  
}
div {
  background: #16ccc1;
  padding: 10px 20px;
 
  border-radius: 0.5rem;
  display: inline-block;
  color: #fff;
 
}

</style>