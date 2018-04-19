import Vue from 'vue';
import App from './App';

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-default/index.css';

import store from './store'

// import AutoForm from 'autoform/dist/lib';
import AutoForm from 'autoform/index';
// import AutoForm from '@hfe/autoform';
// import AutoForm_component_lib from
// '../autoform_component_lib/index';
import AutoForm_component_lib from '@hfe/autoform_component_lib';
// import AutoForm_component_lib from 'autoform_component_lib';

import router from './router'
import Hello from './components/cHello.vue';

// import AutoForm_Editor from '../autoform_editor/index';
// import AutoForm_Editor from '    ../autoform_editor/dist/lib';

Vue.use(ElementUI);
Vue.use(AutoForm);
Vue.$autoform.registerStore(store);
Vue.use(AutoForm_component_lib);
// Vue.use(AutoForm_Editor, store);
Vue.$autoform.registerDirWithConfig(() => require.context('./components/custom'));

// Vue.$autoform.RegisterDir(()=>require.context('./components'))
Vue
    .$autoform
    .Register(Vue, [Hello], {prefix: "c"})

Vue.config.productionTip = false;

new Vue({el: '#app', router, store, template: '<App/>', components: {
        App
    }});
