<template>
    <div>
        <el-input v-model="model[field.key]" placeholder="请输入内容"></el-input>
    </div>
</template>
<script>
    import {baseField} from "@hfe/autoform";
    
    export default {
        mixins: [baseField],
        data () {
            return {
                input: ''
            };
        },
        methods: {}
    };
</script>