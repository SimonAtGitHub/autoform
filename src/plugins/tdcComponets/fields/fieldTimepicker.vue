<template>
    <!-- <div :class="[ to.inputType, to.wrapperClasses]"> -->
    <el-col :span="to.span">
        <el-form-item :label="to.label" :prop="field.key" :rules="field.validators">
            <el-time-picker type="fixed-time" v-model="model[field.key]"></el-time-picker>
        </el-form-item>
    </el-col>
    <!-- </div> -->
</template>

<script>
import baseField from './baseField';

export default {
    mixins: [baseField],
    name: 'timepicker',
    icon: 'el-icon-edit'
};
</script>
