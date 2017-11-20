import Datepicker from './src/main.vue';

/* istanbul ignore next */
Datepicker.install = function(Vue) {
  Vue.component(Datepicker.name, Datepicker);
};

export default Datepicker;