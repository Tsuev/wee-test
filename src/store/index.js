import { createStore } from 'vuex'

export default createStore({
  state: {
    products: ['222']
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
        state.products = payload
    }
  },
  actions: {
    async FETCH_PRODUCTS ({commit}) {
        const a = await fetch('https://wee.ae/api/test', { page: 1 }).then(res => res)
    }
  }
})