import { createRouter, createWebHistory } from "vue-router";
import VCart from "@/components/v-cart.vue";

const routes = [{ path: "/cart", component: VCart }];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
