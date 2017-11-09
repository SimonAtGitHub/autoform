import { addType } from "../util";
export default function (Vue, options, replacement) {
    
    let pattern = new RegExp('^' + replacement);
    options.forEach((key) => {
        //remove 
        let componentName = key.name
            .replace(pattern, '');

        //convert the first letter to lc
        componentName = componentName.charAt(0).toLowerCase() + componentName.slice(1);
        let component = key;
        if(component.default) {
            component = components.default;
        }

        addType(componentName, component);
    });
}

