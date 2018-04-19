<template>
<div>

    <auto-form ref="tagForm" :model="model1" :fields="fields1" :layout="layout">
     <template slot-scope="ops">
        <autoform-custom-field  :options.sync="ops" :field-key="'region'"></autoform-custom-field>
        <autoform-custom-field  :options.sync="ops" :field-key="'name2'"></autoform-custom-field>
         <autoform-custom-field  :options.sync="ops" :field-key="'name5'"></autoform-custom-field>
        <el-form-item style="float:right">
            <el-button type="primary">立即创建</el-button>
            <el-button @click="reset">取消</el-button>
            <el-button @click="clear">清除</el-button>
        </el-form-item>
     </template>
    </auto-form>

   {{model1}}
</div>
  
   
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      model1: {
        name: "hello~",
        region: "2",
        date1: "",
        date2: "",
        desc: "",
        type: []
      },
      layout: {
        align: "left",
        labelWidth: "100px",
        inline: false,
        span: 8,
        gutter: 50,
        cache: true,
        custom: true
      },
      fields1: [
        [
          {
            key: "name2",
            type: "input",
            templateOptions: {
              span: 8,
              label: "活动名称",
              readonly: false,
              onChange: "keyUpFn"
            },
            validators: ["required:change:请选择活动名称"],
            isWatch: true,
            value: ""
          },
          {
            key: "name5",
            type: "input",
            templateOptions: {
              span: 8,
              label: "自定义校验测试",
              readonly: false,
            },
            validators: ["chkAge"],
            isWatch: true,
            value: ""
          },
          {
            key: "name",
            type: "baifang_input",
            templateOptions: {
              span: 8,
              label: "活动名称",
              onChange: "keyUpFn"
            }
          },
          {
            key: "name1",
            type: "button",
            templateOptions: {
              span: 8,
              label: "活动名称",
              inline: true,
              className: "cece",
              hasLabel: false,
              buttonOpt: [
                {
                  value: "111",
                  size: "mini",
                  onClick: "keyUpFn",
                  type: "primary"
                },
                {
                  value: "222",
                  size: "small",
                  onClick: "sortChange",
                  type: "default"
                }
              ]
            }
          }
        ],
        [
          {
            key: "region",
            type: "select",
            templateOptions: {
              label: "活动区域",
              placeholder: "请选择活动区域",
              span: 12,
              onChange: "sortChange",
              optionKey: "value",
              multiple: false,
              initOptionsKey: "initSelectOpt",
              options: []
            },
            isWatch: true
          },
          {
            key: "date1",
            type: "datepicker",
            templateOptions: {
              label: "活动时间",
              placeholder: "选择日期",
              span: 12
            }
          }
        ],
        [
          {
            key: "date2",
            type: "timepicker",
            templateOptions: {
              label: "选择时间",
              placeholder: "选择时间",
              span: 12,
              onChange: "sortChange"
            }
          },
          {
            key: "type",
            type: "checkbox",
            templateOptions: {
              label: "活动性质",
              span: 24,
              options: [
                {
                  label: "美食/餐厅线上活动",
                  value: "美食/餐厅线上活动value"
                },
                {
                  label: "地推活动",
                  value: "地推活动value"
                },
                {
                  label: "线下主题活动",
                  value: "线下主题活动value"
                },
                {
                  label: "单纯品牌曝光",
                  value: "单纯品牌曝光value"
                }
              ],
              onChange: "sortChange"
            }
          },
          {
            key: "type2",
            type: "radio",
            templateOptions: {
              label: "活动性质RADIO",
              span: 24,
              options: [
                {
                  label: "美食/餐厅线上活动",
                  value: "美食/餐厅线上活动value"
                },
                {
                  label: "地推活动",
                  value: "地推活动value"
                },
                {
                  label: "线下主题活动",
                  value: "线下主题活动value"
                },
                {
                  label: "单纯品牌曝光",
                  value: "单纯品牌曝光value"
                }
              ]
            },
            isWatch: true
          },
          {
            key: "desc",
            type: "textarea",
            templateOptions: {
              label: "活动形式",
              onChange: "sortChange"
            },
            isWatch: true
          },
          {
            key: "typeId",
            type: "input-tree",
            templateOptions: {
              label: "品类树",
              // initOptionsKey: 'initTree'
              options: [
                {
                  name: "测试",
                  id: 1,
                  disabled: true,
                  children: [
                    {
                      name: "测试zi",
                      id: 1
                    }
                  ]
                },
                {
                  name: "测试2",
                  id: 2
                }
              ]
            }
          }
        ]
      ],
      query$: {}
    };
  },
  autoform: {
    eventBus: {
      keyUpFn() {
        console.log(11);
      }
    },
    validators: {
      chkAge(rule, value, callback) {
        if (!value) {
          return callback(new Error("年龄不能为空"));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error("请输入数字值"));
          } else {
            if (value < 18) {
              callback(new Error("必须年满18岁"));
            } else {
              callback();
            }
          }
        }, 1000);
      }
    }
  },
  methods: {
    handleChange() {
      console.log(1111111);
    },
    reset() {
      this.$refs.tagForm.resetForm();
    },
    clear() {
      this.$refs.tagForm.clearForm();
    }
  }
};
</script>

<style>

</style>
