import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0, // Estado inicial del contador
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    },
  },
  getters: {
    counter: (state) => state.counter,
  },
});
