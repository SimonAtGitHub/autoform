<template>
    <div>
        <auto-form ref="tagForm5" :model="model3" :fields="fields5" :layout="layout4"></auto-form>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                model3: {
                    name: '',
                    status: ''
                },
                layout4: {
                    align: 'left',
                    labelWidth: '100px',
                    custom: false,
                    inline: false,
                    span: 10,
                    gutter: 60
                },
                fields5: [
                    {
                        key: 'name',
                        type: 'input',
                        templateOptions: {
                            label: '审批人',
                            offset: 2
                        }
                    },
                    {
                        key: 'status',
                        type: 'radio',
                        templateOptions: {
                            label: '活动状态',
                            options: [
                                {
                                    label: '线上品牌商赞助',
                                    value: 1
                                },
                                {
                                    label: '线下场地免费',
                                    value: 0
                                }
                            ],
                            offset: 1
                        }
                    }
                ]
            };
        }
    };
</script>
