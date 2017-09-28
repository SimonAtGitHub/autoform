<template>
    <!-- <div :class="[ to.inputType, to.wrapperClasses]"> -->
    <el-col :span="to.span">
        <el-form-item :label="to.label" :prop="field.key" :rules="field.validators">
            <el-radio-group v-model="model[field.key]">
                <el-radio
                          v-for="item in to.options" :key="item.value"
                          :label="item.value">{{item.label}}</el-radio>
            </el-radio-group>
        </el-form-item>
         </el-col>
    <!-- </div> -->
</template>

<script>
import baseField from './baseField';

export default {
    mixins: [baseField],
    name: 'radio',
    icon: 'el-icon-share'
};
</script>

<style>

</style>
