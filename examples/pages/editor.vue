<template>
    <div>
        <autoform-editor :config="config"></autoform-editor>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                config: {
                    name: 'baifang',
                    schema: {
                        fields: [
                            {
                                key: 'name',
                                type: 'input',
                                templateOptions: {
                                    label: 'label名称'
                                },
                                validators: [
                                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                                ]
                            },
                            {
                                key: 'region',
                                type: 'select',
                                templateOptions: {
                                    label: '活动区域',
                                    placeholder: '请选择活动区域',
                                    options: [
                                        {
                                            label: '区域一',
                                            value: 'shanghai'
                                        },
                                        {
                                            label: '区域二',
                                            value: 'beijing'
                                        }
                                    ]
                                },
                                value: ''
                            },
                        ],
                        layout: {
                            align: 'left',
                            labelWidth: '100px',
                            inline: false,
                            span: 24
                        },
                        model: {
                            name: '拜访人员',
                            region: 'beijing'
                        }
                    },
                    drag: {
                        baifang_input: {
                            once: true
                        }
                    }
                }
            };
        },
        methods: {},
        autoform: {
            eventBus: {
                displayFn(model, field, cb) {
                    //console.log(field, model);
                    if(model.status) {
                        cb(true);
                    } else {
                        cb(false);
                    }
                }
            }
        }
    };
</script>