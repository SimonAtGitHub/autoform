<!--slot-->
<template>
    <div>
        <auto-form ref="tagForm1" :model="model1" :fields="fields1" :layout="layout">
            <!--<el-form-item>-->
                <!--<el-button type="primary">立即创建</el-button>-->
                <!--<el-button>取消</el-button>-->
            <!--</el-form-item>-->
        </auto-form>
    </div>
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
                        },
                        validators: [
                            { max: 5, message: '最大长度', trigger: 'blur' }
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
                ]
            };
        }
    };
</script>