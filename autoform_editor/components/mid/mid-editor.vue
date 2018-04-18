<template>
    <div class="viewport-container" :style="{ flex: config.style.right || 2}">
        <div class="save-wrap">
            <span>预览：<el-switch v-model="preview"></el-switch></span>
        </div>
        <el-form id="viewport-list" v-show="LayoutTreeGetter.fields && !preview" :label-position="LayoutTreeGetter.layout.align||'left'" :label-width="LayoutTreeGetter.layout.labelWidth">
            <div class="item-hover" v-for="field in LayoutTreeGetter.fields" :key="field.id" :data-id="field.id">
                <el-form-item :label="field.templateOptions.label" :prop="field.key" :rules="field.validators">
                    <component :is='`form_${field.type}`' :field="field" :to="field.templateOptions" :model="modelGetter"></component>
                </el-form-item>
                <div class="button-wrap">
                    <el-button type="primary" size="small" @click="handleEdit(field)">编辑</el-button>
                    <el-button type="danger" size="small" @click="handleRemove(field.id)">删除</el-button>
                    <!--<el-button type="primary" icon="el-icon-edit" size="mini" @click="handleEdit(field)"></el-button>-->
                    <!--<el-button type="danger" icon="el-icon-delete" size="mini" @click="handleRemove(field.id)"></el-button>-->
                </div>
            </div>
        </el-form>
        <auto-form ref="tagForm1" :model="LayoutTreeGetter.model" :fields="LayoutTreeGetter.fields" :layout="LayoutTreeGetter.layout" v-if="preview"></auto-form>
        <div class="save-wrap">
            <el-button type="primary" @click="layoutSet" size="mini">基础设置</el-button>
            <el-button type="primary" @click="getSchema" size="mini">保存</el-button>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import basicConfig from 'autoform_editor/components/mixin';
    import { getTypes } from "autoform/utils";
    import Sortable from 'sortablejs';
    import service from '../service'
    export default {
        data () {
            return {
                model: {
                    name: '123'
                },
                preview: false
            }
        },
        mixins: [basicConfig],
        computed: {
            ...mapGetters('viewport', [
                'LayoutTreeGetter',
                'modelGetter',
                'componentConfigGetter'
            ])
        },
        watch: {
//            LayoutTreeGetter (val) {
//                console.log('LayoutTreeGetter', val);
//            }
        },
        methods: {
            ...mapActions('viewport', [
                'sortLayoutTree',
                'removeLayoutTree'
            ]),
            //点击编辑，将field传入回调函数（editCb）
            handleEdit (field) {
                this.config.editCb(field);
            },
            //删除field
            handleRemove (id) {
                this.removeLayoutTree({id});
            },
            //保存时，通过回调函数（getSchemaCb）获取
            getSchema () {
                let data = service.formatSchema(this.LayoutTreeGetter);
                this.config.getSchemaCb(data);
            },
            //点击基础设置，将layout传入回调函数（editCb）
            layoutSet () {
                this.config.editCb(this.LayoutTreeGetter.layout, true);
            }
        },
        components: getTypes(),
        updated () {
            let target = document.getElementById('viewport-list');
            let sortbale = () => {
                let order = sortable.toArray();
                this.sortLayoutTree({order});
            };
            let sortable = Sortable.create(target, {
                group: {
                    name: 'mid-list',
                    pull: false
                },
                dataIdAttr: 'data-id',
                onEnd (event) {
                    sortbale();
                }
            });
        }
    }
</script>

<style scoped lang="less">
    .viewport-container {
        flex: 2;
        position: relative;
    }
    .item-hover {

        display: flex;
        justify-content: space-between;
        .el-form-item {
            flex: 0 0 80%;
        }
        .button-wrap {
            flex: 1;
        }

    }
    .save-wrap {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 10px;
    }
</style>
