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

### 使用
目前在TDC项目中使用，demo分支：`Gema/webpack2-vue`,本地地址：http://localhost:8899/hfe/index.html#/test/test


介绍其中的schema：

Autoform直接调用，需传入三个参数：
* model
* fields
* layout

```
<auto-form ref="testForm" :model="model" :fields="fields" :layout="layout">
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
* templateOptions:组件内部变量（视各子组件内部而定）
* validators:校验（规则同Element Form）

#### 子组件：

添加新组件：
在`src/vhfe/plugins/tdcComponets/fields`,添加新文件,格式例如：`src/vhfe/plugins/tdcComponets/fields/fieldInputTree.vue`,`field`+组件名

参数传递：
```
//src/vhfe/plugins/tdcComponets/fields/baseField
props: [
            'form',
            'field', //表单配置内容
            'model', //绑定数据
            'to',  //field[i].templateOptions
            'span' //element 24 Grid
        ],
```

使用组件：
在fields数组中，
`fields[i].type = '组件名称'`
