import { createRouter, createWebHistory } from 'vue-router';

import Second from '../pages/Second.vue';
import Second2 from '../pages/Second2.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/second', component: Second },
    { path: '/second2', component: Second2 },
  ]
});

export default router;