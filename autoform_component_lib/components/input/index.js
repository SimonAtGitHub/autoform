import Input from './src/main.vue';
import config from './description';
Input.__CONFIG__ = config;
/* istanbul ignore next */
Input.install = function(Vue) {
  Vue.component(Input.name, Input);
};

export default Input;