import AutoForm from './AutoForm';
import AutoFormField from './AutoFormField';
import AutoFormLayout from './AutoFormLayout';
import AutoFormFieldCustom from  './AutoFormFieldCustom'


export default function (Vue) {
    Vue.component('auto-form', AutoForm);


    Vue.component('auto-form-layout', AutoFormLayout);

    Vue.component('auto-form-field', (resolve) => {
        if (AutoFormField.default) {
            resolve(AutoFormField.default); 
        } else {
            resolve(AutoFormField);
        }
    });

    // Vue.component('autoform-custom-field', (resolve) => {
    //     if (AutoFormFieldCustom.default) {
    //         resolve(AutoFormFieldCustom.default); 
    //     } else {
    //         resolve(AutoFormFieldCustom);
    //     }
    // });


    Vue.component('autoform-custom-field',AutoFormFieldCustom)
}