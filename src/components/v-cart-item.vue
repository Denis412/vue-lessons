<template>
  <div class="v-cart-item"></div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {},
  data() {
    return {};
  },
};
</script>

<style>
.v-cart-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 grey;
  padding: 20px;
  margin: 20px;
}
</style>
