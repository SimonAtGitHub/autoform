
<template>
    <div class="autoform-block">
        <el-form ref="form" :model="model" :label-position="layout.align||'left'" :label-width="layout.labelWidth" :inline="layout.inline">
            <el-row v-if="!layout.inline" :gutter="layout.gutter">
                <field v-if="!layout.custom" :ref="'form_'+field.key" :event-bus="eventBus"  v-for="field in fields" :model.sync="model" :field="field" :key="'form_'+field.key" :span.sync="layout.span" :inline="layout.inline"></field>
            </el-row>
            <field v-if="!layout.custom && layout.inline" :ref="'form_'+field.key" v-for="field in fields" :model.sync="model" :field="field" :key="'form_'+field.key" :span.sync="layout.span" :inline="layout.inline"></field>
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


import EventBus from '../utils/eventBus';

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
    __name__:{
      default:"autoForm",
    }
  },
  data() {
    return {
      eventBus: null
    };
  },
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
    //实例化 eventBus

    if(EventBus()){
      this.eventBus = EventBus();
    }else{
      console.warn('请注册 eventBus')
    }

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
