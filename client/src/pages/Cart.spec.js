import Vuex from 'vuex';
import { mount, config } from '@vue/test-utils';
import Cart from './Cart';
import store from '../store/store';

config.mocks.$store = new Vuex.Store(store);

describe('Cart', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Cart);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('addToCart changes store', () => {
    const wrapper = mount(Cart);

    const product = {
      id: '774945',
      general: {
        presentable_id: '774945',
        name: 'Blekk BROTHER LC1280XLM rød',
        description: 'text',
      },
      brand: {
        name: 'Brother Norge AS',
      },
      images: {
        primary: {
          large: 'https://i.imgur.com/ucfnti1.jpg',
        },
      },
    };

    wrapper.vm.$store.dispatch('addToCart', product);

    expect(wrapper.vm.cart[0]).toBe(product);
  });
});
