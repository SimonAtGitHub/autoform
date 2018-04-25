<template>
    <div class="tree-node-container">
        <div class="node-unit">
            <!--拖拽释放-->
            <div class="node-occupy drag-area small"
                 v-if="!root"
                 @dragover.prevent.stop.self="_nodeDragOver($event)"
                 @dragleave.stop.self="_dragLeave($event)"
                 @drop.stop.self="_drop($event, field.id)">
            </div>
            <!--节点-->
            <div :draggable="!root" class="node" @dragstart.stop="_dragStart($event, field.id)">
                <div class="fold-icon" v-if="root">
                    <span class="false"></span>
                </div>
                <!--根节点-->
                <div class="node-name" v-if="root" @click.stop="_layoutSet($event)">
                    <div class="corver"></div>
                    <div class="node-name-wrap">
                        <p v-text="'容器设置'"></p>
                        <input type="text" value="容器设置">
                    </div>
                </div>
                <!--普通节点-->
                <div class="node-name" v-if="!root" @click.stop="_select($event, field)">
                    <div class="corver"></div>
                    <div class="node-name-wrap">
                        <p v-text="field.templateOptions.label"></p>
                        <input type="text" v-model="field.templateOptions.label">
                    </div>
                    <div class="remove" @click.stop="_remove(field)">
                        <a>×</a>
                    </div>
                </div>
                <!--递归-->
                <div class="node-body" v-if="root">
                    <div class="node-body-wrap">
                        <div class="node-slot-single">
                            <div class="slot-wrap">
                                <div class="slot-end-point"></div>
                                <div class="slot-drag-area drag-area">
                                    <tree :root="false" v-for="(field, index) in fieldsGetter" :key="field.id"
                                          :field="field" :index="index" :config="config" :eventBus="eventBus"></tree>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--最后一个子节点-->
            <div class="node-occupy drag-area big" v-if="!root && index === fieldsGetter.length - 1"
                 @dragover.prevent.stop.self="_nodeDragOver($event, field)"
                 @dragleave.stop.self="_dragLeave($event)"
                 @drop.stop.self="_drop($event, field.id, true)">
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import { mapGetters, mapMutations, mapActions } from 'vuex';
    import basicConfig from 'autoform_editor/components/mixin';

    export default {
        name: 'tree',
        mixins: [basicConfig],
        props: {
            root: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            field: {
                type: Object,
                default() {
                    return {};
                }
            },
            index: {
                type: Number,
                default() {
                    return 0;
                }
            }
        },
        computed: {
            ...mapGetters('viewport', [
                'layoutGetter',
                'fieldsGetter'
            ])
        },
        methods: {
            ...mapMutations('viewport', [
                'updateFieldId'
            ]),
            ...mapActions('viewport', [
                'removeLayoutTree',
                'reSortLayoutTree'
            ]),
            /* 拖拽进入插入节点 */
            _nodeDragOver(e) {
                let classList = e.target.classList;
                if (!classList.contains('dragover') && !classList.contains('dragstop')) {
                    e.target.classList.add('dragover');
                }
            },
            /* 拖拽离开响应区域 */
            _dragLeave(e) {
                if (e.target.classList.contains('dragover')) {
                    e.target.classList.remove('dragover');
                }
                if (e.target.classList.contains('dragstop')) {
                    e.target.classList.remove('dragstop');
                }
            },
            /* 拖拽释放 */
            _drop(e, fieldId, end) {
                // 拖拽效果
                e.dataTransfer.dropEffect = "move";
                // 取消区域高亮
                if (e.target.classList.contains('dragover')) {
                    e.target.classList.remove('dragover');
                }
                if (e.target.classList.contains('dragstop')) {
                    e.target.classList.remove('dragstop');
                }
                this.reSortLayoutTree({fieldId: fieldId, end: end});
            },
            /* 开始拖拽 */
            _dragStart(e, fieldId, i) {
                // 区域锁定
                this.updateFieldId({fieldId: fieldId});
            },
            /* 删除节点 */
            _remove(item) {
                let cb = (status) => {
                    if (status) {
                        this.removeLayoutTree({id: item.id});
                    }
                };
                if (this.eventBus._events.handleBeforeChangeField) {
                    this.eventBus.$emit('handleBeforeChangeField', item, this.fieldsGetter, 2, cb);
                } else {
                    this.removeLayoutTree({id: item.id});
                }
            },
            /* 选择节点 */
            _select(e, field) {
                this.eventBus.$emit('handleEditField', field);
            },
            //点击基础设置，将layout传入回调函数（editCb）
            _layoutSet() {
                this.eventBus.$emit('handleEditField', this.layoutGetter, true);
            }
        }
    }
</script>

