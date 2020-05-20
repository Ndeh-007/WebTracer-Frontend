/**
 * Th is responsible to initialise our APP into an element(#root) in entry file(index.html).
 * Any third party components such should be declared here
 */

import Vue from 'vue';
import App from './app.vue'
import router from './config/router'
import InitSw from './config/InitSW';
require('semantic-ui-css/semantic.css');
InitSw.startRegistration();
Vue.config.productionTip = false
Vue.prototype.$nav = nav // global nav provides option to filter routes to be outputted
  new Vue({
      render: h=>h(App),
      router,
  }).$mount("#root")
