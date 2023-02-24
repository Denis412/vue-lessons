import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
const VCart = defineAsyncComponent(() => import("@/components/v-cart.vue"));
import VCatalog from "@/components/v-catalog.vue";

const routes = [
  { path: "/", name: "catalog", component: VCatalog },
  { path: "/cart", name: "cart", component: VCart },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
