import { mount } from '@vue/test-utils';
import PaginationComponent from './PaginationComponent';

window.scrollTo = () => {};

describe('PaginationComponent', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PaginationComponent);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('prevPage emits event', () => {
    const wrapper = mount(PaginationComponent, { propsData: { pageCounter: 2 } });

    wrapper.vm.prevPage();

    expect(wrapper.emitted()['load-previous-page']).toBeTruthy();
  });

  test('prevPage not emits event when page counter is 1', () => {
    const wrapper = mount(PaginationComponent, { propsData: { pageCounter: 1 } });

    wrapper.vm.prevPage();

    expect(wrapper.emitted()['load-previous-page']).toBe(undefined);
  });

  test('nextPage emits event', () => {
    const wrapper = mount(PaginationComponent);

    wrapper.vm.nextPage();

    expect(wrapper.emitted()['load-next-page']).toBeTruthy();
  });
});
