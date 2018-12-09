import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.scss'
import './assets/js/flexible'
import MessageBox from 'vue-msgbox'
import {fetch,post} from './assets/js/request';
import {Picker} from 'mint-ui';

Vue.config.productionTip = false
Vue.prototype.$fetch = fetch;
Vue.prototype.$post = post;
Vue.component(Picker.name, Picker);
// Vue.prototype.$MessageBox = MessageBox;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
