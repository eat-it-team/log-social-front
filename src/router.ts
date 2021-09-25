import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Login from "./views/LoginEsia.vue";
import Map from "./views/Map.vue";
import Push from "./views/Push.vue"
import Settings from "./views/Settings.vue"
import Registry from "./views/Registry.vue"

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
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/registry",
    name: "Registry",
    component: Registry,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
