
<script>
/*eslint-disable */
import Util, { getTypes, setError, parseValidationString } from "../utils";

export default {
  props: ["layout", "model", "field", "to", "span", "inline", "eventBus"],
  computed: {
    type: function() {
      return "form_" + this.field.type;
    }
  },
  data() {
    return {
      display: false
    };
  },
  watch: {
    model: {
      handler: function(val, oldVal) {
        this._dealDisplay();
        this.field['value'] = val[this.field.key];
      },
      deep: true
    }
  },
  methods: {
    __judgeDisplay(val) {
      if (val) {
        this.display = true;
      } else {
        this.display = false;
      }
    },
    _dealDisplay() {
      let displayType = typeof this.field.display;
      if (displayType !== "function" && displayType !== "string") {
        this.display = true;
      }
      if (displayType === "function") {
        this.field.display(this.field, this.model, this.__judgeDisplay);
      } else if (displayType === "string") {
        this.$nextTick(() => {
          this.eventBus.$emit(
            this.field.display,
            this.field,
            this.model,
            this.__judgeDisplay
          );
        });
      }
    }
  },
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
  },
  mounted() {
    this._dealDisplay();
  }
};
</script>
