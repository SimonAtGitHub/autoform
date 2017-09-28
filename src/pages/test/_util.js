export const RequestTables = [{
    label: '字段名称',
    prop: 'description',
    width: '',
    fixed: false
}, {
    label: '字段Key',
    width: '',
    prop: 'name'
}, {
    label: '数据类型',
    width: '',
    prop: 'type'
}, {
    label: '控件类型',
    width: '',
    prop: 'control'
}, {
    label: '选项设置',
    width: '',
    prop: 'options'
}];

export const ResponseTables = [{
    label: '序号',
    prop: 'index',
    width: '80'
},
{
    label: '列名',
    prop: 'description',
    width: ''
},{
    label: 'key',
    prop: 'key',
    width: ''
},{
    label: '类型',
    prop: 'type',
    width: ''
}, {
    label: 'format',
    width: '',
    prop: 'format'
}, {
    label: '描述',
    width: '',
    prop: 'description'
}, {
    label: 'filter',
    width: '',
    prop: 'filter'
}];

export const controlType = ['input', 'select', 'checkbox', 'radio', 'date', 'time']


export const DealDefinitions = (str) => {
    return str.replace('#/definitions/', '');
}