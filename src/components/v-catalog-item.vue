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
      <h5>Информация о товаре:</h5>
      <p>{{ product_data.about }}</p>
    </div>
    <div class="v-catalog-item__footer">
      <p class="v-catalog-item__price">Цена: {{ product_data.price }} ₽</p>
      <button
        class="v-catalog-item__add-to-cart_btn"
        @click="pushProductInTheCart(product_data)"
      >
        Добавить в корзину
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
  methods: mapMutations(["pushProductInTheCart"]),
};
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  min-width: 30rem;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 8px 0 orangered;
  border-radius: 6px;
  background: #131313;

  &__header {
    display: flex;
    flex-direction: column;
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
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    background: orangered;
    cursor: pointer;
    transition: 0.2s;

    //#1d1df5

    &:focus {
      background: orangered;
    }

    &:active {
      transform: scale(0.95);
      background: #fc5a1d;
    }
  }
}
</style>
