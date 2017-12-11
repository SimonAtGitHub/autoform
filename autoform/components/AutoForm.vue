<style scoped>
.autoform-block {
  overflow: hidden;
}
</style>
<script>
import { typeCheck } from "../utils";
import EventBus from "../utils/eventBus";

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
          if (!this._q(self.vModel, e.data.data.model)) {
            self.vModel = e.data.data.model;
          }
          if (!this._q(self.vFields, e.data.data.fields)) {
            self.vFields = e.data.data.fields;
          }

          if (!this._q(self.vLayout, e.data.data.layout)) {
            //如果是inline并且为二维数组要变回来
            if (
              e.data.data.layout.inline !== self.vLayout.inline &&
              e.data.data.layout.inline === false &&
              self.___oldFields
            ) {
              self.vFields = self.___oldFields;
            } else if (
              e.data.data.layout.inline !== self.vLayout.inline &&
              e.data.data.layout.inline === true
            ) {
              self.vLayout.inline = true;
              self._inline_flat_FieldArray();
            }
            self.vLayout = e.data.data.layout;
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
//            console.warn(e);
            console.warn("配置文件不要写函数");
          }
        } else {
          console.log("未安装devtool");
        }
      }, 500);
    },
    _inline_flat_FieldArray() {
      if (this.vLayout.inline && this.isFieldArray2d) {
        //如果是 inline 就打平 二维数组
        let cpFields = [...this.vFields];

        this.___oldFields = cpFields;
        let flatMap = [];
        flatMap = cpFields.reduce((result, item) => {
          result = result.concat(item);
          return result;
        }, []);
        this.vFields = flatMap;
      }
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
    },
    vFields: {
      handler(val, oldVal) {
        if (this._q(val, oldVal)) {
          return;
        }
        let self = this;
        clearTimeout(this.update_fields_timer);
        this.update_fields_timer = setTimeout(function() {
          window.postMessage(
            {
              type: "autoform_update_fields",
              data: {
                fields: val
              }
            },
            "*"
          );
        }, 500);
      },
      deep: true
    }
  },
  mounted() {},
  created() {
    this._inline_flat_FieldArray();

    //实例化 eventBus
    // this.eventBus = new Vue();

    this.eventBus = EventBus();

    //make sure that the 'value' is always set
    this._errorlint(this.fields, "请传入fields属性");
    this._errorlint(this.layout, "请传入layout属性");
    this._errorlint(this.model, "请传入layout属性");
    this.fields.forEach(field => {
      if (typeof this.model[field.key] === "undefined")
        this.$set(this.model, field.key, "");
    });
    this.__DEV_TOOL__();
  },
  render(h) {
    //     <template>
    //     <div class="autoform-block">
    //         <el-form ref="form" :model="vModel" :label-position="vLayout.align||'left'" :label-width="vLayout.labelWidth" :inline="vLayout.inline">
    //             <el-row v-if="!vLayout.inline && !isFieldArray2d" :gutter="vLayout.gutter">
    //                 <field v-if="!vLayout.custom" :ref="'form_'+field.key" :event-bus="eventBus"  v-for="field in vFields" :model.sync="vModel" :field="field" :key="'form_'+field.key" :span.sync="vLayout.span" :inline="vLayout.inline" :layout="vLayout"></field>
    //             </el-row>
    //             <el-row v-if="!vLayout.inline && isFieldArray2d" :gutter="vLayout.gutter" v-for="(row, index) in vFields" :key="index" >
    //                 <field v-if="!vLayout.custom" :ref="'form_'+field.key" :event-bus="eventBus" v-for="field in row" :model.sync="vModel" :field="field" :key="'form_'+field.key" :span.sync="vLayout.span" :inline="vLayout.inline" :layout="vLayout"></field>
    //             </el-row>
    //             <field v-if="!vLayout.custom && vLayout.inline" :ref="'form_'+field.key" v-for="field in vFields" :model.sync="vModel" :field="field" :key="'form_'+field.key" :span.sync="vLayout.span" :inline="vLayout.inline"></field>
    //             <slot :keys="keys"></slot>
    //         </el-form>
    //     </div>
    // </template>

    return (
      <div class="autoform-block">
        <el-form
          ref="form"
          model={this.vModel}
          label-position={this.vLayout.align || "left"}
          label-width={this.vLayout.labelWidth}
          inline={this.vLayout.inline}
        >
          <auto-form-layout
            model={this.vModel}
            layout={this.vLayout}
            fields={this.vFields}
            eventBus={this.eventBus}
          />
        </el-form>
      </div>
    );
  }
};
</script>
