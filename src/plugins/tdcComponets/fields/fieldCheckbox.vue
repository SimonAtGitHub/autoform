<template>
    <!-- <div :class="[ to.inputType, to.wrapperClasses]"> -->
    <el-col :span="to.span">
        <el-form-item :label="to.label" :prop="field.key" :rules="field.validators">
            <el-checkbox-group v-model="model[field.key]">
                <el-checkbox v-for="item in to.options" :key="item.value" :label="item.value">{{item.label}}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
    </el-col>
    <!-- </div> -->
</template>

<script>
import baseField from './baseField';

export default {
    mixins: [baseField],
    name: 'checkbox',
    icon: 'el-icon-edit'
};
</script>

<style>

</style>
