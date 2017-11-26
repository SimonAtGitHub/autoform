

<script>
import basicComponent from "autoform/utils/baseField";

export default {
  mixins: [basicComponent],
  name: "cInput",
  icon: "el-icon-edit",
  methods: {},
  render(h) {
    let props = {
      field: this.field,
      to: this.field.templateOptions,
      span: this.span,
      eventBus: this.eventBus,
      model: this.model,
      form: this.form
    };

    let vNode = h("el-input", {
    //   domProps: { "v-model": this.model[this.field.key] },
      attrs: {
        value: this.model[this.field.key]
      },
      props
    });
    return <span>{vNode}</span>;

    //   let vNode = h(this.type, {
    //     props
    //   });
    //   return (
    //     <el-col span={this.field.templateOptions.span || this.span} offset={this.field.templateOptions.offset}>
    //       <el-form-item
    //         label={this.field.templateOptions.label}
    //         prop={this.field.key}
    //         rules={this.field.validators}
    //       >
    //         {vNode}
    //       </el-form-item>
    //     </el-col>
    //   );
  }
};
</script>




    <!-- <el-input v-model="model[field.key]"
        :id="to.id ? to.id : null"
        :placeholder="to.placeholder"
        type="text"
        :maxlength="to.maxlength"
        :minlength="to.minlength"
        :disabled="to.disabled"
        :size="to.size"
        :prefix-icon="to.prefixIcon"
        :suffix-icon="to.suffixIcon"
        :required="to.required"
        @blur="onBlur"
        @focus="onFocus"
        @change="onChange"
        @keyup="onKeyup"
        @keydown="onKeydown"
        v-form-atts="to.atts"
        v-form-input-type="to.inputType">
    </el-input> -->