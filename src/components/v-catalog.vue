<template>
  <div class="v-catalog flex-container flex-container-column">
    <VHeader>
      <h3 class="colored-text">Мой магазин</h3>
      <router-link :to="{ name: 'cart' }">
        <div class="v-catalog__link-to-cart">
          <i class="medium material-icons">shopping_cart</i>
          {{ allProductsInCartCount }}
        </div>
      </router-link>
    </VHeader>

    <main class="v-catalog__content-wrapper">
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
    </main>
  </div>
</template>

<script>
import VCatalogItem from "@/components/v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";
import VHeader from "@/components/v-header.vue";

export default {
  name: "v-catalog",
  components: { VHeader, VCatalogItem },
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
.header {
  min-height: 5rem;
  padding: 0 2rem;
  background: #171717;

  & p {
    font-size: 1rem;
    margin-left: 1rem;
  }
}

.colored-text {
  color: orangered;
}

.v-catalog {
  &__content-wrapper {
    margin: 0 2rem;
  }

  &__link-to-cart {
    color: white;
    padding: 1rem;
  }

  &-wrapper-items {
    flex-wrap: wrap;
  }
}
</style>
