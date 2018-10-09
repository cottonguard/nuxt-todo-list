<template>
  <div id="app">
      <h1>Todo</h1>
      <todo-input @submit="add"></todo-input>
      <div v-for="item in items">
        <todo-item :title="item.data.title"></todo-item>
      </div>
  </div>
</template>

<script>
import todoInput from '../components/todo-input.vue'
import todoItem from '../components/todo-item.vue'

export default {
  components: {
    todoInput,
    todoItem
  },
  data: () => ({
    title: ''
  }),
  methods: {
    add(title) {
      this.$store.commit('add', {
        data: {
          title
        }
      })
      this.title = ''
    }
  },
  computed: {
    items() {
      return this.$store.state.items
    }
  }
}
</script>
