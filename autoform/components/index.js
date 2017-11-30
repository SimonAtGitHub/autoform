import AutoForm from './AutoForm';
import AutoFormField from './AutoFormField';
import AutoFormLayout from './AutoFormLayout';

export default function (Vue) {
    Vue.component('auto-form', AutoForm);


    Vue.component('auto-form-layout', (resolve) => {
        if (AutoFormLayout.default) {
            resolve(AutoFormLayout.default); //兼容 vue-loader 13.3.0
        } else {
            resolve(AutoFormLayout);
        }
    });

    Vue.component('auto-form-field', (resolve) => {
        if (AutoFormField.default) {
            resolve(AutoFormField.default); //兼容 vue-loader 13.3.0
        } else {
            resolve(AutoFormField);
        }
    });
}