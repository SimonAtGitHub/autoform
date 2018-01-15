<template>
    <div>
        <auto-form ref="tagForm1" :model="model" :fields="fields" :layout="layout">
            <el-form-item>
                <el-button type="primary">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </auto-form>
    </div>
</template>
<script>
import Vue from "vue";

Vue.directive("demo", {
  bind: function(el, binding, vnode) {
    console.log(el);
    var s = JSON.stringify;
    el.innerHTML =
      "name: " +
      s(binding.name) +
      "<br>" +
      "value: " +
      s(binding.value) +
      "<br>" +
      "expression: " +
      s(binding.expression) +
      "<br>" +
      "argument: " +
      s(binding.arg) +
      "<br>" +
      "modifiers: " +
      s(binding.modifiers) +
      "<br>" +
      "vnode keys: " +
      Object.keys(vnode).join(", ");
  }
});

export default {
  data() {
    return {
      model: {
        name: "",
        hello: ""
      },
      layout: {
        align: "left",
        labelWidth: "100px",
        inline: false
      },
      fields: [
        {
          key: "name",
          type: "input",
          templateOptions: {
            label: "审批人",
            atts: { "v-demo:foo.a.b": "model" }
          }
        },
        {
          key: "hello",
          type: "hello",
          templateOptions: {
            label: "自定义"
          }
        }
      ]
    };
  }
};
</script>
