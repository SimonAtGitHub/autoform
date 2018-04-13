<template>
    <div style="display: flex;justify-content: center">
        <div>
            <el-card style="width: 80vw">
                <div style="display: flex;justify-content: flex-end">
                    <el-button type="primary" icon="el-icon-circle-plus-outline"></el-button>
                </div>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="id"
                            label="id"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="组件类型"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="组件名">
                    </el-table-column>
                    <el-table-column
                            prop="imgSrc"
                            label="预览地址">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="100">
                        <template slot-scope="scope">
                            <el-button type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>

            <el-card style="width: 80vw">
                <auto-form ref="tagForm1" :model="model1" :fields="fields1" :layout="layout"></auto-form>
            </el-card>
        </div>

        <!--<el-tabs v-model="activeName" @tab-click="handleClick">-->
            <!--<el-tab-pane :label="item.name" :name="item.key" v-for="(item, index) in formList.children">-->
                <!--<auto-form :ref="item.key" :model="item.model" :fields="item.fields" :layout="item.layout">-->
                    <!--<el-row>-->
                        <!--<el-col :span="24" v-for="formItem in item.children">-->
                            <!--<div v-if="formItem.children">-->
                                <!--{{formItem.group}}-->
                                <!--<el-row>-->
                                    <!--<el-col :span="attrItem.templateOptions.span" v-for="attrItem in item.children">-->
                                        <!--<field field="attrItem"></field>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                            <!--</div>-->
                            <!--<div v-else>-->
                                <!--<field field="formItem"></field>-->
                            <!--</div>-->
                        <!--</el-col>-->
                    <!--</el-row>-->
                <!--</auto-form>-->
            <!--</el-tab-pane>-->
        <!--</el-tabs>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'first',
                tableData: [
                    {
                        id: '1', //组件ID
                        name: '输入框', //组件名称
                        type: 'input', //组件类型
                        imgSrc: 'https://www.hahaha.png' //组件展示图片
                    },
                    {
                        id: '2', //组件ID
                        name: '电话', //组件名称
                        type: 'phone-split', //组件类型
                        imgSrc: 'https://www.phone.png' //组件展示图片
                    }
                ],
                formInline: {
                    user: '',
                    region: ''
                },
                model1: {
                    required: 'false',
                    requiredTrigger: 'blur',
                    requiredMessage: '请输入内容',
                    max: '',
                    min: '',
                    maxMinTrigger: 'blur',
                    maxMinMessage: '数字范围是XX到XX'
                },
                layout: {
                    align: 'right',
                    labelWidth: '100px',
                    inline: false,
                    span: 24
                },
                fields1: [
                    {
                        key: 'required',
                        type: 'radio',
                        templateOptions: {
                            label: '是否必填',
                            options: [
                                {
                                    label: '非必填',
                                    value: 'false'
                                },
                                {
                                    label: '必填',
                                    value: 'true'
                                }
                            ],
                            span: 8
                        }
                    },
                    {
                        key: 'requiredTrigger',
                        type: 'radio',
                        templateOptions: {
                            label: '触发方式',
                            options: [
                                {
                                    label: 'blur',
                                    value: 'blur'
                                },
                                {
                                    label: 'change',
                                    value: 'change'
                                }
                            ],
                            span: 8
                        }
                    },
                    {
                        key: 'requiredMessage',
                        type: 'input',
                        templateOptions: {
                            label: 'message',
                            span: 8
                        }
                    },
                    {
                        key: 'min',
                        type: 'input',
                        templateOptions: {
                            label: 'min',
                            span: 3
                        }
                    },
                    {
                        key: 'max',
                        type: 'input',
                        templateOptions: {
                            label: 'max',
                            span: 3
                        }
                    },
                    {
                        key: 'maxMinTrigger',
                        type: 'radio',
                        templateOptions: {
                            label: '触发方式',
                            options: [
                                {
                                    label: 'blur',
                                    value: 'blur'
                                },
                                {
                                    label: 'change',
                                    value: 'change'
                                }
                            ],
                            span: 8,
                            offset: 2
                        }
                    },
                    {
                        key: 'maxMinMessage',
                        type: 'input',
                        templateOptions: {
                            label: 'message',
                            span: 8
                        }
                    },
                    {
                        key: "validate",
                        type: "select",
                        templateOptions: {
                            label: "自定义校验",
                            span: 24,
                            multiple: true,
                            options: [
                                {
                                    label: 'Fn1',
                                    value: 'Fn1'
                                },
                                {
                                    label: 'Fn2',
                                    value: 'Fn2'
                                }
                            ]
                        }
                    },
                ]
            }
        }
    }
