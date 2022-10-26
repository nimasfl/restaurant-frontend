import Vue from "vue";
import VueRouter from "vue-router";
import protectRoutes from "@/router/protectRoutes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginPage"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomePage"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/CartPage"),
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("@/views/OrdersPage"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(protectRoutes);

export default router;
