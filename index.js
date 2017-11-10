import Components from './components/index';
import Filters from './filters/index';
import {
    getTypes,
    addType,
    addValidationMessage
} from './util';
import Directives from './directives/index';
import Register from "./register/index";



let AutoForm = {
    getTypes,
    addType,
    addValidationMessage,
    install (Vue, components, options) {
        Directives(Vue);
        Components(Vue);
        Filters(Vue);
        Register(Vue, components, options)

        Vue.$autoform = {
            getTypes,
            addType,
            addValidationMessage
        };
    }
};




if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(AutoForm);
    window.Vue.$autoform = {
        getTypes,
        addType,
        addValidationMessage
    };
}
export default AutoForm;
