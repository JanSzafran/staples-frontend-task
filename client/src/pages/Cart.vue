<template>
    <div>
        <Modal />
        <div class="title w-full">
            <h2>Welcome to the cart page</h2>
        </div>
        <div class="bg-white shadow-md rounded my-6" v-if="cart.length > 0">
            <table class="text-left w-full border-collapse mt-12">
                <thead>
                    <tr>
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ID</th>
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Quantity</th>
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Actions</th>
                    </tr>
                </thead>
                <tr class="hover:bg-grey-lighter" v-for="(product, index) in cart" :key="`productKey-${index}`">
                    <td class="py-4 px-6 border-b border-grey-light" @click="showModal(product)">{{product.general.name}}</td>
                    <td class="py-4 px-6 border-b border-grey-light">{{product.id}}</td>
                    <td class="py-4 px-6 border-b border-grey-light">
                      <i class="fas fa-minus-circle mr-2" @click="decreaseQuantity(product)"></i>
                      <input type="number" min="1" class="w-6" v-model.number="product.quantity" />
                      <i class="fas fa-plus-circle ml-2" @click="increaseQuantity(product)"></i>
                    </td>
                    <td class="py-4 px-6 border-b border-grey-light">
                        <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-2 rounded" @click.prevent="removeFromCart(product)">
                            Remove from cart
                        </button>
                    </td>
                </tr>
            </table>
        </div>
        <FooterComponent />
    </div>
</template>


<script>
import Modal from '../components/Modal';
import FooterComponent from '../components/FooterComponent';

export default {

  name: 'cart',
  props: ['id'],
  components: {
    Modal,
    FooterComponent,
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
  },
  methods: {
    decreaseQuantity(product) {
      if (this.product.quantity < 1) { return; }

      this.$store.dispatch('decreaseQuantity', product);
    },
    increaseQuantity(product) {
      this.$store.dispatch('increaseQuantity', product);
    },
    removeFromCart(product) {
      this.$store.dispatch('removeFromCart', product);
    },
    showModal(product) {
      this.$root.$emit('open-modal', product.id);
    },
  },
};
</script>

<style scoped>
  i {
    color:#38b2ac;
    cursor: pointer;
  }

  input {
    text-align: center;
  }


input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
  text-align: center;
}

</style>
