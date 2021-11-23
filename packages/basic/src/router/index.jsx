import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/tabClient/list",
    name: "TabClient",
    component: () => import("../views/tabClient.vue"),
  },
  {
    path: "/timeout",
    name: "timeout",
    component: () => import("../views/error/timeout.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/error/404.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
  {
    path: "/site-one/:page*",
    name: "site-one",
    component: () =>
        import("../views/site-one.vue"),
  },
  {
    path: "/site-two/:page*",
    name: "site-two",
    component: () =>
        import("../views/site-two.vue"),
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
