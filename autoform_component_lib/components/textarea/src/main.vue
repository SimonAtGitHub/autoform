<template>
    <el-input type="textarea" v-model="model[field.key]"></el-input>
</template>

<script>
import basicComponent from "autoform/utils/baseField";
export default {
    mixins: [basicComponent],
    name: 'cTextarea',
    icon: 'el-icon-edit'
};
</script>

<style>

</style>
