import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { cloneDeep } from 'lodash';

import storeConfig from './store';

test('cart value changes when "addToCart" is commited', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));

  expect(store.state.cart.length).toBe(0);
  store.commit('setProductInCart', { id: 1, quantity: 55, name: 'SomeProduct' });
  expect(store.state.cart.length).toBe(1);
});
