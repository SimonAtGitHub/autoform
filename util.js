/*eslint-disable */
const exports = {
    fields: {},
    validationMessages: {}
};
export default exports;

export function addType(id, options) {
    exports.fields['form_' + id] = options;
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