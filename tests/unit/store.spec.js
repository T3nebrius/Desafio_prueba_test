import { createStore } from 'vuex';
import storeConfig from '@/store';
console.log('storeConfig:', storeConfig);

describe('Vuex Store - Contador', () => {
  let store;

  beforeEach(() => {
    store = createStore(storeConfig);
  });

  test('Debe tener un valor inicial de contador igual a 0', () => {
    expect(store.state.counter).toBe(0);
  });

  /*
  test('Debe incrementar el contador en 1', () => {
    store.commit('increment');
    expect(store.state.counter).toBe(1);
  });

  test('Debe decrementar el contador en 1', () => {
    store.commit('decrement');
    expect(store.state.counter).toBe(-1);
  });
  */
});
