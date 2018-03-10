/*eslint-disable */
const exports = {
    fields: {},
    validationMessages: {}
};
export default exports;

export function addType(id, options) {
    if (!exports.fields['form_' + id]) {
        exports.fields['form_' + id] = options;
    } else {
        console.warn(id, '已经存在了,请勿重复注入');
    }
}

export function getTypes() {
    return exports.fields;
}

export function setError(form, key, err, isError, message = false) {
    if (!form.$errors[key]) form.$errors[key] = {};
    form.$errors[key][err] = isError ? message || isError : false;
}


export function addValidationMessage(key, message) {
    exports.validationMessages[key] = message;
}

export function parseValidationString(key, message, label, value) {
    if (key && !(key in exports.validationMessages) && !message) return false;

    if (key in exports.validationMessages) {
        message = exports.validationMessages[key];
    }

    let output = message.replace(/\%l/g, label).replace(/\%v/g, value);
    return output;
}



export function getCamelCase(str) {
    return str.replace(/-([a-z])/g, function (all, i) {
        return i.toUpperCase();
    })
}

export function getMidLineCase(str) {
    return str.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
}


export function getFileName(str) {
    return str.replace(/(.*\/)*([^.]+.*)/ig, "$2");
}



// isFunction (val) {
//     return Object.prototype.toString.call(val) === '[object Function]';
// },
// isObject (val) {
//     return Object.prototype.toString.call(val) === '[object Object]';
// },
// isArray (val) {
//     return Object.prototype.toString.call(val) === '[object Array]';
// },
// isNumber (val) {
//     return Object.prototype.toString.call(val) === '[object Number]';
// },
// isString (val) {
//     return Object.prototype.toString.call(val) === '[object String]';
// }
export const typeCheck = ['Function', 'Object', 'Array', 'Number', 'String']
    .reduce((result, item) => {
        result[`is` + item] = (val) => {
            return Object.prototype.toString.call(val) === `[object ${item}]`;
        }
        return result;
    }, {})

export function setCache (component) {
    let vNode = component.$vnode;
    let model = component.model;
    sessionStorage.setItem(vNode.tag, JSON.stringify(model));
}