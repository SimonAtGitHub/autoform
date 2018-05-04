#动态表单 &middot; [![npm version](https://img.shields.io/npm/v/charlie-autoform.svg?style=flat-square)](https://www.npmjs.com/package/charlie-autoform)

## Docs

[Read docs](https://charlielau.github.io/autoform/#/component/autoform-install).

## 安装

### npm 安装

```shell  
npm i @hfe/autoform @hfe/autoform_component_lib -S
```


### 使用
在VUE的入口文件，添加如下配置：

```js
import AutoForm from '@hfe/autoform';
import AutoForm_component_lib from '@hfe/autoform_component_lib';

Vue.use(AutoForm);
Vue.use(AutoForm_component_lib);
```

### Demo
```html
<template>
    <div>
        <auto-form ref="tagForm2" :model="model2" :fields="fields2" :layout="layout2">
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </auto-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        model2: {
          name: '',
          type: []
        },
        layout2: {
          align: 'left',
          labelWidth: '100px',
          custom: false,
          inline: true
        },
        fields2: [
          {
            key: 'name',
            type: 'input',
            templateOptions: {
              label: '审批人'
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
              ],
              filterMethod: () => {}
            }
          }
        ]
      };
    }
  };
</script>
```
