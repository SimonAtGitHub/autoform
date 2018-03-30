<template>
  
    <div class="editor-container">
        <gallery :config="config"></gallery>
        <viewport :config="config"></viewport>
        <props-editor :config="config"></props-editor>
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
        ...mapState('gallery', [
            'componentTree'
        ])
    },
    methods: {
        ...mapActions('gallery', [
            'updateComponents'
        ]),
    },
    mounted () {
        this.updateComponents({data: getTypes()});
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
        height: 80vh;
    }

</style>
