<template>
  <!--  <h1>Hello Im Catalog!</h1>-->
  <div class="v-catalog">
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
  computed: mapGetters(["allProducts"]),
  methods: mapActions(["fetchProducts"]),
};
</script>

<style lang="scss">
.v-catalog {
  display: flex;
  flex-direction: column;

  &-wrapper-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
