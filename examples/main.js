import Vue from 'vue';
import App from './App';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import AutoForm from 'autoform/dist/lib';

import AutoForm_component_lib from 'autoform_component_lib';

import router from './router'


Vue.use(ElementUI);
Vue.use(AutoForm);

Vue.use(AutoForm_component_lib);



Vue.$autoform.RegisterDir(()=>require.context('./components'))

Vue.config.productionTip = false;


new Vue({
    el: '#app',
    router,
    // store,
    template: '<App/>',
    components: { App }
});









