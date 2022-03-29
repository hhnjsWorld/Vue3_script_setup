<script setup lang="ts">
import useApi from "../composables/useApi";

const { response } = await useApi(`http://127.0.0.1:3111/articles/1`);

</script>
<template>
 {{response.title}}
</template>



<style scoped lang="scss">
</style>