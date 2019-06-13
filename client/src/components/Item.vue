<template>
    <div v-if="product && product.id" @click="showModal" class="bg-white shadow-md hover:shadow-lg overflow-hidden w-10/12 sm:my-8 sm:mx-2 md:my-2 md:mx-2 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/5 xl:my-4 xl:mx-2 xl:w-1/5 mb-4">
    <img class="sm:w-full md:w-full lg:w-full xl:w-full p-4 h-auto" :src="image" :alt="name">
    <div class="px-6 py-4 h-32">
        <div class="font-bold text-xl mb-2"> {{ name }}</div>
        <p class="text-gray-700 text-base">
        Product id: {{ id }}
        </p>
    </div>
<form class="w-full max-w-sm px-6">
  <div class="flex items-center py-2" @click.stop="">
    <i class="fas fa-minus-circle mr-2" @click="decreaseQuantity"></i>
    <input v-model.number="itemQuantity" class="appearance-none bg-transparent border-none w-4 text-gray-700 py-1 leading-tight focus:outline-none" type="number" min="1" placeholder="Quantity" aria-label="quantity">
    <i class="fas fa-plus-circle ml-2 mr-3" @click="increaseQuantity"></i>
    <button class="flex-shrink-0 xl:ml-8 md:ml-8 sm:ml-20 lg:ml-1 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" @click.stop="addToCart(product)" :product="product" :id="product.id">
      add to cart
    </button>
  </div>
</form>
    </div>
</template>

<script>
export default {
  name: 'item',
  props: ['product', 'image', 'name', 'id'],
  data() {
    return {
      itemQuantity: 1,
    };
  },
  methods: {
    decreaseQuantity() {
      if (this.itemQuantity < 1) { return; }

      this.itemQuantity = this.itemQuantity - 1;
    },
    increaseQuantity() {
      this.itemQuantity = this.itemQuantity + 1;
    },
    showModal() {
      this.$root.$emit('open-modal', this.id);
    },
    addToCart(product) {
      const productToStore = Object.assign({}, product);
      productToStore.quantity = this.itemQuantity;
      this.$store.dispatch('addToCart', productToStore);
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
}

</style>
