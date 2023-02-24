<template>
  <div class="v-cart flex-container flex-container-column">
    <VHeader>
      <router-link :to="{ name: 'catalog' }">
        <div class="white-color-text flex-container flex-container-align-c">
          <i class="small material-icons">arrow_back</i>
          <p>Вернуться к покупкам</p>
        </div>
      </router-link>
    </VHeader>

    <main class="v-cart__content-wrapper">
      <h2>Корзина</h2>
      <div v-if="productsInCartCount" class="flex-container">
        <VCartShoppingList />
        <VCartPriceBoard />
      </div>
      <div v-else>Корзина пуста</div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VCartPriceBoard from "@/components/v-cart-price-board.vue";
import VCartShoppingList from "@/components/v-cart-shopping-list.vue";
import VHeader from "@/components/v-header.vue";

export default {
  name: "v-cart",
  components: { VHeader, VCartShoppingList, VCartPriceBoard },
  computed: mapGetters(["productsInCartCount", "allProductsInCartCount"]),
};
</script>

<style lang="scss">
.v-cart {
  width: 100%;

  &__content-wrapper {
    padding: 0 2rem;
  }
}
</style>
