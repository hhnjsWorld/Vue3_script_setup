
<script setup>
import Onoff from "./components/Onoff.vue";
import { ref } from "vue";
const action = ref("on");
</script>

<template>
  <button class="on" v-if="action=='on'" @click="action='off'">开启</button>
  <button class="off" v-else @click="action='on'">关闭</button>
</template>


<style lang="scss">
button {
  border: none;
  padding: 5px 10px;
  color:#fff;
  cursor: pointer;
  &.on {
    background: #16a850;
  }
  &.off{
    background: #d35400;
  }
}
</style>