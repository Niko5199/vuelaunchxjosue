import { createRouter, createWebHashHistory } from 'vue-router';
import Pasteleria from '../views/Pasteleria.vue';

const routes = [
  {
    path: '/',
    name: 'pasteleria',
    component: Pasteleria,
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Pastelero.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
