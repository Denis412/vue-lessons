import { createRouter, createWebHistory } from "vue-router";
import VLayout from "@/components/v-layout.vue";

const VCart = () => import("@/components/v-cart.vue");
const VCatalog = () => import("@/components/v-catalog.vue");
const VProductPage = () => import("@/components/v-product-page.vue");

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
