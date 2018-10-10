<template>
  <input type="text" @keydown.enter="submit">
</template>
<script>
export default {
  data: () => ({
  }),
  methods: {
    submit(e) {
      this.$emit('submit', e.target.value)
      e.target.value = ''
    }
  }
}
</script>
