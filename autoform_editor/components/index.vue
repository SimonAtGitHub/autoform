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
import PropsEditor from "./right/right-prop-editor";
import {mapState, mapActions, mapGetters} from 'vuex';
import { getTypes } from "autoform/utils";
import basicConfig from 'autoform_editor/components/mixin'
export default {
    mixins: [basicConfig],
    computed: {
        ...mapGetters('viewport', [
            'componentConfigGetter'
        ])
    },
    methods: {
        ...mapActions('viewport', [
            'handleComponents'
        ]),
        ...mapActions('viewport', [
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
        }
    },
    watch: {
        componentConfigGetter (val) {
            this.config.getConfig(this.componentConfigGetter);
        }
    },
    mounted () {
        this.handleComponents({data: getTypes()});
        this.getLayoutTree({data: this.config.schema});
        this.config.getConfig(this.componentConfigGetter);
    },
    components: {
    Gallery,
    Viewport,
    PropsEditor
  }
};
</script>

<style>

    .editor-container{
        display: flex;
    }

    .editor-container > div {
        padding: 20px;
        margin: 10px;
        border: 1px solid #ccc;
        min-height: 50vh;
    }

</style>
