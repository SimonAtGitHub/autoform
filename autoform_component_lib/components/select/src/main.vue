<template>
    <el-select  style="width:100%"
                v-model="model[field.key]"
                :placeholder="to.placeholder"
                :id="to.id ? to.id : null" type="text"
                :multiple="to.multiple"
                :disabled="to.disabled"
                :clearable="to.clearable"
                :filterable="to.filterable"
                :required="to.required"
                :size="to.size"
                :collapse-tags="to.collapseTags"
                :multiple-limit="to.multipleLimit"
                :name="to.name"
                :allow-create="to.allowCreate"
                :remote="to.remote"
                :remote-method="remoteMethod"
                :loading="to.loading"
                :loading-text="to.loadingText"
                :no-match-text="to.noMatchText"
                :no-data-text="to.noDataText"
                :popper-class="to.popperClass"
                :reserve-keyword="to.reserveKeyword"
                :default-first-option="to.defaultFirstOption"
                @filter-method="to.filterMethod ? to.filterMethod : null"
                @blur="onBlur"
                @focus="onFocus"
                @change="onEmuChange"
                @keyup="onKeyup"
                @keydown="onKeydown"
                v-form-atts="to.atts"
                v-form-input-type="to.inputType">
        <template v-if="to.group">
            <el-option-group
                    v-for="group in options"
                    :key="group.label"
                    :disabled="group.disabled"
                    :label="group.label">
                <el-option
                        v-for="item in group.options"
                        :key="item.value"
                        :label="item.label"
                        :value="to.optionKey ? item[to.optionKey] : item.value">
                </el-option>
            </el-option-group>
        </template>
        <template v-else>
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :disabled="item.disabled"
                       :value="to.optionKey ? item[to.optionKey] : item.value">
            </el-option>
        </template>

    </el-select>
</template>

<script>
    import basicComponent from "autoform/utils/baseField";
    export default {
        mixins: [basicComponent],
        name: 'cSelect',
        icon: 'el-icon-edit',
        data () {
            return { options: [] };
        },
        created () {
            if (this.to.options) {
                this.options = this.to.options;
            }
        },
        methods: {
            //label  value
            initOptions (ds) {
                this.options = ds;
            },
            remoteMethod () {
                console.log(this.eventBus);
            }
        }

    };
</script>

<style>

</style>
