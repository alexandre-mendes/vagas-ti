import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueApexCharts from 'vue-apexcharts';
import { BootstrapVue } from 'bootstrap-vue';
import './styles/global.scss';

Vue.component('apexchart', VueApexCharts);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
