
<script>
import { typeCheck } from "../utils";

export default {
  render(h) {
    let resultFn = null;
    if (this.layout.custom) {
      return (resultFn = this.jsx_custom(h));
    }
    if (this.tabs) {
      resultFn = this.jsx_tab();
    } else {
      resultFn = this.renderfield(this.fields, false);
    }

    return resultFn;
  },
  computed: {
    keys() {
      let keys = this.fields.map(item => `form_${item.type}`);
      return keys;
    }
  },
  methods: {
    isFieldArray2d(fields) {
      return fields[0] && typeCheck.isArray(fields[0]);
    },
    renderfield(fields, isTab) {
      let resultFn = null;
      if (!this.layout.inline && !this.isFieldArray2d(fields)) {
        resultFn = this.jsx_not_inline_not_2_wei(fields, isTab);
      } else if (!this.layout.inline && this.isFieldArray2d) {
        resultFn = this.jsx_not_inline_2_wei(fields, isTab);
      } else {
        resultFn = this.jsx_inline(fields, isTab);
      }
      return resultFn;
    },
    jsx_not_inline_not_2_wei(fields, isTab) {
      if (isTab) {
        return (
          <el-row gutter={this.layout.gutter}>
            {fields.map((field, fIndex) => {
              return (
                <auto-form-field
                  ref={"form_" + field.key}
                  event-bus={this.eventBus}
                  valid-lib={this.validLib}
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
      }
      return (
        <div>
          <el-row gutter={this.layout.gutter}>
            {fields.map((field, fIndex) => {
              return (
                <auto-form-field
                  ref={"form_" + field.key}
                  event-bus={this.eventBus}
                  valid-lib={this.validLib}
                  model={this.model}
                  field={field}
                  key={"form_" + field.key}
                  span={this.layout.span}
                  inline={this.layout.inline}
                  layout={this.layout}
                />
              );
            })}
            {this.$slots.default}
          </el-row>
        </div>
      );
    },
    jsx_not_inline_2_wei(fields, isTab) {
      if (isTab) {
        return (
          <div>
            {fields.map((row, index) => {
              return (
                <el-row gutter={this.layout.gutter} key={index}>
                  {row.map((field, fIndex) => {
                    return (
                      <auto-form-field
                        ref={"form_" + field.key}
                        event-bus={this.eventBus}
                        valid-lib={this.validLib}
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
      }
      return (
        <div>
          {fields.map((row, index) => {
            return (
              <el-row gutter={this.layout.gutter} key={index}>
                {row.map((field, fIndex) => {
                  return (
                    <auto-form-field
                      ref={"form_" + field.key}
                      event-bus={this.eventBus}
                      valid-lib={this.validLib}
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
          {this.$slots.default}
        </div>
      );
    },
    jsx_inline(fields, isTab) {
      if (isTab) {
        return (
          <span>
            {fields.map((field, index) => {
              return (
                <auto-form-field
                  ref={"form_" + field.key}
                  model={this.model}
                  field={field}
                  key={"form_" + field.key}
                  span={this.layout.span}
                  inline={this.layout.inline}
                  event-bus={this.eventBus}
                  valid-lib={this.validLib}
                />
              );
            })}
          </span>
        );
      }
      return (
        <span>
          {fields.map((field, index) => {
            return (
              <auto-form-field
                ref={"form_" + field.key}
                model={this.model}
                field={field}
                key={"form_" + field.key}
                span={this.layout.span}
                inline={this.layout.inline}
                event-bus={this.eventBus}
                valid-lib={this.validLib}
              />
            );
          })}
          {this.$slots.default}
        </span>
      );
    },
    jsx_tab() {
      return (
        <el-tabs
          value={this.tabs.active}
          type={this.tabs.type}
          tabPosition={this.tabs.position}
          onTab-click={this.tabClick}
        >
          {this.tabs.list.map(tabItem => {
            return (
              <el-tab-pane label={tabItem.label} name={tabItem.name}>
                {this.renderfield(this.fields[tabItem.name], true)}
              </el-tab-pane>
            );
          })}
        </el-tabs>
      );
    },
    jsx_custom(h) {
      let children = [];
      if ("default" in this.$scopedSlots) {
        let props = {
          model: this.model,
          fields: this.fields,
          layout: this.layout,
          eventBus: this.eventBus,
          validLib: this.validLib
        };

        children.push(this.$scopedSlots.default({ ...props }));
      }
      if ("default" in this.$slots) {
        children.push(this.$slots.default);
      }
      return h("div", children);
    },
    tabClick(component) {
      this.tabs.active = component.name;
      let params = {
        label: component.label,
        name: component.name
      };
      this.eventBus.$emit(this.tabs.tabClick, component, params);
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
    tabs: {
      default: {}
    },
    eventBus: {
      default: null
    },
    validLib: {
      default: {}
    }
  }
};
</script>

<style>

</style>
