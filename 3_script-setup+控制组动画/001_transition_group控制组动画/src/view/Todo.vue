<script setup>
import Item from "../components/Item.vue";
import useTodo from "../composables/useTodo";
import Add from "../components/Add.vue";
import Sort from "../components/Sort.vue";
import "animate.css";

const { todos, sort, load } = useTodo();
load();
</script>

<template>
	<div class="form">
		<Add class="add" />
		<Sort />
	</div>
	<div class="todo">
		<transition-group name="todo" >
			<Item :todo="todo" class="item" v-for="todo of todos" :key="todo.id" />
		</transition-group>
	</div>
</template>

<style lang="scss">
/* 入场一组 */
.todo-enter-from {
  opacity: 0;
  transform: scale(0);
}
.todo-enter-to {
  opacity: 1;
  transform: scale(1);
}
/* 效果持续的时间 */
.todo-enter-active {
  transition: 2s ease;
}

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
  transition: 1s ease;
}
/* 上移效果 */
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

div.todo {
  display: flex;
  flex-direction: column;
  position: relative;

  .item {
    margin-bottom: 10px;
    // position: absolute;
    width: 100%;
  }
}
</style>