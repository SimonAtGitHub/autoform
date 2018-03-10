<script>
    import basicComponent from "autoform/utils/baseField";
    export default {
        mixins: [basicComponent],
        name: 'cButton',
        icon: 'el-icon-edit',
        render(h) {
            return (
                    <div class={this.to.className || ''}>
                    {this.to.buttonOpt.map((item) => {
                        let props = item;
                        let on = {
                            click: () => {
                                this.eventBus.$emit(item.onClick, item, this.field);
                            }
                        };
                        let vNode = h('el-button', {props, on}, [item.value]);
                        if (this.to.inline) {
                            return vNode
                        }
                        return (
                            <div>{vNode}</div>
                        );
                    })}
                    </div>
                )
        }
    };
</script>
