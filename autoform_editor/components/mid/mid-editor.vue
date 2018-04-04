<template>
    <div class="viewport-container">
        <auto-form ref="tagForm1" :model="LayoutTreeGetter.model" :fields="LayoutTreeGetter.fields" :layout="LayoutTreeGetter.layout"></auto-form>
        <!--<el-form id="viewport-list" v-if="LayoutTreeGetter.children" :label-position="LayoutTreeGetter.align||'left'" :label-width="LayoutTreeGetter.labelWidth">-->
            <!--<div class="item-hover" v-for="field in LayoutTreeGetter.children" :key="field.id">-->
                <!--<el-form-item :label="field.value.templateOptions.label" :prop="field.value.key" :rules="field.value.validators">-->
                    <!--<component :is='`form_${field.value.type}`' :field="field.value" :to="field.value.templateOptions" :model="modelGetter"></component>-->
                <!--</el-form-item>-->
                <!--<div class="button-wrap">-->
                    <!--<el-button type="primary" icon="el-icon-edit"  size="mini"></el-button>-->
                    <!--<el-button type="danger" icon="el-icon-delete"  size="mini"></el-button>-->
                <!--</div>-->
            <!--</div>-->
        <!--</el-form>-->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import basicConfig from 'autoform_editor/components/mixin';
    import { getTypes } from "autoform/utils";
    import Sortable from 'sortablejs';

    export default {
        data () {
            return {
                model: {
                    name: '123'
                }
            }
        },
        mixins: [basicConfig],
        computed: {
            ...mapGetters('viewport', [
                'LayoutTreeGetter',
                'modelGetter'
            ])
        },
        watch: {
            LayoutTreeGetter (val) {
//                console.log(val);
            }
        },
        components: getTypes(),
        updated () {
            let target = document.getElementById('viewport-list');
            let sortable = Sortable.create(target, {
                group: {
                    name: 'mid-list',
                    pull: false,
                    put: ['left-list']
                },
                onEnd (event) {
                    console.log(111, event);
                }
            });
        }
    }
</script>

<style scoped lang="less">
    .viewport-container {
        flex: 2;
    }
    .item-hover {
        padding: 10px;
        border: 1px solid #fff;
        position: relative;
        .button-wrap {
            display: none;
            position: absolute;
            right: 10px;
            bottom: 3px;
        }

        &:hover
        {
            border: 1px solid #ddd;
            .button-wrap {
                display: block;
            }
        }
    }
</style>
