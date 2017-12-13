
<script>
import { typeCheck } from "../utils";

export default {
  render(h) {
    let resultFn = null;
    if (this.layout.custom) {
      resultFn = this.jsx_custom_layout;
    } else if (
      !this.layout.custom &&
      !this.layout.inline &&
      !this.isFieldArray2d
    ) {
      resultFn = this.jsx_not_inline_not_2_wei;
    } else if (
      !this.layout.custom &&
      !this.layout.inline &&
      this.isFieldArray2d
    ) {
      resultFn = this.jsx_not_inline_2_wei;
    } else {
      resultFn = this.jsx_inline;
    }

    return resultFn();
  },
  computed:{
    isFieldArray2d() {
      return this.fields[0] && typeCheck.isArray(this.fields[0]);
    }
  },
  methods: {
    jsx_custom_layout() {
      return <slot keys={this.keys} event-bus={this.eventBus} />;
    },
    jsx_not_inline_not_2_wei() {
      return (
        <el-row gutter={this.layout.gutter}>
          {this.fields.map((field, fIndex) => {
            return (
              <auto-form-field
                ref={"form_" + field.key}
                event-bus={this.eventBus}
                model={this.model}
                field={field}
                key={"form_" + field.key}
                span={this.layout.span}
                inline={this.layout.inline}
                layout={this.layout}
              />
            );
          })}
        </el-row>
      );
    },
    jsx_not_inline_2_wei() {
      return (
        <div>
          {this.fields.map((row, index) => {
            return (
              <el-row gutter={this.layout.gutter} key={index}>
                {row.map((field, fIndex) => {
                  return (
                    <auto-form-field
                      ref={"form_" + field.key}
                      event-bus={this.eventBus}
                      model={this.model}
                      field={field}
                      key={"form_" + field.key}
                      span={this.layout.span}
                      inline={this.layout.inline}
                      layout={this.layout}
                    />
                  );
                })}
              </el-row>
            );
          })}
        </div>
      );
    },
    jsx_inline() {
      return (
        <span>
          {this.fields.map((field, index) => {
            return (
              <auto-form-field
                ref={"form_" + field.key}
                model={this.model}
                field={field}
                key={"form_" + field.key}
                span={this.layout.span}
                inline={this.layout.inline}
                event-bus={this.eventBus}
              />
            );
          })}
        </span>
      );
    }
  },
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
    eventBus: {
      default: null
    }
  }
};
</script>

<style>

</style>
