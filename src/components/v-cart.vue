<template>
  <div class="v-cart">
    <VCartItem
      v-for="product in products"
      :key="product.article"
      :product_data="product"
    />
  </div>
</template>

<script>
import VCartItem from "@/components/v-cart-item.vue";

export default {
  name: "v-cart",
  components: { VCartItem },
  props: {
    products: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.v-cart {
  display: flex;
  flex-direction: column;
}
</style>
