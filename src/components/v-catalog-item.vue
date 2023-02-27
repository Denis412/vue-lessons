<template>
  <div class="v-catalog-item black-container">
    <div
      class="v-catalog-item__header flex-container flex-container-column flex-container-align-c"
    >
      <img
        class="v-catalog-item__image"
        :src="require('@/assets/images/' + product_data.image)"
        alt="picture"
      />
      <router-link
        :to="{ name: 'productPage', params: { article: product_data.article } }"
        class="white-color-text"
      >
        <h3 class="v-catalog-item__name">{{ product_data.name }}</h3>
      </router-link>
    </div>
    <div
      class="v-catalog-item__about-wrapper flex-container-column flex-container"
    >
      <h5>Информация о товаре:</h5>
      <p>{{ product_data.about }}</p>
    </div>
    <div class="v-catalog-item__footer flex-container-column flex-container">
      <p class="v-catalog-item__price">Цена: {{ product_data.price }} ₽</p>
      <button
        class="v-catalog-item__add-to-cart_btn button-active"
        @click="handlePushInTheCart"
      >
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

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
  setup(props) {
    const store = useStore();

    const handlePushInTheCart = () =>
      store.commit("pushProductInTheCart", props.product_data);

    return {
      handlePushInTheCart,
    };
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  min-width: 30rem;
  padding: 20px;
  margin: 20px 1rem;

  &__header {
    & img {
      margin-right: 2rem;
    }
  }

  &__about-wrapper {
    text-align: start;
    flex-wrap: wrap;

    & p:last-child {
      margin-top: 0;
    }
  }

  &__footer {
    align-items: flex-end;
  }

  &__add-to-cart_btn {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
  }
}
</style>
