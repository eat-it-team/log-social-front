import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Login from "./views/LoginEsia.vue";
import Map from "./views/Map.vue";
import Push from "./views/Push.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
  },
  {
    path: "/push",
    name: "Push",
    component: Push,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
