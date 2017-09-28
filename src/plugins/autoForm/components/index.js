import AutoForm from './AutoForm';
import Field from './Field';

export default function (Vue) {
    Vue.component('auto-form', AutoForm);

    Vue.component('field', (resolve) => {
        resolve(Field);
    });
}
