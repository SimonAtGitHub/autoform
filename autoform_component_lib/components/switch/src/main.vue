<template>
  <el-switch v-model="model[field.key]"
            :id="to.id ? to.id : null"
            :disabled="to.disabled"
            :width="to.width"
            :active-icon-class="to.activeIconClass"
            :inactive-icon-class="to.inactiveIconClass"
            :active-text="to.activeText"
            :inactive-text="to.inactiveText"
            :active-value="to.activeValue"
            :inactive-value="to.inactiveValue"
            :active-color="to.activeColor"
            :inactive-color="to.inactiveColor"
            :name="to.name"
            @change="onChange"
            v-form-atts="to.atts"
            v-form-input-type="to.inputType">
  </el-switch>
</template>

<script>
import basicComponent from "../../..//utils/baseField";

  export default {
    mixins: [basicComponent],
    name: "cSwitch",
    icon: "el-icon-edit",
    methods: {}
  };
</script>
