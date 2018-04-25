<!--用于编辑工作台测试-->
<template>
    <div>
        <div class="edit-wrap">
            <autoform-editor ref="formEditor"
                             :config="config"
                             @handleSave="handleSave"
                             @handleChangeField="handleChangeField"
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
            handleChangeField (field, fields, type, cb) {
                console.log(field, fields, type);
                //cb:true 可以添加
                cb(1);
            },
            /* 改变field */
            changeField() {
                let field = {
                    key: 'visit_mode',
                    type: 'radio',
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