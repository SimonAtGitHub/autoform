
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
        this.field["value"] = val[this.field.key];
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
      if (displayType === "boolean") {
        this.display = this.field.display;
      } else if (displayType === "function") {
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
      } else {
        this.display = true;
      }
    },
      label_jsx (vNode) {
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
          )
      },
      inline_label_jsx (vNode) {
          return (
            <el-form-item
              label={this.field.templateOptions.label}
              prop={this.field.key}
              rules={this.field.validators}
            >
              {vNode}
            </el-form-item>
          )
      },
      button_jsx (vNode) {
          return (
            <el-col
            span={this.field.templateOptions.span || this.span}
            offset={this.field.templateOptions.offset}
            >
            <div style="margin-bottom: 22px">{vNode}</div>
            </el-col>
          )
      },
      inline_button_jsx (vNode) {
          return (
              <div style="margin-bottom: 22px">{vNode}</div>
          )
      },
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
    if (this.field.templateOptions.hasLabel === false) {
      if (!this.inline) {
        return this.button_jsx(vNode);
      } else {
        return this.button_label_jsx(vNode);
      }
    } else {
      if (!this.inline) {
        return this.label_jsx(vNode);
      } else {
        return this.inline_label_jsx(vNode);
      }
    }

  },
  mounted() {
    this._dealDisplay();
    if (typeof this.field.templateOptions.initDisplay === "string") {
        this.eventBus.$on(this.field.templateOptions.initDisplay, this.__judgeDisplay);
    }
  }
};
</script>
