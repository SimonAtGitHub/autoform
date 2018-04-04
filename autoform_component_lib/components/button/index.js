import Button from './src/main.vue';
import config from './description';
Button.__CONFIG__ = config;
/* istanbul ignore next */
Button.install = function(Vue) {
    Vue.component(Button.name, Button);
};

export default Button;