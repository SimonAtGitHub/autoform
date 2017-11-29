
<template>
    <div class="autoform-block">
        <el-form ref="form" :model="vModel" :label-position="vLayout.align||'left'" :label-width="vLayout.labelWidth" :inline="vLayout.inline">
            <el-row v-if="!vLayout.inline && !isFieldArray2d" :gutter="vLayout.gutter">
                <field v-if="!vLayout.custom" :ref="'form_'+field.key" :event-bus="eventBus"  v-for="field in vFields" :model.sync="vModel" :field="field" :key="'form_'+field.key" :span.sync="vLayout.span" :inline="vLayout.inline" :layout="vLayout"></field>
            </el-row>
            <el-row v-if="!vLayout.inline && isFieldArray2d" :gutter="vLayout.gutter" v-for="row in vFields">
                <field v-if="!vLayout.custom" :ref="'form_'+field.key" :event-bus="eventBus" v-for="field in row" :model.sync="vModel" :field="field" :key="'form_'+field.key" :span.sync="vLayout.span" :inline="vLayout.inline" :layout="vLayout"></field>
            </el-row>
            <field v-if="!vLayout.custom && vLayout.inline" :ref="'form_'+field.key" v-for="field in vFields" :model.sync="vModel" :field="field" :key="'form_'+field.key" :span.sync="vLayout.span" :inline="vLayout.inline"></field>
            <slot :keys="keys"></slot>
        </el-form>
    </div>
</template>
<style scoped>
.autoform-block {
  overflow: hidden;
}
</style>
<script>
import Vue from "vue";
import {typeCheck} from '../util'

export default {
  /*eslint-disable */
  methods: {
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate(valid => {
          resolve(valid);
        });
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
    getComponents() {
      let result = Object.keys(this.$refs).reduce((res, item) => {
        res[item] = this.$refs[item][0];
        return res;
      }, {});

      return result;
    },
    _errorlint(props, msg) {
      if (!props || (Array.isArray(props) && props.length === 0)) {
        console.warn(msg);
      }
    },
    ___IS__DEV__() {
      return !!window.__AUTOFORM_DEVTOOLS_GLOBAL_HOOK__;
    },
    __DEV_TOOL__() {
      let self = this;
      window.addEventListener("message", e => {
        if (e.source === window && e.data.type === "devtool-data-update") {

          if (!this._q(self.vLayout, e.data.data.layout)) {
            self.vLayout = e.data.data.layout;
          }
          if (!this._q(self.vModel, e.data.data.model)) {
            self.vModel = e.data.data.model;
          }
          if (!this._q(self.vFields, e.data.data.fields)) {
            self.vFields = e.data.data.fields;
          }
        }
      });

      setTimeout(function() {
        const $autoForm = self.___IS__DEV__();
        if ($autoForm) {
          let data = {
            model: self.model,
            layout: self.layout,
            fields: self.fields
          };
          try {
            window.postMessage(
              {
                type: "init",
                data
              },
              "*"
            );
          } catch (e) {
            console.warn(e);
            console.error("配置文件不要写函数");
          }
        } else {
          console.log("未安装devtool");
        }
      }, 500);
    }
  },
  //props: ["model", "fields", "layout"],
  props: {
    model: {
      default: {}
    },
    fields: {
      default: []
    },
    layout: {
      default: {}
    },
    __name__: {
      default: "autoForm"
    }
  },
  data() {
    return {
      eventBus: null,
      vModel: this.model,
      vFields: this.fields,
      vLayout: this.layout
    };
  },
  computed: {
    keys() {
      let keys = {};
      this.fields.forEach(field => {
        keys[field.key] = field;
      });
      return keys;
    },
   isFieldArray2d() {
     return this.fields[0] && typeCheck.isArray(this.fields[0]);
   }
  },
  watch: {
    vModel: {
      handler(val, oldVal) {
        if (this._q(val, oldVal)) {
          return;
        }
        let self = this;
        clearTimeout(this.update_model_timer);
        this.update_model_timer = setTimeout(function() {
          window.postMessage(
            {
              type: "autoform_update_model",
              data: {
                model: val
              }
            },
            "*"
          );
        }, 500);
      },
      deep: true
    }
  },
  created() {
    //实例化 eventBus
    this.eventBus = new Vue();

    //make sure that the 'value' is always set
    this._errorlint(this.fields, "请传入fields属性");
    this._errorlint(this.layout, "请传入layout属性");
    this._errorlint(this.model, "请传入layout属性");
    this.fields.forEach(field => {
      if (typeof this.model[field.key] === "undefined")
        this.$set(this.model, field.key, "");
    });
    this.__DEV_TOOL__();
  }
};
</script>
