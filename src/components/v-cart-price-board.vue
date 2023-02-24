<template>
  <section class="v-cart-price-board-wrapper">
    <h4>Детали заказа</h4>
    <div class="v-cart-price-board-content">
      <div class="v-cart-price-board-content-item">
        <p>Кол-во товаров: {{ allProductsInCartCount }}</p>
        <p>{{ allProductsInCartCountPrice }} ₽</p>
      </div>
      <div class="v-cart-price-board-content-item">
        <h4>ИТОГО</h4>
        <h4>{{ allProductsInCartCountPrice }} ₽</h4>
      </div>
      <button class="v-cart-price-board-btn">Перейти к оформлению</button>
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
  background: #ffffff;
  border-radius: 1rem;
}

.v-cart-price-board-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
}

.v-cart-price-board-content-item {
  display: flex;
  justify-content: space-between;
}

.v-cart-price-board-btn {
  font-size: 1.5rem;
  min-height: 4rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  color: white;
  background: #1d1df5;

  transition: 0.2s;

  &:focus {
    background: #1d1df5;
  }

  &:active {
    transform: scale(0.95);
    background: #6161f8;
  }
}
</style>
