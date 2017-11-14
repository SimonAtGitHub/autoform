<template>
     <el-col :span="field.templateOptions.span||span" v-show="display">
        <el-form-item :label="field.templateOptions.label" :prop="field.key" :rules="field.validators">
            <component  :is="type" :field="field" :model="model" :to="field.templateOptions" :span="span">
            </component>
        </el-form-item>
    </el-col>
</template>

<script>
/*eslint-disable */
import Util, { getTypes, setError, parseValidationString } from "../util";
export default {
  props: ["form", "model", "field", "to", "span"],
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
  mounted() {
    if (!this.field.wrapper) return;

    //create a temporary element
    let wrapper = document.createElement("DIV");
    //populate it with the wrapper string
    wrapper.innerHTML = this.field.wrapper;
    //get the parent
    let parent = this.$el.parentNode;
    //insert the wrapper before this element
    parent.insertBefore(wrapper, this.$el);
    //append the element to the new wrapper
    wrapper.firstChild.appendChild(this.$el);
    //move the new wrapper back to where it should be
    parent.insertBefore(wrapper.firstChild, wrapper);
    //remove the temporary element
    parent.removeChild(wrapper);
  }
};
</script>
