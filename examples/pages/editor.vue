<!--用于编辑工作台测试-->
<template>
    <div>
        <div class="edit-wrap">
            <autoform-editor ref="formEditor" :config="config"></autoform-editor>
            <div>
                <el-input type="textarea" v-model="itemData" :rows="20"></el-input>
                <el-button @click="changeField()">测试filed</el-button>
                <el-button @click="changeLayout()">测试layout</el-button>
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
                                },
                                validators: [
                                    {required: true, message: '请输入活动名称', trigger: 'blur'},
                                    {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
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
                    style: {
                        left: 1,
                        right: 3
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
                    id: 0,
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
            }
        },
        mounted() {
            let config = [
                {
                    name: '测测单选',
                    tag: 'baifang',
                    default: {
                        key: 'radio',
                        type: 'radio',
                        templateOptions: {
                            label: '测测单选',
                            options: [
                                {
                                    label: '拜访小A',
                                    value: 1
                                },
                                {
                                    label: '拜访小B',
                                    value: 0
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