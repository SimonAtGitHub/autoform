import { addType } from "../util";
export default function (Vue, options, replacement) {
    
    let pattern = new RegExp('^ + replacement');
    options.keys().forEach((key) => {
        //remove all the .vue crap
        let componentName = key
            .replace(/^\.\//, '')
            .replace(/\.vue/, '')
            .replace(pattern, '');

        //convert the first letter to lc
        componentName = component.charAt(0).toLowerCase() + component.slice(1);
        let component = options(key);
        if(component.default) {
            component = components.default;
        }

        addType(componentName, component);
    });
}

