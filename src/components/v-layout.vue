<template>
  <section class="v-layout">
    <VHeader>
      <h3 class="colored-text">Мой магазин</h3>
      <router-link :to="{ name: 'cart' }">
        <div class="v-catalog-link">
          <i class="medium material-icons">shopping_cart</i>
          {{ allProductsInCartCount }}
        </div>
      </router-link>
    </VHeader>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </section>
</template>

<script>
import VHeader from "@/components/v-header.vue";
import { mapGetters } from "vuex";

export default {
  components: { VHeader },
  computed: mapGetters(["allProductsInCartCount"]),
};
</script>

<style></style>
