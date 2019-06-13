import Vuex from 'vuex';
import { shallowMount, mount, config } from '@vue/test-utils';
import Modal from './Modal';
import store from '../store/store';

config.mocks.$store = new Vuex.Store(store);

describe('Modal', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Modal);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('when event "open-modal" is emitted then openModal should be called ', () => {
    const wrapper = mount(Modal, { sync: false });
    const mockFunction = jest.fn(data => data);
    wrapper.vm.fetchModalData = mockFunction;

    wrapper.vm.$root.$emit('open-modal', 666);

    expect(mockFunction.mock.calls.length).toBe(1);
    expect(mockFunction.mock.calls[0][0]).toBe(666);
  });


  test('addToCart changes store', () => {
    const wrapper = mount(Modal);

    const product = { id: 1, quantity: 55, name: 'SomeProduct' };

    wrapper.vm.$data.itemQuantity = 666;
    wrapper.vm.addToCart(product);

    expect(wrapper.vm.$store.getters.cart.length === 1).toBeTruthy();
    expect(wrapper.vm.$store.getters.cart[0].quantity === 666).toBeTruthy();
  });
});
