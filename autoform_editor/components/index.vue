<template>
  
    <div class="editor-container">
        <gallery :config="config" :eventBus="eventBus"></gallery>
        <viewport :config="config" :eventBus="eventBus"></viewport>
        <!--<props-editor :config="config"></props-editor>-->
    </div>

</template>

<script>
import Gallery from "./left/left-component-gallery";
import Viewport from "./mid/mid-editor";
import {mapActions, mapGetters} from 'vuex';
import { getTypes } from "autoform/utils";
import EventBus from "autoform/utils/eventBus";
export default {
    props: ['config'],
    computed: {
        ...mapGetters('viewport', [
            'componentConfigGetter',
            'layoutGetter',
            'modelGetter',
            'fieldsGetter'
        ])
    },
    data () {
        return {
            eventBus: null
        }
    },
    methods: {
        ...mapActions('viewport', [
            'handleComponents',
            'getLayoutTree',
            'editLayoutTree',
            'handleBasicConfig'
        ]),
        //更新表单某项field
        updateForm (field, isLayout) {
            this.editLayoutTree({field, isLayout});
        },
        //设置基础组件自定义选项
        setBasicConfig (config) {
            this.handleBasicConfig({config});
        },
        //【用户】获取config
        getConfig () {
            return this.componentConfigGetter;
        },
        //【用户】获取fields
        getFields () {
            return this.fieldsGetter;
        }
    },
    mounted () {
        this.handleComponents({data: getTypes()});
        this.getLayoutTree({data: this.config.schema});
    },
    created () {
        this.eventBus = EventBus();
        // 【注册】保存
        this.eventBus.$on('handleSave', (data) => {
            this.$emit('handleSave', data);
        });
        // 【注册】修改获取field
        this.eventBus.$on('handleEditField', (data) => {
            this.$emit('handleEditField', data);
        });
        // 【注册】新增或删除field
        if (this._events.handleChangeField) {
            this.eventBus.$on('handleChangeField', (field, fields, type, cb) => {
                this.$emit('handleChangeField', field, fields, type, cb);
            });
        }
    },
    components: { Gallery, Viewport }
};
</script>

<style>

    .editor-container{
        display: flex;
        border: 1px solid #bfcbd9;
    }

    .editor-container > div {
        min-height: 80vh;
    }

</style>
