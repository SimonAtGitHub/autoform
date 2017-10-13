# 动态表单配置化

> 设计文档：[tdc 动态字段配置方案设计](https://wiki.sankuai.com/pages/viewpage.action?pageId=1065853261&focusedCommentId=1079089865#comment-1079089865)

> git分支：Gema/webpack2-vue

### 背景

* 对于字段较多的表单、大量的html会使逻辑和视图复杂臃肿


### 成果

* 将常用表单类型（input/textarea/checkbox...）抽离组件
* 支持自定义组件
* 实现json -> 表单

### 框架

* vue
* element-ui

## 使用

* TDC项目中demo分支：`Gema/webpack2-vue`
* 本地地址：http://localhost:8899/hfe/index.html#/test/test

### Schema：
调用Autoform组件，需传入三个参数：

* model
* fields
* layout

例如：
```
<auto-form ref="testForm" :model="model" :fields="fields" :layout="layout">
//slot:组件内部可传入元素内容
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button @click="onResetForm()">取消</el-button>
  </el-form-item>
</auto-form>
```

model:
需要创建双向绑定的数据
```
model: {
    name: '',
    email: ''
    }
```

fields:
对表单控件的配置

```
fields: [
                {
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        label: '活动名称',
                        atts: {kek:123}
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
                }
]
```

各个参数说明：

* key:model字段
* type:组件种类
* templateOptions:组件内部变量（视各子组件内部而定）
* validators:校验（规则同Element Form）

layout:
显示配置
```
layout: {
                align: 'letf',
                labelWidth: '100px',
                custom: false,
                inline: false,
                span: 12
            }
```
各个参数说明：

* align:表单域标签的位置('right/left/top')
* labelWidth:表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值
* custom:是否需要自定义表单内容，替代AutoForm(false/true)
* inline:行内表单模式(false/true)
* span:Grid

### 子组件

#### 添加新组件
* 在`src/vhfe/plugins/tdcComponets/fields`文件夹下
* 添加新文件格式：`field`+组件名，例如：`src/vhfe/plugins/tdcComponets/fields/fieldInputTree.vue`

#### 子组件内可调用的参数

```
//src/vhfe/plugins/tdcComponets/fields/baseField
props: [
            'form',
            'field', //表单配置内容
            'model', //绑定数据
            'to',  //field[i].templateOptions
            'span' //element 24 Grid
        ],
```

#### 使用组件
在fields配置中，`fields[i].type = '组件名称'`，例如：
```
fields: [
            {
                key: 'type',
                type: 'inputTree',
                templateOptions: {
                    label: '活动性质'
                }
            }
            ]
```
