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
      <h2>Корзина {{ allProductsInCartCount }}</h2>
      <div v-if="productsInCartCount" class="v-cart__main-wrapper">
        <section class="v-cart__right-content-wrapper">
          <div v-if="productsInCartCount">
            <VCartItem
              v-for="product in addedInCartProducts"
              :key="product.article"
              :product_group="product"
            />
          </div>
        </section>

        <section class="v-cart__left-content-wrapper">
          <h4>Детали заказа</h4>
          <div class="v-cart__left-content">
            <div class="v-cart__left-content-count-products">
              <p>Кол-во товаров: {{ allProductsInCartCount }}</p>
              <p>{{ allProductsInCartCountPrice }} ₽</p>
            </div>
            <div
              class="v-cart__left-content-count-products v-cart__final-price"
            >
              <h4>ИТОГО</h4>
              <h4>{{ allProductsInCartCountPrice }} ₽</h4>
            </div>
          </div>
        </section>
      </div>
      <div v-else>Корзина пуста</div>
    </main>
  </div>
</template>

<script>
import VCartItem from "@/components/v-cart-item.vue";
import { mapGetters } from "vuex";

export default {
  name: "v-cart",
  components: { VCartItem },
  computed: mapGetters([
    "productsInCartCount",
    "addedInCartProducts",
    "allProductsInCartCount",
    "allProductsInCartCountPrice",
  ]),
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

  &__final-price {
    justify-content: flex-end;
    align-items: flex-end;
    min-height: 100%;
  }

  &__left-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;

    &-count-products {
      display: flex;
      justify-content: space-between;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    color: black;
  }

  &__right-content-wrapper {
    flex-grow: 2;
    margin-right: 3rem;
  }

  &__left-content-wrapper {
    flex-grow: 2;
    padding: 2rem;
    background: #ffffff;
    border-radius: 1rem;
  }

  &__content-wrapper {
    padding: 0 2rem;
  }

  //&__main-content-wrapper {
  //  //display: flex;
  //  //flex-wrap: wrap;
  //  //justify-content: center;
  //}
}
</style>
