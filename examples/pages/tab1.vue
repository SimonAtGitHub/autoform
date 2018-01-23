<template>
    <div>
        <auto-form ref="tagForm1" :model="model" :fields="fields" :layout="layout" :tabs="tabs"></auto-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                model: {
                    name: "",
                    hello: "",
                    date1: ""
                },
                layout: {
                    align: "left",
                    labelWidth: "100px",
                    inline: false
                },
                fields: {
                    tab1: [
                        {
                            key: "name",
                            type: "input",
                            templateOptions: {
                                label: "审批人"
                            }
                        },
                        {
                            key: "hello",
                            type: "hello",
                            templateOptions: {
                                label: "自定义",
                                action: "handleClick"
                            }
                        }
                    ],
                    tab2: [
                        {
                            key: "date1",
                            type: "datepicker",
                            templateOptions: {
                                label: "活动时间",
                                placeholder: "选择日期",
                                span: 12
                            }
                        }
                    ]
                },
                tabs: {
                    active: "tab2",
                    list: [
                        {
                            name: "tab1",
                            label: "标题1",
                            disabled: false
                        },
                        {
                            name: "tab2",
                            label: "标题2"
                        }
                    ],
                    tabClick: "handleClick"
                }
            };
        },
        autoform: {
            eventBus: {
                handleClick(...arg) {
                    console.log(111, arg);
                }
            }
        }
    };
</script>