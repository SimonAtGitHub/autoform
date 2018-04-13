export default {
    name: '按钮',
    type: 'button',
    tag: 'basic',
    config: [],
    default: {
        key: 'button',
        type: 'button',
        templateOptions: {
            hasLabel: true,
            inline: true,
            className: 'button-wrap',
            label: 'button',
            buttonOpt:[
                {
                    value: '按钮A',
                    size: 'mini',
                    type: 'primary',
                    onClick: 'buttonClick'
                },
                {
                    value: '按钮B',
                    size: 'mini',
                    type: 'default',
                    onClick: 'buttonClick'
                }
            ]
        }
    }
};
