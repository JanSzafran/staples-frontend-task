import { mount } from '@vue/test-utils';
import FooterComponent from './FooterComponent';

describe('FooterComponent', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FooterComponent);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('contains class "footer"', () => {
    const wrapper = mount(FooterComponent);

    expect(wrapper.classes()).toContain('footer');
  });
});
