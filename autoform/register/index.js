import {
    addType,
    getCamelCase,
    getMidLineCase,
    getFileName
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
    prefix: "c" //去掉 文件前缀
}) => {

    if (typeof callback !== 'function') {
        return;
    }
    let Vue = window.Vue;

    let replacePattern = new RegExp('^' + options.prefix);

    let Fields = callback();
    Fields.keys().forEach(key => {

        if (key.indexOf('.vue') < 0) { //重复解析
            return;
        }


        let name =
            getFileName(key)
            .replace(/\.vue/, '')
            .replace(replacePattern, '')
            .replace(/-/, '');

        name = name.charAt(0).toLowerCase() + name.slice(1);


        let cc = getCamelCase(name);
        let ml = getMidLineCase(name);
        let component = Fields(key);
        if (Fields(key).default) {
            component = Fields(key).default;
        }


        addType(cc, component);
        addType(ml, component);
    });
}