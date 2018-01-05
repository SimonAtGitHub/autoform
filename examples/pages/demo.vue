


<template>
    <el-card>
        <auto-form ref="tagForm" :model="model1" :fields="fields1" :layout="layout" watchChange="watch">
            <el-form-item>
                <el-button type="primary">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </auto-form>
    </el-card>
</template>

<script>
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
        gutter: 50
      },
      fields1: [
        [
          {
            key: "name",
            type: "input",
            templateOptions: {
              span: 12,
              label: "活动名称",
              readonly: false,
                onChange: 'keyUpFn'
            },
              isWatch: true,
              value: ''
          },
          {
            key: "name",
            type: "hello",
            templateOptions: {
              span: 12,
              label: "活动名称"
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
              options: [
                {
                  label: "区域一",
                  value: "1"
                },
                {
                  label: "区域二",
                  value: "2"
                },
                {
                  label: "区域三",
                  value: "3"
                }
              ],
              filterMethod: "",
              onChange: "sortChange",
              optionKey: "value",
              multiple: false
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
              isWatch: true,
          }
        ]
      ]
    };
  },
  autoform: {
    eventBus: {
      sortChange(e, item, th) {
        console.log(this);
        console.log(e, item, th);
      },
        keyUpFn(e, item) {
            console.log(e, item);
        },
      ssssss(model, field, cb) {
//          console.log(111,model,field);
        cb(false);
      },
        watch(keys,fields,model) {
          console.log(111,keys,fields,model);
      }
    }
  }
};
</script>

<style>

</style>
