<template>
  <div
    class="v-cart-item flex-container flex-container-align-c flex-container-justify-between black-container"
  >
    <div class="flex-container flex-container-align-c">
      <img
        :src="require('../assets/images/' + product_group[0].image)"
        alt="picture"
      />
      <h3>{{ product_group[0].name }}</h3>
    </div>
    <div class="flex-container flex-container-align-c">
      <div
        class="v-cart-item__btns-wrapper flex-container flex-container-column flex-container-align-c"
      >
        <div
          class="v-cart-item__counters-btns flex-container flex-container-align-c"
        >
          <button
            class="button-active"
            :disabled="countSpecificProduct === 1"
            @click="deleteProductInCart(product_group[0])"
          >
            -
          </button>
          <p>{{ countSpecificProduct }}</p>
          <button
            class="button-active"
            @click="pushProductInTheCart(product_group[0])"
          >
            +
          </button>
        </div>
        <p
          class="clickable-text"
          @click="deleteAllProductsGroup(product_group)"
        >
          Удалить
        </p>
      </div>
      <p class="v-cart-item__main-text">{{ productPrice }} ₽</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "v-cart-item",
  props: {
    product_group: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    productPrice() {
      return this.product_group[0].price;
    },
    countSpecificProduct() {
      return this.product_group.length;
    },
  },
  methods: mapMutations([
    "deleteProductInCart",
    "pushProductInTheCart",
    "deleteAllProductsGroup",
  ]),
};
</script>

<style lang="scss">
.v-cart-item {
  min-width: 100%;
  padding: 2rem;

  &__btns-wrapper {
    margin-right: 2rem;
  }

  &__counters-btns {
    & p {
      margin: 0 1rem;
    }

    & button {
      width: 2rem;
      height: 2rem;
    }
  }

  &__main-text {
    font-size: 2.4rem;
    font-weight: 500;
  }

  &:not(&:last-child) {
    margin-bottom: 2rem;
  }
}
</style>
