<template>
    <el-radio-group v-model="model[field.key]"
                    :disabled="to.disabled"
                    :size="to.size"
                    :text-color="to.textColor"
                    :fill="to.fill"
                    @change="onChange"
                    v-form-atts="to.atts">
        <template  v-if="to.button">
            <el-radio-button
                    v-for="item in to.options"
                    v-form-atts="item.atts"
                    :key="to.optionKey ? item[to.optionKey] : item.value"
                    :label="to.optionKey ? item[to.optionKey] : item.value">
                {{item.label}}
            </el-radio-button>
        </template>
        <template v-else>
            <el-radio
                    v-for="item in to.options"
                    v-form-atts="item.atts"
                    :disabled="item.disabled"
                    :key="to.optionKey ? item[to.optionKey] : item.value"
                    :label="to.optionKey ? item[to.optionKey] : item.value">{{item.label}}</el-radio>
        </template>
    </el-radio-group>
</template>

<script>
    import basicComponent from "../../..//utils/baseField";
    export default {
        mixins: [basicComponent],
        name: 'cRadio',
        icon: 'el-icon-share'
    };
</script>

<style>

</style>
