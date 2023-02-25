import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
const VCart = defineAsyncComponent(() => import("@/components/v-cart.vue"));
import VCatalog from "@/components/v-catalog.vue";
import VLayout from "@/components/v-layout.vue";
import VProductPage from "@/components/v-product-page.vue";

const routes = [
  {
    path: "/",
    name: "catalogLayout",
    component: VLayout,
    children: [
      {
        path: "",
        name: "catalog",
        component: VCatalog,
      },
      {
        path: ":article",
        name: "productPage",
        component: VProductPage,
      },
    ],
  },
  {
    path: "/cart",
    name: "cart",
    component: VCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
