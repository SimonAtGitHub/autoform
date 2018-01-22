<template>
    <div>
        <auto-form ref="tagForm1" :model="model" :fields="fields" :layout="layout"></auto-form>
    </div>
</template>
<script>
    export default {
        data() {
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
                        }
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
</script>