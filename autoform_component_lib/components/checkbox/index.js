import Checkbox from './src/main.vue';
import config from './description';
Checkbox.__CONFIG__ = config;
/* istanbul ignore next */
Checkbox.install = function(Vue) {
  Vue.component(Checkbox.name, Checkbox);
};

export default Checkbox;