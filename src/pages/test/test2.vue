<template>
    <div>
        <header>
            <el-col :span="2">
                <h3>动态表单</h3>
            </el-col>
            <el-col :span="4" :offset="18">
                <el-button type="warning" icon="edit" @click="handlePriset">预设</el-button>
                <el-button type="danger" icon="document" @click="handlePrivew">预览</el-button>
            </el-col>
        </header>
        <div class="wrapper">
            <el-collapse-transition>
                <el-row :gutter="10" v-show="!isPreivew && !isPreset">
                    <el-col :span="5">
                        <div class="gallery">
                            <el-card class="button-card">
                                <div slot="header" class="clearfix">
                                    <span>组件库</span>
                                </div>
                                <div class="gallery-body clearfix">
                                    <vddl-draggable :draggable="item" :copied="copied" effect-allowed="copy" v-for="item in Gallery" :key="item.id">
                                        <div class="gallery-component">
                                            <!-- <i :class="[item.icon]"></i> -->
                                            {{item.type}}
                                        </div>
                                    </vddl-draggable>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="drop-layout">
                            <div v-for="(list, zone) in tabForm">
                                <el-card class="button-card">
                                    <div slot="header" class="clearfix">
                                        <span>{{zone}}</span>
                                    </div>
                                    <vddl-list class="drop-layout-body" :list="list" :inserted="inserted" effect-allowed="move" :external-sources="true">
                                        <!--<el-row :gutter="cGutter">-->
                                        <el-col :span="item.templateOptions.span" v-for="(item, index) in list" :key="item.id" style="border:1px dashed #ccc;" v-bind:class="{'selected': selectedItem === item}">
                                            <span>{{item.key}}/{{item.label||'-'}}</span>
                                            <vddl-draggable :horizontal="true" :draggable="item" :wrapper="list" :index="index" :item="item" :selected.stop="handleSelected" :selected-item="selectedItem">
                                                <div class="drop-layout-component">
                                                    {{item.type}}
                                                </div>
                                            </vddl-draggable>
                                        </el-col>
                                        <!--</el-row>-->
                                    </vddl-list>
                                </el-card>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="8">
                        <div @click.stop="handlePropertyContainerClick">
                            <el-card class="button-card">
                                <div slot="header" class="clearfix">
                                    <span>属性窗口</span>
                                </div>
                                <div v-if="selectedItem">
                                    <!-- <span> {{selectedItem.type}} {{selectedItem.id}} </span> -->
                                    <el-form ref="form" :model="selectedItem" label-width="80px">
                                        <el-form-item label="Key">
                                            <el-input v-model="selectedItem.key"></el-input>
                                        </el-form-item>
                                        <el-form-item label="label">
                                            <el-input v-model="selectedItem.templateOptions.label"></el-input>
                                        </el-form-item>
                                        <el-form-item label="span">
                                            <el-slider v-model="selectedItem.templateOptions.span" :min="1" :max="24" :step="1"></el-slider>
                                        </el-form-item>
                                        <el-form-item label="Type">
                                            <el-select v-model="selectedItem.type" placeholder="请选择">
                                                <el-option v-for="item in CmpntType" :key="item" :label="item" :value="item">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="Options">
                                            <el-input type="textarea" v-model="optionString" @change="handleOptionStrChange(optionString,selectedItem)" placeholder="label,value Enter"></el-input>
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div v-if="!selectedItem">
                                    <!-- <span> 属性 </span> -->
                                    <el-form ref="form" :model="formOptions" label-width="100px">
                                        <el-form-item label="分栏">
                                            <el-slider v-model="formOptions.span" :min="1" :max="24" :step="1" @change="handleSpanChange"></el-slider>
                                        </el-form-item>
                                        <el-form-item label="间隔">
                                            <el-input v-model="formOptions.gutter"></el-input>
                                        </el-form-item>
                                        <el-form-item label="label宽度">
                                            <el-input v-model="formOptions.labelWidth"></el-input>
                                        </el-form-item>
                                        <el-form-item label="label对齐方式">
                                            <el-select v-model="formOptions.align" placeholder="请选择" style="width:100%">
                                                <el-option v-for="item in ['top','left','right']" :key="item" :label="item" :value="item">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </el-card>

                            <div style="margin-top:15px">
                                <el-card class="ashcan-card">
                                    <div slot="header" class="clearfix">
                                        <span>删除组件</span>
                                    </div>
                                    <vddl-list :list="[]" class="panel__body">
                                        <i class="el-icon-delete"></i>
                                    </vddl-list>
                                </el-card>
                            </div>

                            <div style="margin-top:15px">
                                <el-card class="ashcan-card">
                                    <div slot="header" class="clearfix">
                                        <span>Tab管理</span>
                                    </div>
                                </el-card>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-collapse-transition>
            <el-collapse-transition>
                <el-row v-if="isPreivew">
                    <el-col>
                        <el-card class="ashcan-card">
                            <div slot="header" class="clearfix">
                                <span>预览结果</span>
                            </div>
                            <auto-form :model="model" :fields="tabForm.Default" :layout="formOptions">
                            </auto-form>
                        </el-card>
                    </el-col>
                </el-row>
            </el-collapse-transition>
            <el-collapse-transition>
                <el-row v-if="isPreset">
                    <el-col>
                        <el-card class="ashcan-card">
                            <div slot="header" class="clearfix">
                                <span>预设字段</span>
                            </div>
                            <div class="code-wrap">
                                <codemirror v-model="code"
                                            :options="editorOption"
                                            @blur="onEditorBlur">
                                </codemirror>
                            </div>
                            <el-button type="primary" @click="handleShowCode">生成</el-button>
                        </el-card>
                    </el-col>
                </el-row>
            </el-collapse-transition>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';

    // require active-line.js
    require('codemirror/addon/selection/active-line.js')
    // styleSelectedText
    require('codemirror/addon/selection/mark-selection.js')
    require('codemirror/addon/search/searchcursor.js')
    // hint
    require('codemirror/addon/hint/show-hint.js')
    require('codemirror/addon/hint/show-hint.css')
    require('codemirror/addon/hint/javascript-hint.js')
    require('codemirror/addon/selection/active-line.js')
    // highlightSelectionMatches
    require('codemirror/addon/scroll/annotatescrollbar.js')
    require('codemirror/addon/search/matchesonscrollbar.js')
    require('codemirror/addon/search/searchcursor.js')
    require('codemirror/addon/search/match-highlighter.js')
    // keyMap
    require('codemirror/mode/clike/clike.js')
    require('codemirror/addon/edit/matchbrackets.js')
    require('codemirror/addon/comment/comment.js')
    require('codemirror/addon/dialog/dialog.js')
    require('codemirror/addon/dialog/dialog.css')
    require('codemirror/addon/search/searchcursor.js')
    require('codemirror/addon/search/search.js')
    require('codemirror/keymap/sublime.js')
    // foldGutter
    require('codemirror/addon/fold/foldgutter.css')
    require('codemirror/addon/fold/brace-fold.js')
    require('codemirror/addon/fold/comment-fold.js')
    require('codemirror/addon/fold/foldcode.js')
    require('codemirror/addon/fold/foldgutter.js')
    require('codemirror/addon/fold/indent-fold.js')
    require('codemirror/addon/fold/markdown-fold.js')
    require('codemirror/addon/fold/xml-fold.js')



    export default {
        computed: {
            cGutter() {
                return parseInt(this.formOptions.gutter);
            },
            cSpan() {
                return parseInt(this.formOptions.span);
            }
        },
        data() {
            return {
                code: '',
                editorOption: {
                    tabSize: 4,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    // mode: 'text/javascript',
                    mode: {
                        name: "javascript",
                        json: true
                    },
                    lineWrapping: true,
                    theme: 'base16-dark'
                },
                layout:{},
                selectedItem: null,
                itemMock: { type: "Input", id: 1 },
                tabForm: {
                    Default: []
                },
                tabFlag: false,
                formOptions: {
                    align: 'top',
                    span: 24,
                    labelWidth: '180px',
                    gutter: 20,
                    custom: false,
                    inline: false
                },
                isPreivew: false,
                isPreset: false,
                Gallery: [],
                CmpntType: [],
                activeName: 'Default',
                model: {},
                optionString: ""
            };
        },
        watch: {
            tabForm: {
                handler(val, oldVal) {
                    this.code = JSON.stringify(val,null,4);
                },
                deep: true
            }
        },
        methods: {
            copied(item) {
                item.id++;
            },
            inserted(data) {
//            console.log('insert',data)
            },
            // toggleDisable() {
            //     this.disable = !this.disable;
            // },
            handleSelected(item) {
                this.selectedItem = item;
                this.optionString = item.templateOptions.options.map(item => item ? `${item.label},${item.value}` : '').join('\r\n')
            },
            handleUnSelected() {
                this.selectedItem = null;
            },
            handleOptionStrChange(input, item) {
                let options = input
                    .split(/[\r\n]/)
                    .filter(item => item !== "")
                    .map(optionItem => {
                        if(optionItem) {
                            let arr = optionItem.split(/[,，]/);
                            return {
                                label: arr[0],
                                value: arr[1]
                            }
                        }
                    });
                item.templateOptions.options = options;
            },
            handlePropertyContainerClick() { },
            changeItemMock() {
                this.itemMock.type = this.selectAddType;
            },
            handlePrivew() {
                this.isPreivew = !this.isPreivew;
                this.isPreset = false;
            },
            handlePriset() {
                this.isPreset = !this.isPreset;
                this.isPreivew = false;
            },
            onEditorBlur() {
            },
            handleShowCode() {
                try  {
                    let codeArr = eval(this.code);
                    this.tabForm.Default = codeArr.map((item,index) => {
                        let templateOptions  = item.templateOptions || {};
                        let obj = {
                            key:item.key || "key",
                            type:item.type || "input",
                            templateOptions:{
                                label: templateOptions.label || '',
                                options: templateOptions.options || [],
                                span: templateOptions.span || 24
                            },
                            validators:item.validators || [],
                            id: index
                        };
                        return obj;
                    });
                    this.handlePriset();
                } catch (err) {
                    console.log(err);
                }
            },
            handleSpanChange() {
                this.tabForm.Default.forEach(item => {
                    item.templateOptions.span = this.formOptions.span;
                })
            }
        },
        components: {
            // list
        },
        mounted() {
            let components = Vue.$form.getTypes();
            console.table(components)
            this.Gallery = Object.keys(components).map((item, index) => {
                let crrt_component = components[item];
                return {
                    key: 'key',
                    type: crrt_component.name,
                    templateOptions: {
                        label: '',
                        options: [],
                        span: 24
                    },
                    validators: [],
                    id: index,
                    icon: crrt_component.icon,
                }
            });
            this.CmpntType = this.Gallery.map(item => item.type);

            document.addEventListener('click', this.handleUnSelected)

            // this.Gallery = components.map(item =>)
        },
        destroyed() {
            document.removeEventListener('click', this.handleUnSelected)
        }
    };
