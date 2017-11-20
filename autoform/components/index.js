import AutoForm from './AutoForm';
import Field from './Field';


export default function (Vue) {
    Vue.component('auto-form', AutoForm);

    Vue.component('field', (resolve) => {
        if(Field.default){
            resolve(Field.default); //兼容 vue-loader 13.3.0
        }else{
            resolve(Field);
        }
    });
}
