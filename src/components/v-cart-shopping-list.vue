<template>
  <section class="v-cart-shopping-list-wrapper">
    <div v-if="productsInCartCount">
      <VCartItem
        v-for="product in allProductsInTheCart"
        :key="product.article"
        :product_group="product"
      />
    </div>
  </section>
</template>

<script>
import VCartItem from "@/components/v-cart-item.vue";
import { mapGetters } from "vuex";

export default {
  components: { VCartItem },
  computed: mapGetters(["productsInCartCount", "allProductsInTheCart"]),
};
</script>

<style>
.v-cart-shopping-list-wrapper {
  flex-grow: 2;
  margin-right: 3rem;
}
</style>
