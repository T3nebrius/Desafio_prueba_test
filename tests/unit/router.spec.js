import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

describe('Vue Router', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', name: 'Home', component: HomeView },
      { path: '/about', name: 'About', component: AboutView },
    ],
  });

  test('Debe existir el componente HomeView', () => {
   
    const homeRoute = router.getRoutes().find((route) => route.name === 'Home');
    expect(homeRoute).toBeDefined();
    expect(homeRoute.components.default).toBe(HomeView); 
  });

  test('Debe existir el componente AboutView', () => {
    const aboutRoute = router.getRoutes().find((route) => route.name === 'About');
    expect(aboutRoute).toBeDefined();
    expect(aboutRoute.components.default).toBe(AboutView); 
  });
  
});
