<template>
  <main class="v-catalog flex-container flex-container-column">
    <section class="v-catalog-main-wrapper">
      <h2>Каталог товаров</h2>
      <div
        class="v-catalog-wrapper-items flex-container-justify-center flex-container-justify-between flex-container flex-container-align-c"
      >
        <VCatalogItem
          v-for="product in allProducts"
          :key="product.article"
          :product_data="product"
        />
      </div>
    </section>

    <Teleport to="body">
      <VModalWindow>
        <template v-slot:header>
          <h3>{{ error.name }}</h3>
        </template>

        <template v-slot:main>
          <p>{{ error.message }}</p>
        </template>

        <template v-slot:footer>
          <button
            @click="repeatedRequest"
            class="button-active red-button-error"
          >
            Попробовать снова
          </button>
        </template>
      </VModalWindow>
    </Teleport>
  </main>
</template>

<script>
import VCatalogItem from "@/components/v-catalog-item.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import VModalWindow from "@/components/v-modal-window.vue";

export default {
  name: "v-catalog",
  components: { VModalWindow, VCatalogItem },
  setup() {
    const store = useStore();

    const repeatedRequest = () => {
      store.dispatch("fetchProducts");
    };

    onMounted(() => store.dispatch("fetchProducts"));

    return {
      repeatedRequest,
      allProducts: computed(() => store.getters.allProducts),
      error: computed(() => store.getters.error),
    };
  },
};
</script>

<style lang="scss">
.colored-text {
  color: orangered;
}

.v-catalog {
  &-main-wrapper {
    margin: 0 2rem;
  }

  &-wrapper-items {
    flex-wrap: wrap;
  }
}
</style>
