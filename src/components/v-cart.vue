<template>
  <div class="v-cart">
    <h2>Корзина</h2>
    <div class="v-cart__main-content-wrapper">
      <VCartItem
        v-for="product in products"
        :key="product.article"
        :product_data="product"
      />
    </div>
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

<style lang="scss">
.v-cart {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__main-content-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
