<script>
import * as _ from "lodash";
export default {
  props: ["options", "fieldKey"],
  mounted() {},
  methods: {},
  render(h) {
    if (!this.fieldKey) {
      console.warn("自定义组件请传入 fieldKey属性");
      return;
    }
    if (!this.options) {
      console.warn("自定义组件请传入 options属性");
      return;
    }
    let flattenFields = _.flattenDeep(this.options.fields);
    let crrtField = flattenFields.find(item => item.key === this.fieldKey);
    if (!crrtField) {
      console.warn("当前fieldKey未查找到对应的field");
      return;
    }
    return  <auto-form-field
                ref={"form_" + crrtField.key}
                model={this.options.model}
                field={crrtField}
                key={"form_" + crrtField.key}
                span={this.options.layout.span}
                inline={this.options.layout.inline}
                validLib={this.options.validLib}
                event-bus={this.options.eventBus}
            />
}
};
</script>

<style>

</style>
