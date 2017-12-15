
<script>
/*eslint-disable */
import Util, { getTypes, setError, parseValidationString } from "../utils";
let __timeout = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
export default {
  props: ["layout", "model", "field", "to", "span", "inline", "eventBus"],
  computed: {
    type: function() {
      return "form_" + this.field.type;
    },
    display: function(val) {
      let displayType = typeof this.field.display;

      if (displayType !== "function" && displayType !== "string") return true;

      if (displayType === "function") {
        return this.field.display(this.field, this.model);
      } else {
          console.log(this.eventBus._events);
          if(this.eventBus._events) {
              return this.eventBus._events[this.field.display][0]();
          }
      }
    }
  },
  methods: {},
  components: getTypes(),

  render(h) {

      this.field.templateOptions = this.field.templateOptions || {};

    let props = {
      layout: this.layout,
      field: this.field,
      to: this.field.templateOptions,
      span: this.span,
      model: this.model,
      eventBus: this.eventBus
    };

    if (!this.display || !this.field.type) {
      return "";
    }

    let vNode = h(this.type, {
      props
    });

    if (!this.inline) {
      return (
        <el-col
          span={this.field.templateOptions.span || this.span}
          offset={this.field.templateOptions.offset}
        >
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
