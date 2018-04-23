<template>
    <div class="viewport-container">
        <!--树展示-->
        <div class="tree-wrap">
            <tree :root="true" :config="config"></tree>
        </div>
        <!--预览模式-->
        <div class="preview">
            <div class="save-wrap">
                <el-button type="default" @click="getSchema" size="small"><i class="el-icon-document"></i>保存</el-button>
            </div>
            <auto-form ref="tagForm1" :model="model" :fields="fields" :layout="layoutGetter"></auto-form>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import basicConfig from 'autoform_editor/components/mixin';
    import service from '../service';
    import tree from './tree';
    export default {
        data () {
            return {
                model: {},
                fields: [],
                layout: {}
            }
        },
        mixins: [basicConfig],
        computed: {
            ...mapGetters('viewport', [
                'layoutGetter',
                'modelGetter',
                'fieldsGetter'
            ])
        },
        watch: {
            fieldsGetter (val) {
                this.fields = JSON.parse(JSON.stringify(val));
            },
            modelGetter (val) {
                this.model = JSON.parse(JSON.stringify(val));
            }
        },
        methods: {
            //保存时，通过回调函数（getSchemaCb）获取
            getSchema () {
                let result = {
                    model: this.modelGetter,
                    fields: service.formatSchema(this.fieldsGetter),
                    layout: this.layoutGetter,
                };
                this.config.getSchemaCb(result);
            }
        },
        components: { tree }
    }
</script>

<style scoped lang="less">
    .viewport-container {
        flex: 2;
        position: relative;
        font-size: 14px;
        color: #48576a;
        display: flex;
        > div {
            padding: 10px;
            flex: 1;
            &.tree-wrap {
                flex: 0 0 150px;
                background-color: #F7F7F7;
                padding-left: 30px;
                border-right: 1px solid #ccc;
            }
        }
    }
    .item-hover {

        display: flex;
        justify-content: space-between;
        .el-form-item {
            flex: 1;
            padding-right: 30px;
        }
        .button-wrap {
            flex: 0 0 100px;
            padding: 5px;
        }

    }
    .save-wrap {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 10px;
        border-bottom: 1px;
    }
</style>
