// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/views/homePage.vue";
import limpiezaPage from "@/views/limpiezaPage.vue";
import registrosPage from "@/views/registrosPage.vue";
import reikiPage from "@/views/reikiPage.vue";
import tarotPage from "@/views/tarotPage.vue";
import InitPage from "@/views/initPage.vue";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: homePage,
  },
  {
    path: "/limpiezaPage",
    name: "limpiezaPage",
    component: limpiezaPage,
  },
  {
    path: "/registrosPage",
    name: "registrosPage",
    component: registrosPage,
  },
  {
    path: "/reikiPage",
    name: "reikiPage",
    component: reikiPage,
  },
  {
    path: "/tarotPage",
    name: "tarotPage",
    component: tarotPage,
  },
  {
    path: "/initPage",
    name: "initPage",
    component: InitPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
