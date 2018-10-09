<template>
  <div id="app">
      <h1>Todo</h1>
      <input type="text" v-model="title" @keydown.enter="add">
      <div v-for="item in items">
        <todo-item :title="item.data.title"></todo-item>
      </div>
  </div>
</template>

<script>
import todoItem from '../components/todo-item.vue'

export default {
  data: () => ({
    title: ''
  }),
  methods: {
    add() {
      this.$store.commit('add', {
        data: {
          title: this.title
        }
      })
    }
  },
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  components: {
    todoItem
  }
}
</script>
