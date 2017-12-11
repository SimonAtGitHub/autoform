<template>
    <el-input v-model="model[field.key]"
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
        :readonly="to.readonly"
        @blur="onBlur"
        @focus="onFocus"
        @change="onChange"
        @keyup="onKeyup"
        @keydown="onKeydown"
        v-form-atts="to.atts"
        v-form-input-type="to.inputType">
    </el-input>
</template>

<script>
import basicComponent from "autoform/utils/baseField";

export default {
  mixins: [basicComponent],
  name: "cInput",
  icon: "el-icon-edit",
  methods: {}
};
</script>
