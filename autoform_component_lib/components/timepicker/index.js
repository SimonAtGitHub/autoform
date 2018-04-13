import Timepicker from './src/main.vue';
import config from './description';
Timepicker.__CONFIG__ = config;
/* istanbul ignore next */
Timepicker.install = function(Vue) {
  Vue.component(Timepicker.name, Timepicker);
};

export default Timepicker;