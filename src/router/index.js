import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Ranking from '../views/Ranking.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
