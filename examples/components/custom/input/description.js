export const config = {
    name: '拜访组件1',
    type: 'baifang_input',
    tag: 'baifang',
    config: [
        {
            label: 'label名称',
            type: 'input',
            description: '这里负责填写活动名称的label字段',
            path: 'templateOptions.label',
            placeholder: '请输入活动名称的label',
            default: '拜访人员'
        },
        {
            label: '校验规则',
            type: 'custom_validate',
            description: '这里负责配置校验规则',
            path: 'validators',
            default: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
        },
        {
            label: '联动展示方法',
            type: 'input',
            description: '这里负责配置展示联动',
            path: 'display',
            default: 'displayFn'
        },
        {
            label: '联动方法',
            type: 'input',
            description: '这里负责配置联动',
            path: 'onChange',
            default: 'handleChange1'
        }
    ],
    default:  {
        key: "baifangName",
        type: "input",
        templateOptions: {
            label: "拜访人员"
        }
    },
}