//    let validatefn = {
//        notContain: (val) => {
//            if (val) {
//                return true
//            }
//        }
//    }
//
//    let formTree = [
//        {
//            id: 1, //id
//            name: '基础信息', //树的展示名称、tab名称
//            key: 'baseForm', //tabs的key
//            type: 'tabs', //类型为tabs
//            templateOptions: {
//                align: 'left', //标签位置
//                width: '200px' //标签宽度
//            },
//            children: [
//                {
//                    id: 2, //id
//                    type: 'group', //类型为分组
//                    name: '服务设施', //组名
//                    children: [
//                        {
//                            id: 3, //id
//                            type: 'attr', //类型为字段
//                            attrId: '42', //字段id（后端）
//                            name: '特色泡池', //字段名称（后端）
//                            templateOptions: {
//                                attrName: '特色泡池', //字段名称（后端）
//                                attrFormat: '{type:-1}', //字段格式（后端）
//                                attrDesc: '-1代表不确定', //字段描述（后端）
//                                label: '温泉特色泡池', //字段label
//                                options: [], //枚举
//                                type: 'custom_input', //组件类型
//                                key: 'paochi', //字段key
//                                disabled: true, //是否禁止编辑
//                                info: '' //辅助信息提示
//                            },
//                            validate: {
//                                trigger: 'blur', //触发方式 blur change
//                                rule: {
//                                    base: [
//                                        {
//                                            msgType: 'warning', //报错类型 error warning
//                                            ruleName: 'required', //规则名称
//                                            arguments: '', //参数
//                                            mes: '' //报错消息
//                                        }
//                                    ],
//                                    custom: [
//                                        {
//                                            msgType: 'error', //报错类型 error warning
//                                            ruleName: 'checkAge', //规则名称
//                                            arguments: '', //参数
//                                            mes: '' //报错消息
//                                        }
//                                    ]
//                                }
//                            },
//                            event: [
//                                {
//                                    trigger: 'onChange', //触发方式 click change
//                                    eventName: 'handleChange' //事件名称
//                                }
//                            ]
//                        }
//                    ]
//                },
//                {
//                    id: 4, //id
//                    type: 'attr', //类型为字段
//                    attrId: '43', //字段id（后端）
//                    name: '电话', //字段名称（后端）
//                    templateOptions: {
//                        attrName: '电话', //字段名称（后端）
//                        attrFormat: '0432-5239628/18000000000', //字段格式（后端）
//                        attrDesc: '多个电话用/间隔', //字段描述（后端）
//                        label: '电话', //字段label
//                        options: [], //枚举
//                        type: 'split-phone', //组件类型
//                        key: 'phone', //字段key
//                        disabled: false, //是否禁止编辑
//                        info: '' //辅助信息提示
//                    }
//                }
//            ]
//        },
//    ]
//
//    let formList = [
//        {
//            key: 'baseForm',
//            name: '基础信息',
//            children: {
//                layout: {
//                    align: 'right',
//                    labelWidth: '100px',
//                    inline: false,
//                    span: 24,
//                    custom: true
//                },
//                model: {},
//                fields: [
//                    {
//                        group: '服务设施',
//                        children: [
//                            {
//                                key: 'phone',
//                                type: 'phone-split',
//                                templateOptions: {
//                                    label: '电话',
//                                    span: 12,
//                                    onChange: "sortChange"
//                                },
//                                validate: [
//                                    { required: true, message: '请输入活动名称', trigger: 'blur' },
//                                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
//                                    { validator: checkAge, trigger: 'change' }
//                                ],
//                                warning: [
//                                    { validator: containWords, trigger: 'change' }
//                                ]
//                            }
//                        ]
//                    },
//                    {
//                        key: 'phone',
//                        type: 'phone-split',
//                        templateOptions: {
//                            label: '电话',
//                            span: 12,
//                            onChange: "sortChange"
//                        },
//                        validate: [
//                            { required: true, message: '请输入活动名称', trigger: 'blur' },
//                            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
//                            { validator: checkAge, trigger: 'change' }
//                        ],
//                        warning: [
//                            { validator: containWords, trigger: 'change' }
//                        ]
//                    }
//                ]
//            }
//        }
//    ]
</script>
