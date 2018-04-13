import Components from './components/index';
import Filters from './filters/index';

import abstractComponent from './utils/baseField';
import AutoFormMixin from './utils/autoformMixin';
import EventBus from './utils/eventBus';
import registerCmp from 'autoform_editor/components/index'
import viewport from 'autoform_editor/store/viewport'
import {
    getTypes,
    addType,
    addValidationMessage
} from './utils';
import Directives from './directives/index';
import {
    Register,
    RegisterDir,
    registerDirWithConfig
} from "./register/index";


let AutoForm = {
    getTypes,
    addType,
    addValidationMessage,
    abstractComponent,
    install(Vue, store) {
        Directives(Vue);
        Components(Vue);
        registerCmp(Vue);
        Filters(Vue);
        EventBus(Vue);

        // Register(Vue, components, options)

        Vue.mixin(AutoFormMixin);

        Vue.$autoform = {
            abstractComponent,
            getTypes,
            addType,
            addValidationMessage,
            Register,
            RegisterDir,
            registerDirWithConfig
        };
        if (store && !store.state.viewport) {
            store.registerModule('viewport', viewport);
        }
        window.__AUTOFORM_DEVTOOLS_GLOBAL_HOOK__ = Vue.$autoform;
    }
};


if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(AutoForm);
    window.Vue.$autoform = {
        abstractComponent,
        getTypes,
        addType,
        addValidationMessage,
        Register,
        RegisterDir,
        registerDirWithConfig
    };
    window.__AUTOFORM_DEVTOOLS_GLOBAL_HOOK__ = Vue.$autoform;
}
export default AutoForm;

export const baseField = abstractComponent;



