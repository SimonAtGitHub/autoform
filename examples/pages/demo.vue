<!--尽可能的包含更多情况-->
<template>
    <el-card>
        {{model1}}
        <auto-form ref="tagForm" :model="model1" :fields="fields1" :layout="layout">
            <el-form-item>
                <el-button type="primary" @click="submit">立即创建</el-button>
                <el-button @click="reset">取消</el-button>
                <el-button @click="clear">清除</el-button>
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
      input: 1,
      layout: {
        align: "left",
        labelWidth: "100px",
        inline: false,
        span: 8,
        gutter: 50,
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
            isWatch: true,
            value: ""
          },
          {
            key: "name11",
            type: "baifang_input",
            templateOptions: {
              span: 8,
              label: "活动名称",
              onChange: "keyUpFn"
            },
            validators: [{ required: true, message: "text", trigger: "blur" }]
          },
          {
            key: "name",
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
            validators: [{  type:"number", required: true, message: "text", trigger: "blur" }],            
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
      watch(keys, fields, model) {
        console.log(111, keys, fields, model);
      }
    }
  },
  methods: {
    submit() {
      this.$refs["tagForm"].validate(res => {
          console.log(res)

      });
    },
    handleChange() {
      console.log(1111111);
    },
    reset() {
      this.$refs.tagForm.resetForm();
    },
    clear() {
      this.$refs.tagForm.clearForm();
    }
  },
  mounted() {
    this.query$.eventBus = this.$refs.tagForm.eventBus;
    let opt = [
      {
        label: "区域一",
        value: 0
      },
      {
        label: "区域二",
        value: 1
      },
      {
        label: "区域三",
        value: 2
      }
    ];
    //            this.$nextTick(()=> {
    //                this.query$.eventBus.$emit('initSelectOpt', opt);
    //            })
    setTimeout(() => {
      this.query$.eventBus.$emit("initSelectOpt", opt);
    }, 1000);
  }
};
</script>

<style>
.cece > div {
  padding: 10px;
}
</style>
