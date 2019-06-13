<template>
    <div class="paginationContainer w-full mt-12">
        <div class="arrowsContainer">
                <i class="fas fa-arrow-circle-left" @click="prevPage"></i>
                <p>. . .</p>
                <i class="fas fa-arrow-circle-right" @click="nextPage"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: ['pageCounter'],
  methods: {
    prevPage() {
      if (this.pageCounter > 1) {
        window.scrollTo(0, 0);
        this.$emit('load-previous-page', this.pageCounter - 1);
      }
    },
    nextPage() {
      window.scrollTo(0, 0);
      this.$emit('load-next-page', this.pageCounter + 1);
    },
  },
};
</script>

<style scoped>
    .paginationContainer {
        margin-bottom: 50px;
        font-size: 2rem;
    }

    .arrowsContainer {
        display: flex;
        justify-content: center;
        color: #319795;
        cursor: pointer;
    }
</style>
