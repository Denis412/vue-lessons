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
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "v-cart-shopping-list",
  components: { VCartItem },
  setup() {
    const store = useStore();

    return {
      productsInCartCount: computed(() => store.getters.allProductsInCartCount),
      allProductsInTheCart: computed(() => store.getters.allProductsInTheCart),
    };
  },
};
</script>

<style>
.v-cart-shopping-list-wrapper {
  max-width: 80rem;
  flex-grow: 3;
  margin-right: 3rem;
}
</style>
