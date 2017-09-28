<template>
    <!-- <div :class="[ to.inputType, to.wrapperClasses]"> -->

    <el-col :span="to.span">
        <el-form-item :label="to.label" :prop="field.key" :rules="field.validators">
            <el-input type="textarea" v-model="model[field.key]"></el-input>
        </el-form-item>
 </el-col>
    <!-- </div> -->
</template>

<script>
import baseField from './baseField';

export default {
    mixins: [baseField],
    name: 'textarea',
    icon: 'el-icon-edit'
};
</script>

<style>

</style>
