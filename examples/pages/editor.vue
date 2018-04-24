<!--用于编辑工作台测试-->
<template>
    <div>
        <div class="edit-wrap">
            <autoform-editor ref="formEditor" :config="config"></autoform-editor>
            <div style="padding: 10px;">
                <el-input type="textarea" v-model="itemData" :rows="20"></el-input>
                <el-button @click="changeField()">测试filed</el-button>
                <el-button @click="changeLayout()">测试layout</el-button>
                <el-button @click="getFields()">获取fields</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            let callback = (data) => {
                this.itemData = JSON.stringify(data);
            };
            let getSchemaCb = (data) => {
                console.log('getSchemaCb', data);
            };
            let getConfig = (data) => {
                console.log('getConfig', data);
            };
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
                    editCb: callback,
                    getSchemaCb: getSchemaCb,
                    getConfig: getConfig
                },
                itemData: ''
            };
        },
        methods: {
            changeField() {
                let field = {
                    key: "name",
                    id: 2,
                    type: "baifang_input",
                    templateOptions: {
                        span: 8,
                        label: "活动名称",
                        onChange: 'keyUpFn'
                    }
                };
                this.$refs['formEditor'].updateForm(field);
            },
            changeLayout() {
                let layout = {
                    align: "right",
                    labelWidth: "100px",
                    inline: true,
                    span: 24
                };
                this.$refs['formEditor'].updateForm(layout, true);
            },
            getFields () {
                console.log(this.$refs['formEditor'].getFields());
            }
        },
        mounted() {
            let config = [
                {
                    name: '拜访对象',
                    tag: 'baifang',
                    default: {
                        key: 'visit_object',
                        type: 'input',
                        templateOptions: {
                            label: '拜访对象'
                        }
                    }
                },
                {
                    name: '拜访对象2',
                    tag: 'baifang',
                    default: {
                        key: 'visit_object2',
                        type: 'input',
                        templateOptions: {
                            label: '拜访对象2'
                        }
                    }
                },
                {
                    name: '拜访方式',
                    tag: 'baifang',
                    default: {
                        key: 'visit_mode',
                        type: 'radio',
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
                        }
                    }
                }
            ];
            this.$refs['formEditor'].setBasicConfig(config);
        },
        autoform: {
            eventBus: {
                displayFn(model, field, cb) {
                    if (model.status) {
                        cb(true);
                    } else {
                        cb(false);
                    }
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