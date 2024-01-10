import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/event",
    name: "event",
    component: () => import("./components/Event")
  },
  {
    path: "/event/:id",
    name: "event", 
    component: () => import("./components/Details")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;