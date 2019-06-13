<template>
    <div v-if="isShowed" class="fixed z-50 h-screen w-screen bg-smoke-light flex justify-center items-center">
        <div class="sm:h-1/2 w-10/12 md:w-1/2 bg-white rounded w-1/2 hover:shadow-md duration-4">
        <div class="flex flex-row justify-between content-center border-b p-2">
          <div class="flex flex-row justify-center ml-4 content-center items-center">
            <p class="text-sm mr-4 font-semibold text-teal-700">{{ item.brand.name }}<p>
            <p class="text-xs">{{ item.id }}</p>
          </div>
            <div @click="closeModal" class="cursor-pointer text-grey-dark hover:text-blue duration-4 text-lg"><i class="far fa-times-circle"></i></div>
        </div>
        <div class="p-6 text-grey-darker text-justify flex flex-col ">
          <div class="w-full flex justify-center rounded mb-6 border-b">
              <img :src="item.images.primary.large" :alt="item.general.name" class="w-64 flex self-center rounded mb-6">
          </div>
            <p class="uppercase mb-2 text-blue-darker font-bold text-2xl">{{ item.general.name }}</p>
            <p class="font-bold text-sm uppercase mb-2 text-blue-darker"></p>
            <span class="text-grey-darker text-xs" v-html="item.general.description">.
            </span>
        </div>
        <form class="w-full px-6 mb-4 flex flex-row justify-center">
          <div class="flex items-center py-2" @click.stop="">
            <i class="fas fa-minus-circle mr-2" @click="decreaseQuantity"></i>
            <input v-model.number="itemQuantity" class="appearance-none bg-transparent border-none w-4 text-gray-700 py-1 leading-tight focus:outline-none" type="number" min="1" placeholder="Quantity" aria-label="quantity">
            <i class="fas fa-plus-circle ml-2 mr-3" @click="increaseQuantity"></i>
            <button class="flex-shrink-0 ml-8 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" @click.stop="addToCart(item)">
              add to cart
            </button>
          </div>
        </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'modal',
  data() {
    return {
      isShowed: false,
      item: {},
      itemQuantity: 1,
    };
  },
  methods: {
    decreaseQuantity() {
      this.itemQuantity = this.itemQuantity - 1;
    },
    increaseQuantity() {
      this.itemQuantity = this.itemQuantity + 1;
    },
    openModal(element) {
      this.fetchModalData(element);
    },
    fetchModalData(element) {
      const modalUrl = `http://localhost:3005/products/${element}`;
      this.$http.get(modalUrl)
        .then((result) => {
          this.item = result.data;
          this.isShowed = true;
        });
    },
    closeModal() {
      this.isShowed = false;
    },
    addToCart(product) {
      const productToStore = Object.assign({}, product);
      productToStore.quantity = this.itemQuantity;
      this.$store.dispatch('addToCart', productToStore);
    },
  },
  created() {
    this.$root.$on('open-modal', this.openModal);
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
