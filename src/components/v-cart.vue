<template>
  <div class="v-cart">
    <header class="header">
      <router-link :to="{ name: 'catalog' }">
        <div class="v-cart__link">
          <i class="small material-icons">arrow_back</i>
          <p>Вернуться к покупкам</p>
        </div>
      </router-link>
    </header>

    <main class="v-cart__content-wrapper">
      <h2>Корзина</h2>
      <div v-if="productsInCartCount" class="v-cart__main-wrapper">
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

export default {
  name: "v-cart",
  components: { VCartShoppingList, VCartPriceBoard },
  computed: mapGetters(["productsInCartCount", "allProductsInCartCount"]),
};
</script>

<style lang="scss">
.v-cart {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__main-wrapper {
    display: flex;
  }

  &__link {
    display: flex;
    align-items: center;
    color: white;
  }

  &__content-wrapper {
    padding: 0 2rem;
  }
}
</style>
