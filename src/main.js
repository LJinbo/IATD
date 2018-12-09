import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.scss'
import './assets/js/flexible'
import {fetch,post} from './assets/js/request';
import {Toast} from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.prototype.$fetch = fetch;
Vue.prototype.$post = post;
Vue.prototype.$Toast = Toast;
// Vue.prototype.$MessageBox = MessageBox;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
