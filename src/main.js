/**
 * Th is responsible to initialise our APP into an element(#root) in entry file(index.html).
 * Any third party components such should be declared here
 */

import Vue from 'vue';
import App from './app.js'

Vue.config.productionTip = false

  new Vue({
      render: h=>h(App),
  }).$mount("#root")
