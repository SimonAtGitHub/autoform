export default {
    name: '下拉框',
    type: 'select',
    tag: 'basic',
    config: [],
    default:  {
        key: 'select',
        type: 'select',
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
        }
    }
};
