<template>
  <div class="v-cart-item">
    <div class="v-cart-item__header">
      <img
        class="v-catalog-item__image"
        :src="require('../assets/images/' + product_data.image)"
        alt="picture"
      />
      <h3>{{ product_data.name }}</h3>
    </div>
    <div class="v-cart-item__main">
      <h4>Product information</h4>
      <p>{{ product_data.about }}</p>
    </div>
    <div class="v-cart-item__footer">
      <p>Price {{ product_data.price }}</p>
      <button class="v-cart-item__btn">Pay</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 grey;
  padding: 20px;
  margin: 20px;
  background: #ffffff;
  border-radius: 6px;

  &__btn {
    color: white;
    padding: 0.25rem 1rem;
    border: 1px solid white;
    border-radius: 6px;
    background: #1d1df5;
    cursor: pointer;
  }
}
</style>
