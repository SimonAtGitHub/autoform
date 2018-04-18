let fn = {
    formatSchema (data) {
        let _data = JSON.parse(JSON.stringify(data));
        _data.fields.forEach(field => {
            delete field.id
        });
        return _data;
    }
};

export default {
    formatSchema: fn.formatSchema
}