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
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "v-layout",
  components: { VHeader },
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
