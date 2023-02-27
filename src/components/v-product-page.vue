<template>
  <main class="flex-container">
    <div class="v-product-page-left">
      <h2>{{ product }}</h2>
    </div>
    <div class="v-product-page-right"></div>
  </main>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "v-product-page",
  setup() {
    const store = useStore();
    const route = useRoute();

    const product = reactive({});

    const allProducts = computed(() => store.getters.allProducts);

    onMounted(() => {
      product.value = allProducts.value.find(
        (p) => p.article === route.params.article
      );
    });

    return {
      product,
      allProducts,
    };
  },
};
</script>

<style></style>
