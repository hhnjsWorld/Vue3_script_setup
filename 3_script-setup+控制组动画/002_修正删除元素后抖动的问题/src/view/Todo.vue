<script setup>
import Item from "@c/Item.vue";
import useTodo from "@cp/useTodo";
import Add from "@c/Add.vue";
import Sort from "@c/Sort.vue";
// import { Item,useTodo,Add,Sort } from "components";
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
  transition: 1.5s ease;
  //没有绝对定位  move 上移不平滑 相对于相对定位做的平滑效果
  /* 控制消失的时候的动画效果  */
  position: absolute;
}
/* 平滑的往上移效果 */
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
    // position: absolute;//取消绝对定位
    width: 100%;
  }
}
</style>