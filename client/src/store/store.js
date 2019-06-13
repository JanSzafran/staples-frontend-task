import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = {
  plugins: [createPersistedState()],
  state: {
    cart: [],
    totalQuantity: 0,
  },
  mutations: {
    setProductInCart(state, product) {
      state.cart.push(product);
    },
    removeLastProductInCart(state, product) {
      const index = state.cart.indexOf(product);
      state.cart.splice(index, 1);
    },
    setTotalQuantity(state, totalQuantity) {
      state.totalQuantity = totalQuantity;
    },
  },
  getters: {
    cart: state => state.cart,
    totalQuantity: state => state.totalQuantity,
  },
  actions: {
    decreaseQuantity({ dispatch, getters }, product) {
      if (product.quantity < 1) { return; }

      const found = getters.cart.find(element => element.id === product.id);
      found.quantity -= 1;
      dispatch('changeProductQuantityInCart');
    },
    increaseQuantity({ dispatch, getters }, product) {
      if (product.quantity < 1) { return; }

      const found = getters.cart.find(element => element.id === product.id);
      found.quantity += 1;
      dispatch('changeProductQuantityInCart');
    },
    addToCart({ commit, getters, dispatch }, product) {
      if (product.quantity < 1) { return; }

      const found = getters.cart.find(element => element.id === product.id);
      if (found) {
        found.quantity += product.quantity;
      } else {
        commit('setProductInCart', product);
      }

      dispatch('changeProductQuantityInCart');
    },
    removeFromCart({ commit, dispatch }, product) {
      commit('removeLastProductInCart', product);

      dispatch('changeProductQuantityInCart');
    },
    changeProductQuantityInCart({ commit, getters }) {
      let totalAmount = 0;
      getters.cart.forEach((_product) => { totalAmount += _product.quantity; });
      commit('setTotalQuantity', totalAmount);
    },
  },
};

export default store;
