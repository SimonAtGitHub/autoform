let fn = {
    formatSchema (fields) {
        let _fields = JSON.parse(JSON.stringify(fields));
        _fields.forEach(field => {
            delete field.id
        });
        return _fields;
    }
};

export default {
    formatSchema: fn.formatSchema
}