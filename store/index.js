import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: () => ({
      items: [
        {data: {
          title: 'TITLE'
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
