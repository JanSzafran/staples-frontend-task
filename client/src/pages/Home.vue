<template>
    <div class="flex flex-wrap justify-center bg-gray-100">
        <Modal />
        <div class="title w-full mt-12 mb-4 flex flex-col flex-wrap justify-center pb-6 bg-white pt-8">
            <h2 class="flex self-center">{{msg}}</h2>
            <div class="searchBox flex self-center w-1/2 my-4">
              <input v-model="keywords" class="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="search by name" />
            </div>
        </div>
        <div class="container w-full">
            <div class="flex justify-around flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1">
                <Item
                    v-for="(item, index) in products" :key="`apiKey-${index}`"
                    :product="item"
                    :id="item.id"
                    :name="item.general.name"
                    :image="item.images.primary.large"
                />
            </div>
        </div>
        <PaginationComponent :page-counter="pageCounter" @load-next-page="pageChange" @load-previous-page="previousPageChange"/>
        <FooterComponent />
    </div>
</template>

<script>
import Item from '../components/Item';
import PaginationComponent from '../components/PaginationComponent';
import FooterComponent from '../components/FooterComponent';
import Modal from '../components/Modal';

export default {
  name: 'home',
  data() {
    return {
      products: [],
      msg: 'Available products:',
      pageCounter: 1,
      keywords: '',
    };
  },
  components: {
    Item,
    PaginationComponent,
    FooterComponent,
    Modal,
  },
  watch: {
    keywords() {
      this.pageCounter = 1;
      this.fetchData();
    },
  },
  methods: {
    fetchData() {
      const baseUrl = `http://localhost:3005/products?_page=${this.pageCounter}&_limit=20/&q=${this.keywords}`;
      this.$http.get(baseUrl)
        .then((result) => {
          this.products = result.data;
        });
    },
    pageChange(nextPageCounter) {
      this.pageCounter = nextPageCounter;
      this.fetchData();
    },
    previousPageChange(previousPageCounter) {
      this.pageCounter = previousPageCounter;
      this.fetchData();
    },

  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
  input {
    text-align: center;
  }
</style>
