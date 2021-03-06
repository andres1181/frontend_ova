import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import * as axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios);

import './css/main.css'

axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
