<style scoped>
    .autoform-block {
        overflow: hidden;
    }
</style>
<script type="text/jsx">
    import {typeCheck, setCache} from "../utils";
    import EventBus from "../utils/eventBus";

    export default {
        /*eslint-disable */
        methods: {
            validate() {
                return new Promise((resolve, reject) => {
                    this.$refs.form.validate(valid => {
                        resolve(valid);
                    });
                });
            },
            resetForm() {
                this.$refs.form.resetFields();
                if (this.layout.cache) {
                    localStorage.removeItem(this.$vnode.tag);
                }
            },
            clearForm() {
                for (let key in this.model) {
                    this.model[key] = null;
                    if (typeCheck.isArray(this.model[key])) {
                        this.model[key] = [];
                    } else if (typeCheck.isObject(this.model[key])) {
                        this.model[key] = {};
                    }
                }
            },
            getComponents() {
                let result = Object.keys(this.$refs).reduce((res, item) => {
                    res[item] = this.$refs[item][0];
                    return res;
                }, {});

                return result;
            },
            _errorlint(props, msg) {
                if (!props || (Array.isArray(props) && props.length === 0)) {
                    console.warn(msg);
                }
            },
            _isFieldArray2d(fields) {
                return fields[0] && typeCheck.isArray(fields[0]);
            },
            _emptyValue(fields) {
                if (this._isFieldArray2d(fields)) {
                    fields.forEach(field => {
                        field.forEach(item => {
                            if (typeof this.model[item.key] === "undefined")
                                this.$set(this.model, item.key, "");
                        });
                    });
                } else {
                    fields.forEach(field => {
                        if (typeof this.model[field.key] === "undefined")
                            this.$set(this.model, field.key, "");
                    });
                }
            },
            ___IS__DEV__() {
                return !!window.__AUTOFORM_DEVTOOLS_GLOBAL_HOOK__;
            },
            __DEV_TOOL__() {
                // let self = this;
                // window.addEventListener("message", e => {
                //     if (e.source === window && e.data.type === "devtool-data-update") {
                //         if (!this._q(self.vModel, e.data.data.model)) {
                //             self.vModel = e.data.data.model;
                //         }
                //         if (!this._q(self.vFields, e.data.data.fields)) {
                //             self.vFields = e.data.data.fields;
                //         }

                //         if (!this._q(self.vLayout, e.data.data.layout)) {
                //             //如果是inline并且为二维数组要变回来
                //             if (
                //                 e.data.data.layout.inline !== self.vLayout.inline &&
                //                 e.data.data.layout.inline === false &&
                //                 self.___oldFields
                //             ) {
                //                 self.vFields = self.___oldFields;
                //             } else if (
                //                 e.data.data.layout.inline !== self.vLayout.inline &&
                //                 e.data.data.layout.inline === true
                //             ) {
                //                 self.vLayout.inline = true;
                //                 self._inline_flat_FieldArray();
                //             }
                //             self.vLayout = e.data.data.layout;
                //         }
                //     }
                // });

                // setTimeout(function () {
                //     const $autoForm = self.___IS__DEV__();
                //     if ($autoForm) {
                //         let data = {
                //             model: self.model,
                //             layout: self.layout,
                //             fields: self.fields
                //         };
                //         try {
                //             window.postMessage(
                //                 {
                //                     type: "init",
                //                     data
                //                 },
                //                 "*"
                //             );
                //         } catch (e) {
                //             console.warn("devTool参数传递出错(window.postMessage)", e);
                //         }
                //     } else {
                //         console.log("未安装devtool");
                //     }
                // }, 500);
            },
            _inline_flat_FieldArray() {
                if (this.vLayout.inline && this.isFieldArray2d) {
                    //如果是 inline 就打平 二维数组
                    let cpFields = [...this.vFields];

                    this.___oldFields = cpFields;
                    let flatMap = [];
                    flatMap = cpFields.reduce((result, item) => {
                        result = result.concat(item);
                        return result;
                    }, []);
                    this.vFields = flatMap;
                }
            },
            __findField(key) {
                let result;
                if (this.isFieldArray2d) {
                    this.fields.forEach(list => {
                        !result ? (result = list.find(item => item.key === key)) : "";
                    });
                } else {
                    result = this.fields.find(item => item.key === key);
                }
                return result;
            },
            __setModel() {
                if (!this.layout.cache) {
                    return;
                }
                const vInstance = this.$vnode.componentInstance;
                let queryStr = localStorage.getItem(this.$vnode.tag);
                if (!queryStr) {
                    return;
                }
                const query = JSON.parse(queryStr);
                for (let ele in query) {
                    if (ele && query.hasOwnProperty(ele) && typeof query[ele] !== 'undefined') {
                        vInstance.$set(vInstance.model, ele, query[ele]);
                    }
                }
            }
        },
        //props: ["model", "fields", "layout"],
        props: {
            model: {
                default: {}
            },
            fields: {
                default: []
            },
            layout: {
                default: {}
            },
            __name__: {
                default: "autoForm"
            },
            tabs: {
                default: null
            }
        },
        data() {
            return {
                eventBus: null,
                vModel: this.model,
                vFields: this.fields,
                vLayout: this.layout,
                validLib:{}
            };
        },
        computed: {
            keys() {
                let keys = {};
                this.fields.forEach(field => {
                    keys[field.key] = field;
                });
                return keys;
            },
            isFieldArray2d() {
                return this.fields[0] && typeCheck.isArray(this.fields[0]);
            }
        },
        watch: {
            fields: {
                handler(val, oldVal) {
                    this.vFields = val;
                },
                deep: true
            },
            layout: {
                handler(val, oldVal) {
                    this.vLayout = val;
                },
                deep: true
            },
            model: {
                handler(val, oldVal) {
                    localStorage.setItem(this.$vnode.tag, JSON.stringify(val));
                    clearTimeout(this.update_model_timer);
                    this.update_model_timer = setTimeout(function () {
                        window.postMessage(
                            {
                                type: "autoform_update_model",
                                data: {
                                    model: val
                                }
                            },
                            "*"
                        );
                    }, 500);
                    this.vModel = val;
                },
                deep: true
            },
            vFields: {
                handler(val, oldVal) {
                    if (this._q(val, oldVal)) {
                        return;
                    }
                    let self = this;
                    clearTimeout(this.update_fields_timer);
                    this.update_fields_timer = setTimeout(function () {
                        try {
                            window.postMessage(
                                {
                                    type: "autoform_update_fields",
                                    data: {
                                        fields: val
                                    }
                                },
                                "*"
                            );
                        } catch (e) {
                            console.warn("devTool参数传递出错(window.postMessage autoform_update_fields)", e);
                        }
                    }, 500);
                },
                deep: true
            },
            vModel: {
                handler(val, oldVal) {
                    this.$emit("model", this.val);
                },
                deep: true
            }
        },
        created() {
            this.vLayout = this.vLayout || {
                align: "left",
                labelWidth: "1px",
                inline: false,
                gutter: 30
            };
            this.vFields = this.vFields || [];
            this.vModel = this.vModel || {};

            this._inline_flat_FieldArray();

            this.eventBus = EventBus();

            if (!this.tabs) {
                this._emptyValue(this.vFields);
            } else {
                Object.keys(this.vFields).forEach(item => {
                    this._emptyValue(this.vFields[item]);
                });
            }
            this.__DEV_TOOL__();
        },
        mounted() {
            this.__setModel();
        },
        render(h) {
            return (
                    <div class="autoform-block">
                        <el-form
                                ref="form"
                                model={this.vModel}
                                label-position={this.vLayout.align || "left"}
                                label-width={this.vLayout.labelWidth}
                                inline={this.vLayout.inline}
                        >
                            <auto-form-layout
                                    model={this.vModel}
                                    layout={this.vLayout}
                                    fields={this.vFields}
                                    eventBus={this.eventBus}
                                    validLib={this.validLib}
                                    tabs={this.tabs}
                            >
                                {this.$scopedSlots.default}
                                {this.$slots.default}
                            </auto-form-layout>
                        </el-form>
                    </div>
            );
        }
    };
</script>
