import Radio from './src/main.vue';
import config from './description';
Radio.__CONFIG__ = config;
/* istanbul ignore next */
Radio.install = function(Vue) {
  Vue.component(Radio.name, Radio);
};

export default Radio;