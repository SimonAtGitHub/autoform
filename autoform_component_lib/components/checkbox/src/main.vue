<template>
    <el-checkbox-group v-model="model[field.key]"
                       :size="to.size"
                       :disabled="to.disabled"
                       :min="to.min"
                       :max="to.max"
                       :text-color="to.textColor"
                       :fill="to.fill"
                       @change="onEmuChange">
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
    import basicComponent from "autoform/utils/baseField";
    export default {
        mixins: [basicComponent],
        name: 'cCheckbox',
        icon: 'el-icon-edit',
        data() {
            return {
                options: []
            };
        },
        created() {
            if (this.to.options) {
                this.options = this.to.options;
            }
        },
        watch: {
            to(val) {
                if (val.options) {
                    this.options = val.options;
                }
            }
        },
        methods: {
            //label  value
            initOptions(ds) {
                this.options = ds;
            }
        },
        mounted() {
            if (typeof this.to.initOptionsKey === "string") {
                this.eventBus.$on(this.to.initOptionsKey, this.initOptions);
            }
        }
    };
</script>

<style>

</style>
