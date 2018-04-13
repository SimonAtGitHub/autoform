export default {
    name: '单选框',
    type: 'radio',
    tag: 'basic',
    config: [],
    default:  {
        key: 'radio',
        type: 'radio',
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
