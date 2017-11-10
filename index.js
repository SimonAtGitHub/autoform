import Components from './components/index';
import Filters from './filters/index';

import basicComponent from './utils/baseField';

import {
    getTypes,
    addType,
    addValidationMessage
} from './util';
import Directives from './directives/index';
import {
    Register,
    RegisterDir
} from "./register/index";



let AutoForm = {
    getTypes,
    addType,
    addValidationMessage,
    basicComponent,
    install(Vue) {
        Directives(Vue);
        Components(Vue);
        Filters(Vue);
        // Register(Vue, components, options)

        Vue.$autoform = {
            getTypes,
            addType,
            addValidationMessage,
            Register,
            RegisterDir
        };

    }
};




if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(AutoForm);
    window.Vue.$autoform = {
        getTypes,
        addType,
        addValidationMessage,
        Register,
        RegisterDir
    };
}
export default AutoForm;



