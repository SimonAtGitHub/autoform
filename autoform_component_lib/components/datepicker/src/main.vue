<template>
    <el-date-picker
        :type="to.type"
        :range-separator="to.rangeSeparator"
        :default-value="to.defaultVale"
        :placeholder="to.placeholder"
        :start-placeholder="to.startPlaceholder"
        :end-placeholder="to.endPlaceholder"
        :unlink-panels="to.unlinkPanels"
        :format="to.format"
        :required="to.required"
        v-model="model[field.key]">
        </el-date-picker>
</template>

<script>
import basicComponent from "../../..//utils/baseField";


export default {
  mixins: [basicComponent],
    name: 'cDatepicker',
    icon: 'el-icon-date',
    props: {
        type: {
            type: String,
            default: 'date'
        },
        rangeSeparator: {
            type: String,
            default: '至'
        }
    }
};
</script>

<style>

</style>
