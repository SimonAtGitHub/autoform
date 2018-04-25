<template>
    <el-radio-group v-model="model[field.key]"
                    :disabled="to.disabled"
                    :size="to.size"
                    :text-color="to.textColor"
                    :fill="to.fill"
                    @change="onEmuChange"
                    v-form-atts="to.atts">
        <template v-if="to.button">
            <el-radio-button
                    v-for="item in options"
                    v-form-atts="item.atts"
                    :key="to.optionKey ? item[to.optionKey] : item.value"
                    :label="to.optionKey ? item[to.optionKey] : item.value">
                {{item.label}}
            </el-radio-button>
        </template>
        <template v-else>
            <el-radio
                    v-for="item in options"
                    v-form-atts="item.atts"
                    :disabled="item.disabled"
                    :key="to.optionKey ? item[to.optionKey] : item.value"
                    :label="to.optionKey ? item[to.optionKey] : item.value">{{item.label}}
            </el-radio>
        </template>
    </el-radio-group>
</template>

<script>
    import basicComponent from "autoform/utils/baseField";

    export default {
        mixins: [basicComponent],
        name: "cRadio",
        icon: "el-icon-share",
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
