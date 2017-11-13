
<template>
    <div>
        <el-form ref="form" :model="model" :label-position="layout.align||'left'" :label-width="layout.labelWidth" :inline="layout.inline">
            <field v-if="!layout.custom" :ref="'form_'+field.key" v-for="field in fields" :model.sync="model" :field="field" :key="'form_'+field.key" :span.sync="layout.span"></field>
            <slot :keys="keys"></slot>
        </el-form>
    </div>
</template>

<script>
export default {
  /*eslint-disable */
  methods: {
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate(valid => {
          if (valid) {
            resolve();
          } else {
            reject();
          }
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
      if (!props) {
        console.error(msg);
      }
    }
  },
  props: ["model", "fields", "layout"],
  computed: {
    keys() {
      let keys = {};
      this.fields.forEach(field => {
        keys[field.key] = field;
      });
      return keys;
    }
  },
  created() {
    //make sure that the 'value' is always set
    this._errorlint(this.fields, "请传入fields属性");
    this._errorlint(this.layout, "请传入layout属性");
    this._errorlint(this.model, "请传入layout属性");
    this.fields.forEach(field => {
      if (typeof this.model[field.key] === "undefined")
        this.$set(this.model, field.key, "");
    });
  }
};
</script>
