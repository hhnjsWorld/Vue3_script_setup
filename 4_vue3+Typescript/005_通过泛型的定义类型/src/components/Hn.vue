<script setup lang="ts">
import useApi from "../composables/useApi";

const { response } = await useApi(`http://127.0.0.1:3222/articles`, {
  methods: "post",
});
</script>
<template>
 {{response?.id}}
</template>



<style scoped lang="scss">
</style>