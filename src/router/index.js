import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Jobs from '../views/Jobs.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
