<template>
  <div class="v-main-wrapper">
    <VCart />
    <VCatalog />
  </div>
</template>

<script>
import VCatalog from "@/components/v-catalog.vue";
import VCart from "@/components/v-cart.vue";

export default {
  name: "v-main-wrapper",
  components: { VCart, VCatalog },
  data() {
    return {
      title: "My store",
    };
  },
};
</script>

<style lang="scss">
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
