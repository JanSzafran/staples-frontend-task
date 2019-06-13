import { mount, config } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Home from './Home';

const sampleProducts = [{
  id: '774945',
  general: {
    presentable_id: '774945',
    name: 'Blekk BROTHER LC1280XLM rød',
    description: '<p><b>Få optimale utskriftsresultater, tydelig tekst og levende grafikk med Brother LC1280XLM-blekkpatronen i magenta.</b></p><p>Denne Brother LC1280XLM-blekkpatronen i magenta med stor kapasitet produserer levende, stilige resultater i utskrifter av høy kvalitet. Blekket er laget for optimal bruk med ulike Brother-maskiner og har flekkbestandig blekk som ikke falmer, for svært holdbare utskrifter. Denne blekkpatronen i magenta har en kapasitet på opptil 1200 sider.</p><li>Farge: Magenta</li><li>Kapasitet: Opptil 1200 A4-sider </li><li>Enkel å installere og skifte ut</li><li>Flekkbestandig og falmer ikke</li><li>Gir tekst og bilder med utmerket kvalitet</li><li>Se kompatibilitetsoversikten for passende maskiner</li>',
  },
  brand: {
    name: 'Brother Norge AS',
  },
  images: {
    primary: {
      large: 'https://i.imgur.com/ucfnti1.jpg',
    },
  },
}];

config.mocks.$http = {
  get: jest.fn(() => Promise.resolve({ data: sampleProducts })),
};

describe('Home', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('after mount data is fetched', async () => {
    const wrapper = mount(Home);

    await flushPromises();
    expect(wrapper.vm.$data.products).toBe(sampleProducts);
  });
});
