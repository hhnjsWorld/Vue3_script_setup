<script setup lang="ts">
const t: { age: number } = { age: 12 };
t.age = 11;

// const s = { age: 13 };
// s.age = 14;
// s.name ='ts';

/*通配符?0或者1来找到name */
// const s:{ age: number; name?: String } = { age: 13 };
// s.age = 14;
// s.name = "ts";

/* 衍化 定义对象的形式去写 */
type user = { age: number; name?: String };
/* 几个类型一起推断 */
let s: user | string | boolean | Object = { age: 13 };
s = "";
let d = s;
d = false;

console.log(typeof s); //string
console.log(typeof d); //boolean

// s.age = 14;
// s.name = "ts";

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, {}));
</script>
<template>
 
</template>


<style lang="scss" scoped>
</style>