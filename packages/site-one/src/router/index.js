import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/List.vue"),
  },
  {
    path: "/filter",
    name: "Filter",
    component: () => import("../views/Filter.vue"),
  },
];
console.log(window.__MICRO_APP_BASE_ROUTE__)
const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || '/'),
  routes,
});

export default router;