<style lang="less">
    .tree-node-container {
        width: 100%;
        .node-unit {
            width: 100%;
            .node-occupy {
                width: 100%;
                transition: all .3s;
                &.small {
                    height: 20px;
                }
                &.big {
                    height: 30px;
                }
                &.dragover {
                    height: 60px;
                    background: rgba(244, 234, 123, .4);
                }
                &.dragstop {
                    background: rgba(255, 0, 0, .1);
                }
            }
            .node {
                position: relative;
                width: 100%;
                overflow: visible;
                &.lock {
                    opacity: .6;
                }
                .drag-lock {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10;
                }
                .fold-icon {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    left: -18px;
                    top: 1px;
                    cursor: pointer;
                    span {
                        display: inline-block;
                        font-size: 16px;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        font-weight: 900;
                        vertical-align: top;
                        color: #666;
                        &.true:before {
                            display: inline-block;
                            content: '+';
                            vertical-align: top;
                            line-height: 18px;
                        }
                        &.false:before {
                            display: inline-block;
                            content: '﹣';
                            vertical-align: top;
                            line-height: 20px;
                        }
                    }
                }
                .node-name {
                    position: relative;
                    display: inline-block;
                    height: 24px;
                    border: 1px solid #ccc;
                    padding: 0 24px 0 12px;
                    margin-left: -1px;
                    white-space: nowrap;
                    background: #fff;
                    cursor: default;
                    overflow: hidden;
                    &:hover, &.selected {
                        border: 1px solid #06c1ae;
                    }
                    &.focus {
                        background: #f0f0f0;
                    }
                    &:hover .remove {
                        display: block;
                    }
                    .remove {
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 24px;
                        height: 24px;
                        text-align: center;
                        padding: 2px 0;
                        display: none;
                        cursor: pointer;
                        z-index: 1;
                        &:hover a {
                            color: #000;
                        }
                        a {
                            display: inline-block;
                            text-align: center;
                            vertical-align: top;
                            font-size: 14px;
                            color: #aaa;
                        }
                    }
                    .corver {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 1;
                    }
                    .node-name-wrap {
                        position: relative;
                        width: 100%;
                        p {
                            display: inline-block;
                            line-height: 22px;
                            font-size: 12px;
                            min-width: 80px;
                            text-align: left;
                            letter-spacing: 1px;
                            opacity: 0;
                        }
                        input {
                            position: absolute;
                            left: 0;
                            top: 0;
                            display: inline-block;
                            width: 100%;
                            border: none;
                            font-size: 12px;
                            line-height: 22px;
                            vertical-align: top;
                            color: #333;
                            background: transparent;
                            &:focus {
                                outline: none;
                            }
                        }
                    }
                }
                .node-body {
                    margin-top: -3px;
                    width: 100%;
                    height: 100%;
                    padding-left: 22px;
                    .node-body-wrap {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        min-height: 60px;
                        border-left: 1px solid #ccc;
                        .node-slot-single {
                            width: 100%;
                            height: 100%;
                            .slot-wrap {
                                width: 100%;
                                .slot-drag-area {
                                    display: inline-block;
                                    min-width: 160px;
                                    min-height: 60px;
                                    transition: background .35s;
                                    &.dragover {
                                        background: rgba(244, 234, 123, .4);
                                    }
                                    &.dragstop {
                                        background: rgba(245, 0, 0, .1);
                                        cursor: not-allowed;
                                    }
                                }
                            }
                        }
                        .node-slot-normal {
                            width: 100%;
                            height: 100%;
                            .slot-normal-item {
                                width: 100%;
                                .slot-unit {
                                    position: relative;
                                    width: 100%;
                                    .slot-name {
                                        position: relative;
                                        display: inline-block;
                                        height: 22px;
                                        border: 1px solid #999;
                                        background: #ccc;
                                        padding: 0 12px;
                                        margin-left: -1px;
                                        white-space: nowrap;
                                        cursor: default;
                                        overflow: hidden;
                                        .slot-name-drag {
                                            position: absolute;
                                            left: 0;
                                            top: 0;
                                            width: 100%;
                                            height: 100%;
                                            z-index: 1;
                                        }
                                        p {
                                            display: inline-block;
                                            width: 100%;
                                            border: none;
                                            font-size: 12px;
                                            line-height: 20px;
                                            vertical-align: top;
                                            color: #fff;
                                        }
                                        &:hover, &.selected {
                                            background: #aaa;
                                        }
                                    }
                                    .slot-body {
                                        width: 100%;
                                        height: 100%;
                                        padding-left: 22px;
                                        .slot-wrap {
                                            position: relative;
                                            width: 100%;
                                            height: 100%;
                                            margin: -3px 0 0 -1px;
                                            border-left: 1px solid #ccc;
                                            .slot-drag-area {
                                                display: inline-block;
                                                min-width: 160px;
                                                min-height: 60px;
                                                transition: background .35s;
                                                &.dragover {
                                                    background: rgba(244, 234, 123, .5);
                                                }
                                                &.dragstop {
                                                    background: rgba(255, 0, 0, .1);
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                        }
                        .slot-end-certain {
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            width: 26px;
                            height: 20px;
                            border-bottom: 1px solid #ccc;
                            overflow: visible;
                            .add {
                                position: absolute;
                                width: 20px;
                                height: 20px;
                                border: 1px solid #ccc;
                                text-align: center;
                                right: -20px;
                                bottom: -10px;
                                cursor: pointer;
                                &:hover {
                                    background: #ddd;
                                }
                                span {
                                    display: inline-block;
                                    font-size: 16px;
                                    width: 100%;
                                    height: 100%;
                                    text-align: center;
                                    font-weight: 900;
                                    vertical-align: top;
                                    color: #999;
                                    &:before {
                                        display: inline-block;
                                        content: '+';
                                        vertical-align: top;
                                        line-height: 16px;
                                    }
                                }
                            }
                        }
                        .slot-end-point {
                            position: absolute;
                            left: -3px;
                            bottom: -6px;
                            width: 6px;
                            height: 6px;
                            border-radius: 50%;
                            background: #ccc;
                        }
                    }
                }
            }

        }
        &.selected {
            border: 1px solid #06c1ae;
        }
    }
</style>
