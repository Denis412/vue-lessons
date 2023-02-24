<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { addedInCartProducts } }">
      <div class="v-catalog__link-to-cart">
        <i class="medium material-icons">shopping_cart</i>
        {{ productsInCartCount }}
      </div>
    </router-link>

    <h2>Каталог товаров</h2>
    <div class="v-catalog-wrapper-items">
      <VCatalogItem
        v-for="product in allProducts"
        :key="product.article"
        :product_data="product"
      />
    </div>
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
    "addedInCartProducts",
  ]),
  methods: mapActions(["fetchProducts"]),
};
</script>

<style lang="scss">
.v-catalog {
  display: flex;
  flex-direction: column;

  &__link-to-cart {
    position: absolute;
    top: 10px;
    right: 1rem;
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
