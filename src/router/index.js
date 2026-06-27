import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/homePage.vue'
import InitPage from '@/views/initPage.vue'
import ServicePage from '@/views/ServicePage.vue'
import { services } from '@/services/config.js'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/registrosPage',
    name: 'registrosPage',
    component: ServicePage,
    props: { service: services.registrosPage }
  },
  {
    path: '/tarotPage',
    name: 'tarotPage',
    component: ServicePage,
    props: { service: services.tarotPage }
  },
  {
    path: '/limpiezaPage',
    name: 'limpiezaPage',
    component: ServicePage,
    props: { service: services.limpiezaPage }
  },
  {
    path: '/reikiPage',
    name: 'reikiPage',
    component: ServicePage,
    props: { service: services.reikiPage }
  },
  {
    path: '/initPage',
    name: 'initPage',
    component: InitPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: homePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
