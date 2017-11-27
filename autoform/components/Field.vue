
<script>
/*eslint-disable */
import Util, { getTypes, setError, parseValidationString } from "../util";
export default {
  props: [ "layout", "model", "field", "to", "span", "inline", "eventBus"],
  computed: {
    type: function() {
      return "form_" + this.field.type;
    },
    display: function() {
      // always show if there is no conditional display
      let displayType = typeof this.field.display;
      if (displayType !== "function" && displayType !== "string") return true;

      if (displayType === "function") {
        return this.field.display(this.field, this.model);
      } else {
        let result = new Function(
          "field",
          "model",
          "return " + this.field.display + ";"
        );
        return result.call({}, this.field, this.model);
      }
    }
  },
  methods: {},
  components: getTypes(),
  created() {
    // this.validate();
    // this.$watch(function() {
    //     return this.model[this.field.key];
    // }, (val) => {
    //     this.validate();
    // });
  },

  // :is="type" :field="field" :model="model" :to="field.templateOptions" :span="span">
  render(h) {
    let props = {
      layout: this.layout,
      field: this.field,
      to: this.field.templateOptions,
      span: this.span,
      model: this.model,
      eventBus:this.eventBus
    };

    let vNode = h(this.type, { props });

    if (!this.display) {
      return "";
    }

    if (!this.inline) {
      let vNode = h(this.type, {
        props
      });

      return (
        <el-col span={this.field.templateOptions.span || this.span} offset={this.field.templateOptions.offset}>
          <el-form-item
            label={this.field.templateOptions.label}
            prop={this.field.key}
            rules={this.field.validators}
          >
            {vNode}
          </el-form-item>
        </el-col>
      );
    } else {
      return (
        <el-form-item
          label={this.field.templateOptions.label}
          prop={this.field.key}
          rules={this.field.validators}
        >
          {vNode}
        </el-form-item>
      );
    }
  }
};
</script>
