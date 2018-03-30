import Vue from 'vue';
import App from './App';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './store'

import AutoForm from 'autoform/index.js';
// import AutoForm from '@hfe/autoform'; import AutoForm_component_lib from
// '../autoform_component_lib/index';
import AutoForm_component_lib from '@hfe/autoform_component_lib';

import router from './router'
import Hello from './components/cHello.vue';

import AutoForm_Editor from '../autoform_editor/index';

Vue.use(ElementUI);
Vue.use(AutoForm);

Vue.use(AutoForm_component_lib);

Vue.use(AutoForm_Editor, {store})

// Vue.$autoform.RegisterDir(()=>require.context('./components'))
Vue
    .$autoform
    .Register(Vue, [Hello], {prefix: "c"})

Vue.config.productionTip = false;

new Vue({el: '#app', router, store, template: '<App/>', components: {
        App
    }});
