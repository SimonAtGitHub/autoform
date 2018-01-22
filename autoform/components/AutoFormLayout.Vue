
<script>
import { typeCheck } from "../utils";

export default {
  render(h) {
    let resultFn = null;
    if(this.tabs) {
      resultFn = this.jsx_tab;
    }else if (!this.layout.inline && !this.isFieldArray2d) {
      resultFn = this.jsx_not_inline_not_2_wei;
    } else if (!this.layout.inline && this.isFieldArray2d) {
      resultFn = this.jsx_not_inline_2_wei;
    } else {
      resultFn = this.jsx_inline;
    }

    return resultFn();
  },
  computed: {
    isFieldArray2d() {
      return this.fields[0] && typeCheck.isArray(this.fields[0]);
    }
  },
  methods: {
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
          {this.$slots.default}
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
          {this.$slots.default}
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
          {this.$slots.default}
        </span>
      );
    },
    jsx_tab () {
        return (
          <el-tabs v-model={this.tabs.active} type={this.tabs.type} tabPosition={this.tabs.position} onTab-click={this.tabClick}>
          {
              this.tabs.list.map((tabItem) => {
                return (
                      <el-tab-pane label={tabItem.label} name={tabItem.name}>
                        {this.fields[tabItem.name].map((field, index) => {
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
                      </el-tab-pane>
                )
              })

          }
          </el-tabs>
      )
    },
      tabClick (e) {
        console.log(123)
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
    }
  }
};
</script>

<style>

</style>
