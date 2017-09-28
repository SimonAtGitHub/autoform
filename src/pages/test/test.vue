<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="6">
                <auto-form :form="form" :model="model" :fields="fields" :span="24" :align="'top'" label-width="100px" ref="testForm" custom-layout="true">
                    <template scope="f">
                        <table>
                            <tr>
                                <td>
                                    <field :form.sync="form" :model.sync="model" :field="f.keys.name"></field>
                                </td>
                                <td>
                                    <field :form.sync="form" :model.sync="model" :field="f.keys.email"></field>
                                </td>

                            </tr>
                        </table>
                    </template>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button @click="onResetForm()">取消</el-button>
                    </el-form-item>
                </auto-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: {
                name: '',
                email: '',
                password: '',
                region: [],
                remark: ''
            },
            form: {},
            fields: [
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
                    key: 'email',
                    type: 'select',
                    templateOptions: {
                        label: '活动区域',
                        options: [{
                            value: '选项1',
                            label: '黄金糕'
                        }, {
                            value: '选项2',
                            label: '双皮奶'
                        }, {
                            value: '选项3',
                            label: '蚵仔煎'
                        }, {
                            value: '选项4',
                            label: '龙须面'
                        }, {
                            value: '选项5',
                            label: '北京烤鸭'
                        }]
                    },
                },
                {
                    key: 'password',
                    type: 'radio',
                    templateOptions: {
                        label: '特殊资源',
                        options: [
                            {
                                value: '选项1',
                                label: '线上'
                            },
                            {
                                value: '选项2',
                                label: '线下'
                            }
                        ]
                    }
                }, {
                    key: "region",
                    type: 'checkbox',
                    templateOptions: {
                        label: "活动性质",
                        options: [
                            {
                                value: '选项1',
                                label: '美食/餐厅线上活动'
                            },
                            {
                                value: '选项2',
                                label: '地推活动'
                            },
                            {
                                value: '选项3',
                                label: '线下主题活动'
                            },
                            {
                                value: '选项4',
                                label: '单纯品牌曝光'
                            }
                        ]
                    }
                }, {
                    key: "remark",
                    type: 'textarea',
                    templateOptions: {
                        label: "活动性质"
                    }
                }, {
                    key: "startDate",
                    type: 'datepicker',
                    templateOptions: {
                        label: "活动日期"
                    }
                }, {
                    key: "startTime",
                    type: 'timepicker',
                    templateOptions: {
                        label: "活动时间"
                    }
                }
            ]
        }
    },
    methods: {
        onSubmit() {
            this.$refs.testForm.validate().then(() => {
                console.log(111)
            }).catch(e => {
                console.log(false)
            })
        },
        onResetForm() {
            this.$refs.testForm.resetForm();
        }
    }
}
</script>

<style>

</style>
