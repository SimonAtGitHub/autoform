<!--用于测试自定义组件事件-->
<template>
    <div>
        <auto-form ref="tagForm1" :model="model" :fields="fields" :layout="layout"></auto-form>
    </div>
</template>
<script>
    export default {
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            return {
                model: {
                    name: '',
                    hello: ''
                },
                layout: {
                    align: 'left',
                    labelWidth: '100px',
                    inline: false
                },
                fields: [
                    {
                        key: 'name',
                        type: 'input',
                        templateOptions: {
                            label: '审批人'
                        }
                    },
                    {
                        key: 'hello',
                        type: 'hello',
                        templateOptions: {
                            label: '自定义',
                            action: 'handleClick'
                        },
                        validators: [
                            { required: true, message: '请输入活动名称', trigger: 'blur' },
                            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
                            { validator: checkAge, trigger: 'change' }
                        ]
                    },
                ]
            };
        },
        methods:{
            reset () {
                console.log(this.$refs.tagForm1);
                this.$refs.tagForm1.$refs.form.resetFields();
            }
        },
        autoform: {
            eventBus: {
                handleClick(...arg) {
                    console.log(arg);
                    this.reset();
                }
            }
        }
    };
    let validateFnLib = {
        checkAge (rule, value, callback) {
            if (value < 18) {
                callback(new Error('错误原因'));
            } else {
                callback();
            }
        }
    }
</script>