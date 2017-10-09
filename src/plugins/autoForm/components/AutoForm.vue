
<template>
    <div>
        <el-form ref="form" :model="model" :label-position="align||'left'" :label-width="labelWidth" :inline="inline">
            <el-row>
                <field v-if="!customLayout" :ref="field.key" v-for="field in fields" :form.sync="form" :model.sync="model" :field="field" :key="'form_'+field.key" :span="span"></field>
            </el-row>
            <slot :keys="keys"></slot>
        </el-form>
    </div>
</template>

<script>
    export default {
        /*eslint-disable */
        methods: {
            validate() {
                return new Promise((resolve, reject) => {
                    this.$refs.form.validate(valid => {
                        if (valid) {
                            resolve();
                        } else {
                            reject();
                        }
                    })
                });
            },
            resetForm() {
                this.$refs.form.resetFields();
            }
        },
        props: ['form', 'model', 'fields', 'customLayout', 'align', 'labelWidth', 'inline', 'span'],
        computed: {
            keys() {
                let keys = {};
                this.fields.forEach(field => {
                    keys[field.key] = field;
                });
                return keys;
            }
        },
        created() {
            //make sure that the 'value' is always set
            this.fields.forEach(field => {
                if (typeof this.model[field.key] === 'undefined') this.$set(this.model, field.key, '');
            });
        }
    };
</script>
