<template>
    <el-time-picker type="fixed-time" v-model="model[field.key]"></el-time-picker>
</template>

<script>
import basicComponent from "../../..//utils/baseField";
export default {
    mixins: [basicComponent],
    name: 'cTimepicker',
    icon: 'el-icon-edit'
};
</script>
