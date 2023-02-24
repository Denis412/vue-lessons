<template>
  <div class="v-cart-item">
    <div class="v-cart-item__left-wrapper">
      <img
        :src="require('../assets/images/' + product_group[0].image)"
        alt="picture"
      />
      <h3>{{ product_group[0].name }}</h3>
    </div>
    <div class="v-cart-item__right-wrapper">
      <div class="v-cart-item__btns-wrapper">
        <div class="v-cart-item__counters-btns">
          <button @click="deleteProductInCart(product_group[0])">-</button>
          <p>{{ countSpecificProduct }}</p>
          <button @click="addProductInCart(product_group[0])">+</button>
        </div>
      </div>
      <p class="v-cart-item__main-text">{{ productPrice }} ₽</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

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
    ...mapGetters(["addedInCartProducts"]),
    productPrice() {
      return this.product_group[0].price;
    },
    countSpecificProduct() {
      return this.product_group.length;
    },
  },
  methods: mapMutations(["deleteProductInCart", "addProductInCart"]),
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background: #ffffff;
  border-radius: 2rem;

  &__left-wrapper {
    display: flex;
    align-items: center;
  }

  &__right-wrapper {
    display: flex;
    align-items: center;
  }

  &__btns-wrapper {
    display: flex;
    flex-direction: column;
  }

  &__counters-btns {
    display: flex;
    align-items: center;
    margin-right: 2rem;

    & p {
      margin: 0 1rem;
    }

    & button {
      width: 2rem;
      height: 2rem;

      border: 1px solid #dfdee2;
      border-radius: 4px;
      background: #ffffff;

      cursor: pointer;
    }
  }

  &__main-text {
    font-size: 2.4rem;
    font-weight: 500;
  }

  &:not(&:last-child) {
    margin-bottom: 2rem;
  }

  &__header {
    display: flex;
    flex-direction: column;
  }

  &__btn {
    color: white;
    padding: 0.25rem 1rem;
    border: 1px solid white;
    border-radius: 6px;
    background: #1d1df5;
    cursor: pointer;

    &-delete {
      background: red;
    }
  }
}
</style>
