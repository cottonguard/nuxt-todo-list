<template>
  <div class="todo-item">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data: () => ({
  })
}
</script>

<style>
.todo-item {
  border: solid 1px black;
  margin-bottom: 1.5em;
}
</style>
