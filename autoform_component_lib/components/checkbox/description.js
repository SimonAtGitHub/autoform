export default {
    name: '多选框',
    type: 'checkbox',
    tag: 'basic',
    config: [],
    default:  {
        key: 'checkbox',
        type: 'checkbox',
        templateOptions: {
            label: 'label',
            options: [
                {
                    label: '枚举字段A',
                    value: 1
                },
                {
                    label: '枚举字段B',
                    value: 0
                }
            ]
        },
        value: []
    }
};
