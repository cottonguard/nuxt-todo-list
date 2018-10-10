import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: () => ({
      items: [
        {data: {
          title: 'title'
        }}
      ]
    }),
    mutations: {
      add(state, item) {
        state.items.push(item)
      }
    }
  })
}
