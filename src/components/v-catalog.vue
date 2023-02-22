<template>
  <!--  <h1>Hello Im Catalog!</h1>-->
  <div class="v-catalog">
    <h2>Каталог товаров</h2>
    <div class="v-catalog-wrapper-items">
      <VCatalogItem
        v-for="product in products"
        :key="product.article"
        :product_data="product"
        @sendDataToParent="sendAddedProduct"
      />
    </div>
  </div>
</template>

<script>
import VCatalogItem from "@/components/v-catalog-item.vue";

export default {
  name: "v-catalog",
  components: { VCatalogItem },
  props: {},
  data() {
    return {
      products: [
        {
          image: "1.png",
          name: "Analyst",
          price: 2100,
          article: "T1",
          available: true,
          category: "it products",
          quantity: 0,
          about: "Hi i'm an Analyst! Nice to meet you!",
        },
        {
          image: "2.png",
          name: "Designer",
          price: 3150,
          article: "T2",
          available: true,
          category: "it products",
          quantity: 0,
          about: "Hey my friend! Nice to meet you!",
        },
        {
          image: "3.png",
          name: "Marketer",
          price: 4200,
          article: "T3",
          available: false,
          category: "it products",
          quantity: 0,
          about: "Hello! How have you been?",
        },
        {
          image: "4.png",
          name: "Developer",
          price: 5300,
          article: "T4",
          available: true,
          category: "it products",
          quantity: 0,
          about: "Nice to meet you! What about Vue?",
        },
        {
          image: "5.png",
          name: "Business Accelerator",
          price: 6500,
          article: "T5",
          available: false,
          category: "it products",
          quantity: 0,
          about: "Hey! We'll solve any problems!",
        },
        {
          image: "6.png",
          name: "Engineer",
          price: 8700,
          article: "T6",
          available: true,
          category: "it products",
          quantity: 0,
          about: "Hi! I've many solutions!",
        },
      ],
    };
  },
  methods: {
    sendAddedProduct(product) {
      this.$emit("product", product);
    },
  },
};
</script>

<style lang="scss">
.v-catalog {
  display: flex;
  flex-direction: column;

  &-wrapper-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
