<template>
    <!-- <div :class="[ to.inputType, to.wrapperClasses]"> -->
    <el-col :span="to.span">
        <el-form-item :label="to.label" :prop="field.key" :rules="field.validators">
            <el-date-picker type="date" v-model="model[field.key]" ></el-date-picker>
        </el-form-item>
         </el-col>
    <!-- </div> -->
</template>

<script>
import baseField from './baseField';

export default {
    mixins: [baseField],
    name: 'datepicker',
    icon: 'el-icon-date'
};
</script>

<style>

</style>
