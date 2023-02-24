<template>
  <div class="v-catalog">
    <header class="header">
      <h3>Мой магазин</h3>
      <router-link :to="{ name: 'cart', params: { addedInCartProducts } }">
        <div class="v-catalog__link-to-cart">
          <i class="medium material-icons">shopping_cart</i>
          {{ allProductsInCartCount }}
        </div>
      </router-link>
    </header>
    <main class="v-catalog__content-wrapper">
      <h2>Каталог товаров</h2>
      <div class="v-catalog-wrapper-items">
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
    "addedInCartProducts",
  ]),
  methods: mapActions(["fetchProducts"]),
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5rem;
  padding: 0 2rem;
  background: #ffffff;

  & p {
    font-size: 1rem;
    margin-left: 1rem;
  }
}

.v-catalog {
  display: flex;
  flex-direction: column;

  &__content-wrapper {
    margin: 0 2rem;
  }

  &__link-to-cart {
    color: black;
    padding: 1rem;
  }

  &-wrapper-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