</script>

<style lang="scss">
    // @import 'vddlBase';
    .vddl-placeholder {
        width: 80px;
        min-height: 80px;
        border-bottom: 1px solid #eee; // padding: 0 15px;
        background: #eee;
        float: left;
    }



    header {
        background-color: rgb(32, 160, 255);
        height: 60px;
        color: #fff;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 60px;
        z-index: 100;
        position: relative;
        margin-bottom: 15px;
        padding: 0 15px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04)
    }

    .wrapper {
        margin: 15px 15px;
    }

    .vddl-dragging-source {
        display: block;
    }

    .selected {
        background: #edf1f5;
    }

    .gallery {
        .gallery-body {
            .gallery-component {
                width: 80px;
                float: left;
                height: 80px;
                text-align: center;
                line-height: 80px;
                border: 1px solid #abc;
                margin: 10px 10px;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
                color: #aaa;
                font-weight: 400;
            }
        }
    }

    .drop-layout {
        .drop-layout-body {
            min-height: 500px;
        }
        .vddl-draggable {
            // float: left;
            .drop-layout-component {
                margin: 20px auto;
                width: 80px;
                height: 80px;
                text-align: center;
                line-height: 80px;
                border: 1px solid #abc; // margin: 10px 10px;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
                color: #aaa;
                font-weight: 400;
            }
        }
    }




    // /* new-elements */
    // .new-elements .button {
    //     border: 1px solid #000;
    //     text-align: center;
    //     height: 40px;
    //     border-radius: 4px;
    //     line-height: 40px;
    //     background-color: #ccc;
    //     color: #fff;
    //     cursor: move;
    //     font-size: 14px;
    // }
    // .new-elements .vddl-dragging-source {
    //     display: block;
    // }
    // .selected {
    //     background: #f9f9f9;
    // }
    // .selected-item .panel__body {
    //     line-height: 40px;
    // }
    // .disable-element .button {
    //     background-color: darkred;
    //     border: 1px solid darkred;
    //     cursor: pointer;
    // }
    // .ashcan {
    //     .ashcan-logo {
    //         display: block;
    //         width: 40px;
    //         margin: 10px auto;
    //     }
    //     .vddl-placeholder {
    //         display: none;
    //     }
    // }
    // .button-card {
    //     .vddl-draggable {
    //         >button {
    //             width: 100%;
    //         }
    //         &:not(:last-child) {
    //             padding-bottom: 5px;
    //         }
    //     }
    // }
    // .ashcan-card {
    //     .vddl-list {
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //         i {
    //             font-size: 20px;
    //         }
    //     }
    // }
    // .left-bench {
    //     >div {
    //         &:not(:last-child) {
    //             padding-bottom: 15px;
    //         }
    //     }
    // }

    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .code-wrap {
        padding: 20px;
    }
</style>
