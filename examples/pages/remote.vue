<template>
    <div>
        <auto-form ref="tagForm" :model="model6" :fields="fields8" :layout="layout6"></auto-form>
    </div>
</template>
<script>
    import {config} from '../data/config'
    export default {
        data() {
            return {
                model6: {
                    name1: "",
                    name2: ""
                },
                layout6: {
                    align: "left",
                    labelWidth: "100px",
                    inline: false,
                    gutter: 30
                },
                fields8: [
                    [
                        {
                            key: "name1",
                            type: "input",
                            templateOptions: {
                                span: 12,
                                label: "活动名称1"
                            },
                            isWatch: true
                        },
                        {
                            key: "name2",
                            type: "input",
                            templateOptions: {
                                span: 12,
                                label: "活动名称2"
                            }
                        }
                    ]
                ]
            };
        },
        autoform: {
            eventBus: {
                watch(keys, fields, model) {
                    console.log('model发生变化',keys, fields, model);
                }
            }
        },
        mounted () {
            window.setTimeout(()=>{
                this.model6 = config.model6;
                this.layout6 = config.layout6;
                this.fields8 = config.fields8;
                console.log(this.model6);
                this.model6.name1 = '123123'
            },1000)
        }
    };
</script>