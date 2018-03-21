// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuerouter from 'vue-router';
import goods from './components/goods/goods.vue';

Vue.use(Vuerouter);

Vue.config.productionTip = false;

const routes = [
  {path: '/goods', component: goods}
];

const router = new Vuerouter({
  routes
});
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
