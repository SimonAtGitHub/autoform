<template>
  
    <div class="editor-container">
        <gallery :config="config"></gallery>
        <viewport :config="config"></viewport>
        <!--<props-editor :config="config"></props-editor>-->
    </div>

</template>

<script>
import Gallery from "./left/left-component-gallery";
import Viewport from "./mid/mid-editor";
import {mapActions, mapGetters} from 'vuex';
import { getTypes } from "autoform/utils";
import basicConfig from 'autoform_editor/components/mixin'
export default {
    mixins: [basicConfig],
    computed: {
        ...mapGetters('viewport', [
            'componentConfigGetter',
            'layoutGetter',
            'modelGetter',
            'fieldsGetter'
        ])
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
            this.config.getConfig(this.componentConfigGetter);
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
