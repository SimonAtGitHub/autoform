<template>
<div>
    <auto-form ref="tagForm" :model="model1" :fields="fields1" :layout="layout">
     <template slot-scope="ops">
        <div class="form-wrap">
            <div class="group-wrap">
                <div class="group-block">
                    分组展示A：
                </div>
                <div>
                    <el-row>
                        <el-col :span="12">
                            <autoform-custom-field  :options.sync="ops" :field-key="'radio'"></autoform-custom-field>
                        </el-col>
                        <el-col :span="12">
                            <autoform-custom-field  :options.sync="ops" :field-key="'radio1'"></autoform-custom-field>
                        </el-col>
                        <el-col :span="12">
                            <autoform-custom-field  :options.sync="ops" :field-key="'radio2'"></autoform-custom-field>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="group-wrap">
                <div class="group-block">
                    分组展示B：
                </div>
                <div>
                    <el-row>
                        <el-col :span="12">
                            <autoform-custom-field  :options.sync="ops" :field-key="'checkbox'"></autoform-custom-field>
                        </el-col>
                        <el-col :span="12">
                            <autoform-custom-field  :options.sync="ops" :field-key="'checkbox1'"></autoform-custom-field>
                        </el-col>
                        <el-col :span="12">
                            <autoform-custom-field  :options.sync="ops" :field-key="'checkbox2'"></autoform-custom-field>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="group-wrap">
                <div class="group-block">
                    分组展示C：
                </div>
                <div>
                    <el-row>
                        <el-col :span="12">
                            <autoform-custom-field  :options.sync="ops" :field-key="'date1'"></autoform-custom-field>
                        </el-col>
                        <el-col :span="12">
                            <autoform-custom-field  :options.sync="ops" :field-key="'date2'"></autoform-custom-field>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="button-wrap">
                <el-button type="primary">立即创建</el-button>
                <el-button @click="reset">取消</el-button>
                <el-button @click="clear">清除</el-button>
            </div>
        </div>
     </template>
    </auto-form>
</div>
  
   
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      model1: {
        name: "hello~",
        radio: '',
        radio1: '',
        radio2: '',
        checkbox: [],
        checkbox1: [],
        checkbox2: []
      },
      layout: {
        align: "left",
        labelWidth: "100px",
        custom: true
      },
        fields1: [
            {
                key: 'radio',
                type: 'radio',
                templateOptions: {
                    label: 'radio',
                    options: [
                        {
                            label: '枚举A',
                            value: 'A'
                        },
                        {
                            label: '枚举B',
                            value: 'B'
                        }
                    ]
                }
            },
            {
                key: 'radio1',
                type: 'radio',
                templateOptions: {
                    label: 'radio1',
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
                key: 'radio2',
                type: 'radio',
                templateOptions: {
                    label: 'radio2',
                    options: [
                        {
                            label: '区域三',
                            value: 'shanghai'
                        },
                        {
                            label: '区域四',
                            value: 'beijing'
                        }
                    ]
                }
            },
            {
                key: 'checkbox',
                type: 'checkbox',
                templateOptions: {
                    label: 'checkbox',
                    options: [
                        {
                            label: '枚举A',
                            value: 'A'
                        },
                        {
                            label: '枚举B',
                            value: 'B'
                        }
                    ]
                }
            },
            {
                key: 'checkbox1',
                type: 'checkbox',
                templateOptions: {
                    label: 'checkbox1',
                    options: [
                        {
                            label: '枚举A',
                            value: 'A'
                        },
                        {
                            label: '枚举B',
                            value: 'B'
                        }
                    ]
                }
            },
            {
                key: 'checkbox2',
                type: 'checkbox',
                templateOptions: {
                    label: 'checkbox2',
                    options: [
                        {
                            label: '枚举A',
                            value: 'A'
                        },
                        {
                            label: '枚举B',
                            value: 'B'
                        }
                    ]
                }
            },
            {
                key: 'date1',
                type: 'datepicker',
                templateOptions: {
                    label: '活动日期',
                    placeholder: '选择日期',
                    span: 12
                }
            },
            {
                key: 'date2',
                type: 'timepicker',
                templateOptions: {
                    label: '活动时间',
                    placeholder: '选择时间',
                    span: 12
                }
            }
        ]
    };
  },
  methods: {
    reset() {
      this.$refs.tagForm.resetForm();
    },
    clear() {
      this.$refs.tagForm.clearForm();
    }
  }
};
</script>

<style lang="less" scoped>
    .form-wrap {
        padding: 20px;
    }
    .group-wrap {
        border: 1px solid #eaeefb;

        > div:last-of-type {
            padding: 10px;
        }

        .group-block {
            padding: 10px;
            background-color: #e5e9f2;
            border-bottom: 1px solid #eaeefb;
            /*border: 1px solid #ccc;*/
        }
    }
    .button-wrap {
        padding: 10px;
        display: flex;
        justify-content: flex-end;
    }
</style>
