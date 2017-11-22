<template>
    <el-checkbox-group v-model="model[field.key]"
                       :size="to.size"
                       :disabled="to.disabled"
                       :min="to.min"
                       :max="to.max"
                       :text-color="to.textColor"
                       :fill="to.fill"
                       @change="onChange">
        <el-checkbox v-for="item in to.options"
                     :label="to.optionKey ? item[to.optionKey] : item.value"
                     :key="to.optionKey ? item[to.optionKey] : item.value"
                     :disabled="item.disabled"
                     :checked="item.checked"
                     :border="to.border"
                     :required="to.required">
            {{item.label}}
        </el-checkbox>
    </el-checkbox-group>
</template>

<script>
    import basicComponent from "../../..//utils/baseField";


    export default {
        mixins: [basicComponent],
        name: 'cCheckbox',
        icon: 'el-icon-edit'
    };
</script>

<style>

</style>
