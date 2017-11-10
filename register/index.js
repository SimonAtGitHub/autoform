import {
    addType
} from "../util";
export default function (Vue, registerComponents, options = {
    prefix: "form"
}) {

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