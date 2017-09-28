import Vue from 'vue'
import App from './App'

import router from './router';

import 'font-awesome/css/font-awesome.min.css';
import 'element-ui/lib/theme-default/index.css';


import AutoForm from './plugins/autoForm';

import tdcForm from './plugins/tdcComponets';
import Vddl from 'vddl';
import VueCodeMirror from 'vue-codemirror';


Vue.use(AutoForm);
Vue.use(tdcForm);


Vue.use(Vddl);
Vue.use(VueCodeMirror);



Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  // render: h => h(App)
  template: '<App/>',
  components: { App }
})
