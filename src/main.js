import Vue from 'vue';
import App from './App.vue';
import router from './router';

require('reset-css/sass/reset.css')
require('bootstrap/dist/css/bootstrap.min.css');

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
