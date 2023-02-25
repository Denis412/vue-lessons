<template>
  <section class="v-layout">
    <VHeader>
      <router-link :to="{ path: '/' }">
        <h3 class="colored-text link-default-orangered">Мой магазин</h3>
      </router-link>
      <router-link :to="{ name: 'cart' }">
        <div class="link-default">
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
