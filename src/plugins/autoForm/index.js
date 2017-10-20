import Components from './components/index';
import Filters from './filters/index';
import Directives from './directives/index';

import {
    getTypes,
    addType,
    addValidationMessage
} from './util';

let AutoForm = {
    getTypes,
    addType,
    addValidationMessage,
    install (Vue, options) {
        Directives(Vue);
        Components(Vue);
        Filters(Vue);

        Vue.$form = {
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
