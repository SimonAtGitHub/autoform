<template>
    <div>
        <el-popover :ref="'treePopover'" placement="bottom-start" width="300" trigger="hover">
            <div class="tree-control">
                <el-tree class="filter-tree" :data="data" :props="defaultProps" @node-click="onNodeClick" highlight-current>
                </el-tree>
            </div>
        </el-popover>
        <el-input v-show="false" v-model="model[field.key]" :id="to.id ? to.id : null"></el-input>
        <el-input v-popover:treePopover v-show="true" v-bind:readonly="true" v-model="label" :placeholder="to.placeholder" type="text" @blur="onBlur" @focus="onFocus" @click="onClick" @change="onChange" @keyup="onKeyup" @keydown="onKeydown" v-form-atts="to.atts" v-form-input-type="to.inputType"></el-input>
    </div>
</template>

<script>
import basicComponent from "../../..//utils/baseField";
export default {
    mixins: [basicComponent],
    name: 'cInput-tree',
    icon: 'el-icon-edit',
    data () {
        return {
            label: '',
            data: [
            ],
            defaultProps: {
                children: 'children',
                label: 'name'
            }
        };
    },
    methods: {
        onNodeClick (data, node, tree) {
            this.model[this.field.key] = data.id;
            this.label = data[this.defaultProps.label];
        },
        initTree (ds) {
            this.data = ds;
        }
    }
};
</script>

<style scoped>
.tree-control{
    max-height:300px;
    overflow-y: scroll;
}
</style>
