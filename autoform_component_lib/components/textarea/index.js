import Textarea from './src/main.vue';
import config from './description';
Textarea.__CONFIG__ = config;
/* istanbul ignore next */
Textarea.install = function(Vue) {
  Vue.component(Textarea.name, Textarea);
};

export default Textarea;