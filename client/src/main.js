// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { VueSpinners } from '@saeris/vue-spinners';
import App from './App';
import router from './router';
import store from './store/store';
import './assets/styles/tailwind.css';
import './assets/styles/app.css';


Vue.use(VueSpinners);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: new Vuex.Store(store),
  components: { App },
  template: '<App/>',
});
