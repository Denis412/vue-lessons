<template>
  <section class="v-cart-price-board-wrapper black-container">
    <h4>Детали заказа</h4>
    <div
      class="v-cart-price-board-content flex-container flex-container-column"
    >
      <div class="flex-container flex-container-justify-between">
        <p>Кол-во товаров: {{ allProductsInCartCount }}</p>
        <p>{{ allProductsInCartCountPrice }} ₽</p>
      </div>
      <div class="flex-container flex-container-justify-between">
        <h4>ИТОГО</h4>
        <h4>{{ allProductsInCartCountPrice }} ₽</h4>
      </div>
      <button class="v-cart-price-board-btn button-active">
        Перейти к оформлению
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters([
    "allProductsInCartCount",
    "allProductsInCartCountPrice",
  ]),
};
</script>

<style lang="scss">
.v-cart-price-board-wrapper {
  height: max-content;
  flex-grow: 2;
  padding: 2rem;
}

.v-cart-price-board-content {
  width: 100%;
  height: max-content;
}

.v-cart-price-board-btn {
  font-size: 1.5rem;
  min-height: 4rem;
}
</style>
