<!--<template>-->
    <!--<el-checkbox-group v-model="model[field.key]"-->
                       <!--:size="to.size"-->
                       <!--:disabled="to.disabled"-->
                       <!--:min="to.min"-->
                       <!--:max="to.max"-->
                       <!--:text-color="to.textColor"-->
                       <!--:fill="to.fill"-->
                       <!--@change="onEmuChange">-->
        <!--<el-checkbox v-for="item in to.options"-->
                     <!--:label="to.optionKey ? item[to.optionKey] : item.value"-->
                     <!--:key="to.optionKey ? item[to.optionKey] : item.value"-->
                     <!--:disabled="item.disabled"-->
                     <!--:checked="item.checked"-->
                     <!--:border="to.border"-->
                     <!--:required="to.required">-->
        <!--</el-checkbox>-->
    <!--</el-checkbox-group>-->
<!--</template>-->

<script>
    import basicComponent from "autoform/utils/baseField";
    export default {
        mixins: [basicComponent],
        name: 'cCheckbox',
        icon: 'el-icon-edit',
        data() {
            return {
                value: ''
            }
        },
        render(h) {
            let props = {...this.to};
            delete props.label;
            let self = this;
            let childNodes = this.to.options.map(item => {
                let itemProps = props.checkboxAttr || props;
                itemProps.label = item.value;
                itemProps.key = item.value;
                return h(this.to.type || 'el-checkbox', {
                    props: itemProps
                },[
                    item.label
                ])
            });
            let groupNode = h('el-checkbox-group', {
                props: props.groupAttr || props,
                domProps: {
                    value: self.model[self.field.key]
                },
                nativeOn: {
                    change: function (event) {
                        self.model[self.field.key] = event.target.value;
                        self.$emit('input', event.target.value);
                        self.$forceUpdate();
                        console.log('event', self.model[self.field.key]);
                    }
                }
            }, childNodes);
            return h('input', {
                domProps: {
                    value: self.model[self.field.key]
                },
                on: {
                    input: function (event) {
                        self.model[self.field.key] = event.target.value;
                        self.$emit('input', event.target.value);
                    }
                }
            }, [
                self.model[self.field.key]
            ]);
//            return groupNode
        }
    };
</script>

<style>

</style>
