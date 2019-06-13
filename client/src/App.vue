<template>
  <div id="app">
    <div class="nav bg-white shadow">
        <ul class="flex justify-between">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/cart">
            <i class="fas fa-shopping-cart"></i>
              ({{totalQuantity}})
            </router-link>
          </li>
        </ul>
      </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    totalQuantity() {
      return this.$store.getters && this.$store.getters.totalQuantity;
    },
  },
};

</script>

<style>
  html,
  body {
    height: 100vh;
  }

  #app {
    width: 100%;
    height: 100%;
  }
</style>
