import Switch from './src/main.vue';
import config from './description';
Switch.__CONFIG__ = config;
/* istanbul ignore next */
Switch.install = function(Vue) {
  Vue.component(Switch.name, Switch);
};

export default Switch;
