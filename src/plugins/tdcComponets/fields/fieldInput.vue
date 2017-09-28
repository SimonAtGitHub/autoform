<template>
  <!-- <div :class="[ to.inputType, to.wrapperClasses]"> -->
    <el-col :span="to.span">
    <el-form-item :label="to.label" :prop="field.key" :rules="field.validators">
      <el-input v-model="model[field.key]" :id="to.id ? to.id : null" type="text" @blur="onBlur" @focus="onFocus" @click="onClick" @change="onChange" @keyup="onKeyup" @keydown="onKeydown" v-form-atts="to.atts" v-form-input-type="to.inputType"></el-input>
    </el-form-item>
     </el-col>
  <!-- </div> -->
</template>

<script>
import baseField from './baseField';
export default {
    mixins: [baseField],
    name: 'input',
    icon: 'el-icon-edit',
    methods: {
    }
};
</script>