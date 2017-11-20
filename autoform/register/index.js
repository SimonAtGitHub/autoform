import {
    addType
} from "../util";




export const Register = (Vue, registerComponents, options = {
    prefix: "c"
}) => {

    let pattern = new RegExp('^' + options.prefix);
    registerComponents.forEach((key) => {
        //remove
        let componentName = key.name
            .replace(pattern, '');


        //convert the first letter to lc
        componentName = componentName.charAt(0).toLowerCase() + componentName.slice(1);
        let component = key;
        if (component.default) {
            component = component.default;
        }

        addType(componentName, component);
    });
}



export const RegisterDir = (callback, options = {
    prefix: "c"   //去掉 文件前缀
}) => {

    if (typeof callback !== 'function') {
        return;
    }
    let Vue = window.Vue;

    let replacePattern = new RegExp('^' + options.prefix);

    let Fields = callback();

    Fields.keys().forEach((key) => {
        //remove all the .vue crap
        let component = key
            .replace(/^\.\//, '')
            .replace(/\.vue/, '')
            .replace(replacePattern, '');

        component = component.charAt(0).toLowerCase() + component.slice(1);
        let com = Fields(key);
        if (Fields(key).default) {
            com = Fields(key).default;
        }
        addType(component, com);
    });
}
