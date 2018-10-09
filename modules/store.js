let items = []

module.exports = {
  async load() {
    return items
  },

  async add(item) {
    items.push(item)
  }
}
