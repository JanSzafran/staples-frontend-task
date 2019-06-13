import Vuex from 'vuex';
import { mount, config } from '@vue/test-utils';
import Item from './Item';
import store from '../store/store';

config.mocks.$store = new Vuex.Store(store);

describe('Item', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Item);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('quantity changes', () => {
    const product = { id: 1, quantity: 55, name: 'SomeProduct' };
    const wrapper = mount(Item, {
      propsData: {
        product,
      },
    });

    wrapper.vm.$data.itemQuantity = 666;

    expect(wrapper.find('input').element.value === '666').toBeTruthy();
  });

  test('addToCart changes store', () => {
    const wrapper = mount(Item);

    const product = { id: 1, quantity: 55, name: 'SomeProduct' };

    wrapper.vm.$data.itemQuantity = 666;
    wrapper.vm.addToCart(product);

    expect(wrapper.vm.$store.getters.cart.length === 1).toBeTruthy();
    expect(wrapper.vm.$store.getters.cart[0].quantity === 666).toBeTruthy();
  });
});
