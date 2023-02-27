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

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </section>
</template>

<script>
import VHeader from "@/components/v-header.vue";
import VCatalog from "@/components/v-catalog.vue";
import VCart from "@/components/v-cart.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "v-layout",
  components: { VHeader, VCatalog, VCart },
  setup() {
    const store = useStore();

    return {
      allProductsInCartCount: computed(
        () => store.getters.allProductsInCartCount
      ),
    };
  },
};
</script>

<style></style>
