<script setup>
import { ref } from "vue";
// const f = { name: "yahoo" };
const data = await fetch("http://127.0.0.1:3222/posts/1").then((r) => r.json());
const post = ref(data);



// f.name;

// /* ts所需要的 */
// addEventListener()//函数

// f//变量

// /* 类的方法 */
// class{
//   show()
// }
/* 这是不推断的 ts类型是什么就是什么 */
const t = {name:12}
t.name='abc'

function sum(a, b) {
  return a + b;
}

console.log(sum(1, {}));
</script>
<template>
  <div>
    <!-- {{f.name}} -->
    {{post.author}}
  </div>
</template>


<style lang="scss" scoped>
</style>