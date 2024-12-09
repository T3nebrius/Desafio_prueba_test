// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ParentView from '@/views/ParentView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/parent', name: 'Parent', component: ParentView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
