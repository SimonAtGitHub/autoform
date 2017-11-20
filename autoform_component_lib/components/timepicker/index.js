import Timepicker from './src/main.vue';

/* istanbul ignore next */
Timepicker.install = function(Vue) {
  Vue.component(Timepicker.name, Timepicker);
};

export default Timepicker;