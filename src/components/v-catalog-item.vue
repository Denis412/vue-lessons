<template>
  <div class="v-catalog-item">
    <div class="v-catalog-item__header">
      <img
        class="v-catalog-item__image"
        :src="require('../assets/images/' + product_data.image)"
        alt="picture"
      />
      <h3 class="v-catalog-item__name">{{ product_data.name }}</h3>
    </div>
    <div class="v-catalog-item__about-wrapper">
      <h4>Product information</h4>
      <p>{{ product_data.about }}</p>
    </div>
    <div class="v-catalog-item__footer">
      <p class="v-catalog-item__price">Price: {{ product_data.price }}</p>
      <button
        class="v-catalog-item__add-to-cart_btn"
        @click="addProductInCart(product_data)"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: mapMutations(["addProductInCart"]),
};
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  min-width: 30rem;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 8px 0 gray;
  border-radius: 6px;
  background: #ffffff;

  &__header {
    align-items: center;

    & img {
      margin-right: 2rem;
    }
  }

  &__about-wrapper {
    text-align: start;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    & p:last-child {
      margin-top: 0;
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__add-to-cart_btn {
    color: white;
    padding: 0.25rem 1rem;
    border: 1px solid white;
    border-radius: 6px;
    background: #1d1df5;
    cursor: pointer;
  }
}
</style>
