<template>
  <main class="flex-container">
    <div class="v-product-page-left">
      <h2>{{ product }}</h2>
    </div>
    <div class="v-product-page-right"></div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      product: {
        type: Object,
        default() {
          return {};
        },
      },
    };
  },
  mounted() {
    this.product = this.allProducts.find(
      (p) => p.article === this.$route.params.article
    );
  },
  computed: mapGetters(["allProducts"]),
};
</script>

<style></style>
