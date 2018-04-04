<template>
    <div class="gallery-container">
        <div class="gallery-wrap">
            <p>基础组件库</p>
            <div id="list" class="tag-list">
                <el-tag v-for="item in componentConfigGetter.basic" :key="item.type" size="small" type="success">{{item.name}}</el-tag>
            </div>

            <p>自定义组件库</p>
            <div id="left-custom-list" class="tag-list">
                <el-tag v-for="item in componentConfigGetter[config.name]" :key="item.type" size="small">{{item.name}}</el-tag>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import basicConfig from 'autoform_editor/components/mixin';
    import Sortable from 'sortablejs';
    export default {
        mixins: [basicConfig],
        data () {
            return {
                componentData: {},
                componentTree: {}
            }
        },
        computed: {
            ...mapGetters('gallery', [
                'componentConfigGetter'
            ])
        },
        methods: {
            sort () {
                let target = document.getElementById('list');
                let sortable = Sortable.create(target, {
                    group: {
                        name: 'left-list',
                        pull: 'clone',
                        put: false
                    },
                    animation: 120,
                    ghostClass: 'placeholder-style',
                    onEnd (event) {
                        console.log(event);
                    }
                });
            }
        },
        watch: {
        },
        mounted () {
            this.sort();
        },
    }
</script>

<style scoped lang="less">
.gallery-container{
    flex: 1;
}
    .gallery-wrap {
    }

    .tag-list {
        > span {
            margin-right: 10px;
        }
    }
</style>
