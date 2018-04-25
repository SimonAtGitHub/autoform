<!--用于编辑工作台测试-->
<template>
    <div>
        <div class="edit-wrap">
            <autoform-editor ref="formEditor"
                             :config="config"
                             @handleSave="handleSave"
                             @handleBeforeChangeField="handleBeforeChangeField"
                             @handleAfterChangeField="handleAfterChangeField"
                             @handleEditField="handleEditField">
            </autoform-editor>
            <div style="padding: 10px;">
                <el-input type="textarea" v-model="itemData" :rows="20"></el-input>
                <el-button @click="changeField()">测试filed</el-button>
                <el-button @click="changeLayout()">测试layout</el-button>
                <el-button @click="getFields()">获取fields</el-button>
                <el-button @click="handleConfig()">获取config</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
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
                                }
                            },
                            {
                                key: 'region',
                                type: 'checkbox',
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
                                value: []
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
                            region: []
                        }
                    }
                },
                itemData: ''
            };
        },
        methods: {
            /* 保存 */
            handleSave (data) {
                console.log('handleSave', data);
            },
            /* 获取config */
            handleConfig () {
                console.log('handleConfig', this.$refs['formEditor'].getConfig());
            },
            /* 获取需要改变的field */
            handleEditField (data) {
                console.log('handleEditField', data);
            },
            /* 新增或删除field */
            handleBeforeChangeField (field, fields, type, cb) {
                console.log('handleBeforeChangeField', field, fields, type);
                //cb:true 可以添加
                cb(1);
            },
            /* 新增field之后 */
            handleAfterChangeField (field) {
                console.log('handleAfterChangeField', field);
            },
            /* 改变field */
            changeField() {
                let field = {
                    key: 'visit_mode',
                    type: 'checkbox',
                    id: 2,
                    templateOptions: {
                        label: 'hello',
                        options: [
                            {
                                label: '电话',
                                value: 1
                            },
                            {
                                label: '上门',
                                value: 2
                            }
                        ]
                    }
                };
                this.$refs['formEditor'].updateForm(field);
            },
            /* 改变layout */
            changeLayout() {
                let layout = {
                    align: "right",
                    labelWidth: "100px",
                    inline: true,
                    span: 24
                };
                this.$refs['formEditor'].updateForm(layout, true);
            },
            /* 获取全部fields */
            getFields () {
                console.log(this.$refs['formEditor'].getFields());
            }
        },
        mounted() {
            let config = [
                {
                    name: '拜访方式',
                    tag: 'baifang',
                    default: {
                        key: 'visit_mode',
                        type: 'checkbox',
                        templateOptions: {
                            label: '拜访方式',
                            options: [
                                {
                                    label: '电话',
                                    value: 1
                                },
                                {
                                    label: '上门',
                                    value: 2
                                },
                                {
                                    label: 'QQ',
                                    value: 3
                                },
                                {
                                    label: '邮件',
                                    value: 4
                                }
                            ]
                        },
                        value: []
                    }
                },
                {
                    name: 'checkboxLabel',
                    tag: 'baifang',
                    default: {
                        key: 'ccc',
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
                        },
                        value: []
                    }
                }
            ];
            this.$refs['formEditor'].setBasicConfig(config);
        },
        autoform: {
            eventBus: {
                handleChange1(value, options, field) {
                    console.log(value, options, field);
                },
                handleChange2(value, options, field) {
                    console.log(value, options, field);
                }
            }
        }
    };
</script>
<style lang="less">
    .edit-wrap {
        display: flex;
        > div {
            flex: 1;
            &:last-child {
                flex: 0 0 300px;
            }
        }
    }
</style>