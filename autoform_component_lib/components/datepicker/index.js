import Datepicker from './src/main.vue';
import config from './description';
Datepicker.__CONFIG__ = config;
/* istanbul ignore next */
Datepicker.install = function(Vue) {
  Vue.component(Datepicker.name, Datepicker);
};

export default Datepicker;