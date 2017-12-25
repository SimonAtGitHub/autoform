


<template>
    <el-card>
        <auto-form ref="tagForm" :model="model5" :fields="fields7" :layout="layout5"></auto-form>
    </el-card>
</template>

<script>
    export default {
        data() {
            return {
                model1: {
                    name: 'hello~',
                    type: []
                },
                layout: {
                    align: 'left',
                    labelWidth: '100px',
                    inline: false,
                    span: 24
                },
                fields1: [
                    {
                        key: 'name',
                        type: 'input',
                        templateOptions: {
                            label: '活动名称'
                        }
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
                            ],
                            filterMethod: () => { return true}
                        }
                    },
                    {
                        key: 'date1',
                        type: 'datepicker',
                        templateOptions: {
                            label: '活动时间',
                            placeholder: '选择日期',
                            span: 12
                        }
                    },
                    {
                        key: 'date2',
                        type: 'timepicker',
                        templateOptions: {
                            placeholder: '选择时间',
                            span: 12
                        }
                    },
                    {
                        key: 'type',
                        type: 'checkbox',
                        templateOptions: {
                            label: '活动性质',
                            options: [
                                {
                                    label: '美食/餐厅线上活动',
                                    value: '美食/餐厅线上活动'
                                },
                                {
                                    label: '地推活动',
                                    value: '地推活动'
                                },
                                {
                                    label: '线下主题活动',
                                    value: '线下主题活动'
                                },
                                {
                                    label: '单纯品牌曝光',
                                    value: '单纯品牌曝光'
                                }
                            ]
                        }
                    },
                    {
                        key: 'desc',
                        type: 'textarea',
                        templateOptions: {
                            label: '活动形式'
                        }
                    },
                ],
                model2: {
                    name: '',
                    type: []
                },
                layout2: {
                    align: 'left',
                    labelWidth: '100px',
                    inline: true
                },
                fields2: [
                    {
                        key: 'name',
                        type: 'input',
                        templateOptions: {
                            label: '审批人'
                        }
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
                            ],
                            filterMethod: () => {}
                        }
                    }
                ],
                layout3: {
                    align: 'left',
                    labelWidth: '100px',
                    inline: false
                },
                fields3: [
                    {
                        key: 'name',
                        type: 'input',
                        templateOptions: {
                            label: '活动名称'
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
                            ],
                            filterMethod: () => {}
                        }
                    },
                    {
                        key: 'date1',
                        type: 'datepicker',
                        templateOptions: {
                            label: '活动时间',
                            placeholder: '选择日期',
                            span: 12
                        }
                    },
                    {
                        key: 'date2',
                        type: 'timepicker',
                        templateOptions: {
                            placeholder: '选择时间',
                            span: 12
                        }
                    },
                    {
                        key: 'type',
                        type: 'checkbox',
                        templateOptions: {
                            label: '活动性质',
                            options: [
                                {
                                    label: '美食/餐厅线上活动',
                                    value: '美食/餐厅线上活动'
                                },
                                {
                                    label: '地推活动',
                                    value: '地推活动'
                                },
                                {
                                    label: '线下主题活动',
                                    value: '线下主题活动'
                                },
                                {
                                    label: '单纯品牌曝光',
                                    value: '单纯品牌曝光'
                                }
                            ]
                        }
                    },
                    {
                        key: 'desc',
                        type: 'textarea',
                        templateOptions: {
                            label: '活动形式'
                        }
                    },
                ],
                model3: {
                    name: '',
                    status: ''
                },
                fields4: [
                    {
                        key: 'name',
                        type: 'input',
                        templateOptions: {
                            label: '审批人'
                        }
                    },
                    {
                        key: 'status',
                        type: 'radio',
                        templateOptions: {
                            label: '活动状态',
                            options: [
                                {
                                    label: '线上品牌商赞助',
                                    value: 1
                                },
                                {
                                    label: '线下场地免费',
                                    value: 0
                                }
                            ]
                        }
                    },
                    {
                        key: 'desc',
                        type: 'textarea',
                        templateOptions: {
                            label: '活动形式'
                        },
                        display: 'displayFn'
                    }
                ],
                fields5: [
                    {
                        key: 'name',
                        type: 'input',
                        templateOptions: {
                            label: '审批人'
                        }
                    },
                    {
                        key: 'status',
                        type: 'radio',
                        templateOptions: {
                            label: '活动状态',
                            options: [
                                {
                                    label: '线上品牌商赞助',
                                    value: 1
                                },
                                {
                                    label: '线下场地免费',
                                    value: 0
                                }
                            ]
                        }
                    }
                ],
                layout4: {
                    align: 'left',
                    labelWidth: '100px',
                    inline: false,
                    span: 12,
                    gutter: 60
                },
                model4: {
                    region: '',
                    type: [],
                    status: ''
                },
                fields6: [
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
                            ],
                            onChange: 'handleChange1'
                        }
                    },
                    {
                        key: 'type',
                        type: 'checkbox',
                        templateOptions: {
                            label: '活动性质',
                            options: [
                                {
                                    label: '美食/餐厅线上活动',
                                    value: '美食/餐厅线上活动'
                                },
                                {
                                    label: '地推活动',
                                    value: '地推活动'
                                },
                                {
                                    label: '线下主题活动',
                                    value: '线下主题活动'
                                },
                                {
                                    label: '单纯品牌曝光',
                                    value: '单纯品牌曝光'
                                }
                            ],
                            onChange: 'handleChange2'
                        }
                    },
                    {
                        key: 'status',
                        type: 'radio',
                        templateOptions: {
                            label: '活动形式',
                            options: [
                                {
                                    label: '上线',
                                    value: '1'
                                },
                                {
                                    label: '下线',
                                    value: '0'
                                }
                            ],
                            onChange: (value, item) => {
                                console.log(value, item);
                            }
                        }
                    },
                ],
                model5: {
                    name1: "111",
                    name2: "",
                    date: "",
                    time: ""
                },
                layout5: {
                    align: "left",
                    labelWidth: "100px",
                    inline: false,
                    gutter: 30
                },
                fields7: [
                    [
                        {
                            key: "name1",
                            type: "input",
                            templateOptions: {
                                span: 12,
                                label: "活动名称1",
                                onChange: 'keyUpFn'
                            }
                        },
                        {
                            key: "name2",
                            type: "input",
                            templateOptions: {
                                span: 12,
                                label: "活动名称2",
                                onChange: 'keyUpFn'
                            }
                        }
                    ],
                    [
                        {
                            key: "date",
                            type: "datepicker",
                            templateOptions: {
                                label: "选择日期",
                                placeholder: "选择日期",
                                span: 12
                            }
                        },
                        {
                            key: "time",
                            type: "timepicker",
                            templateOptions: {
                                label: "选择时间",
                                placeholder: "选择时间",
                                span: 4
                            }
                        },
                        {
                            key: "time2",
                            type: "timepicker",
                            templateOptions: {
                                label: "选择时间",
                                placeholder: "选择时间",
                                span: 4
                            }
                        }
                    ]
                ]
            };
        },
        autoform: {
            eventBus: {
                handleChange1(value, options, field) {
                    console.log(value, options, field);
                },
                handleChange2(value, options, field) {
                    console.log(value, options, field);
                },
                displayFn(model, field, cb) {
                    //console.log(field, model);
                    cb(true);
                }
            }
        }
    };
</script>

<style>

</style>
