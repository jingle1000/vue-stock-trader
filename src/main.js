import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'

require('reset-css/sass/reset.css')
require('bootstrap/dist/css/bootstrap.min.css');
require('jquery')
require('bootstrap/js/src/dropdown');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
