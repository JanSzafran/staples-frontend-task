import Vuex from 'vuex';
import { mount, config, RouterLinkStub } from '@vue/test-utils';
import App from './App';
import store from './store/store';

config.mocks.$store = new Vuex.Store(store);

describe('App', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(App, { stubs: ['router-link', 'router-view'] });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('total quantity is displayed', () => {
    const product = {
      id: 1,
      quantity: 55,
    };
    const wrapper = mount(App, { stubs: ['router-link', 'router-view'] });
    wrapper.vm.$store.dispatch('addToCart', product);

    expect(wrapper.html().includes(product.quantity)).toBeTruthy();
  });

  test('link to cart shoud be visible', () => {
    const wrapper = mount(App, { stubs: { RouterLink: RouterLinkStub, 'router-view': '<div/>' } });

    expect(wrapper.findAll(RouterLinkStub).at(0).props().to).toBe('/');
    expect(wrapper.findAll(RouterLinkStub).at(1).props().to).toBe('/cart');
  });
});
