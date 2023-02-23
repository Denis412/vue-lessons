<template>
  <div class="v-cart">
    <h2>Корзина</h2>
    <div v-if="productsInCartCount" class="v-cart__main-content-wrapper">
      <VCartItem
        v-for="product in addedInCartProducts"
        :key="product.article"
        :product_data="product"
      />
    </div>
    <div v-else>Корзина пуста</div>
  </div>
</template>

<script>
import VCartItem from "@/components/v-cart-item.vue";
import { mapGetters } from "vuex";

export default {
  name: "v-cart",
  components: { VCartItem },
  computed: mapGetters(["productsInCartCount", "addedInCartProducts"]),
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
    justify-content: center;
  }
}
</style>
