<template>
  <main class="v-cart flex-container flex-container-column">
    <VHeader>
      <router-link :to="{ path: '/' }">
        <div class="white-color-text flex-container flex-container-align-c">
          <i class="small material-icons">arrow_back</i>
          <p>Вернуться к покупкам</p>
        </div>
      </router-link>
    </VHeader>

    <section class="v-cart__content-wrapper">
      <h2>Корзина</h2>
      <div
        v-if="productsInCartCount"
        class="flex-container flex-container-justify-between"
      >
        <VCartShoppingList />
        <VCartPriceBoard />
      </div>
      <div v-else>Корзина пуста</div>
    </section>
  </main>
</template>

<script>
import { useStore } from "vuex";
import VCartPriceBoard from "@/components/v-cart-price-board.vue";
import VCartShoppingList from "@/components/v-cart-shopping-list.vue";
import VHeader from "@/components/v-header.vue";
import { computed } from "vue";

export default {
  name: "v-cart",
  components: { VHeader, VCartShoppingList, VCartPriceBoard },
  setup() {
    const store = useStore();

    return {
      productsInCartCount: computed(() => store.getters.productsInCartCount),
      allProductsInCartCount: computed(
        () => store.getters.allProductsInCartCount
      ),
    };
  },
};
</script>

<style lang="scss">
.v-cart {
  width: 100%;
  max-width: 3000px;

  &__content-wrapper {
    padding: 0 2rem;
  }
}
</style>
