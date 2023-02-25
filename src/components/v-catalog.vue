<template>
  <main class="v-catalog flex-container flex-container-column">
    <section class="v-catalog-main-wrapper">
      <h2>Каталог товаров</h2>
      <div
        class="v-catalog-wrapper-items flex-container-justify-between flex-container flex-container-align-c"
      >
        <VCatalogItem
          v-for="product in allProducts"
          :key="product.article"
          :product_data="product"
        />
      </div>
    </section>
  </main>
</template>

<script>
import VCatalogItem from "@/components/v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: { VCatalogItem },
  mounted() {
    this.fetchProducts();
  },
  computed: mapGetters([
    "allProducts",
    "productsInCartCount",
    "allProductsInCartCount",
  ]),
  methods: mapActions(["fetchProducts"]),
};
</script>

<style lang="scss">
.colored-text {
  color: orangered;
}

.v-catalog {
  &-main-wrapper {
    margin: 0 2rem;
  }

  &-link {
    color: white;
    padding: 1rem;
  }

  &-wrapper-items {
    flex-wrap: wrap;
  }
}
</style>
