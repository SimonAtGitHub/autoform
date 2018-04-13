import Select from './src/main.vue';
import config from './description';
Select.__CONFIG__ = config;
// /* istanbul ignore next */
Select.install = function(Vue) {
    Vue.component(Select.name, Select);
};

export default Select;

