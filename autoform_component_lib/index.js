import Input from './components/input/index';
import Select from './components/select/index';
import Checkbox from "./components/checkbox/index";
import Datepicker from "./components/datepicker/index";
import InputTree from "./components/inputTree/index";
import Radio from './components/radio/index';
import Textarea from "./components/textarea/index";
import Timepicker from "./components/timepicker/index";
import Switch from "./components/switch/index";


const components = [
    Input,
    Select,
    Checkbox,
    Datepicker,
    InputTree,
    Radio,
    Textarea,
    Timepicker,
    Switch
];

const install = function (Vue, options) {
    /* istanbul ignore if */
    if (install.installed) return;

    // components.forEach(component => {
    //     Vue.component(component.name, component);
    // });
    if(! Vue.$autoform){
        console.log(`请先引入 autoform`)
    }
    Vue.$autoform.Register(Vue, components, options)

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

let Conf_component_lib = {
    components
}






export default Conf_component_lib;
