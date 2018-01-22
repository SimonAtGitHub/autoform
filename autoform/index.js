import Components from './components/index';
import Filters from './filters/index';

import abstractComponent from './utils/baseField';
import AutoFormMixin from './utils/autoformMixin';
import EventBus from './utils/eventBus';

import {
  getTypes,
  addType,
  addValidationMessage
} from './utils';
import Directives from './directives/index';
import {
  Register,
  RegisterDir
} from "./register/index";



let AutoForm = {
  getTypes,
  addType,
  addValidationMessage,
  abstractComponent,
  install(Vue) {
    Directives(Vue);
    Components(Vue);
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
      RegisterDir
    };
    window.__AUTOFORM_DEVTOOLS_GLOBAL_HOOK__=Vue.$autoform;
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
    RegisterDir
  };
  window.__AUTOFORM_DEVTOOLS_GLOBAL_HOOK__=Vue.$autoform;
}
export default AutoForm;

export const baseField = abstractComponent;



