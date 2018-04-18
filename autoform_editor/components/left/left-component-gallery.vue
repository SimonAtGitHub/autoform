<template>
    <div class="gallery-container" :style="{ flex: config.style.left || 1 }">
        <div class="gallery-wrap">
            <p>基础组件库</p>
            <div class="tag-list" v-for="item in componentConfigGetter.basic" :key="item.type" v-if="componentConfigGetter">
                <div>{{item.name}}</div>
                <el-button type="primary" size="mini" @click="handleAddField(item)">
                    <i class="el-icon-plus"></i>
                </el-button>
            </div>

            <p>自定义组件库</p>
            <div class="tag-list" v-for="item in componentConfigGetter[config.name]" :key="item.type" v-if="componentConfigGetter">
                <div>{{item.name}}</div>
                <el-button type="primary" size="mini" @click="handleAddField(item)">
                    <i class="el-icon-plus"></i>
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import basicConfig from 'autoform_editor/components/mixin';
    import Sortable from 'sortablejs';

    export default {
        mixins: [basicConfig],
        data() {
            return {
                componentTree: {}
            }
        },
        computed: {
            ...mapGetters('viewport', [
                'componentConfigGetter'
            ])
        },
        methods: {
            ...mapActions('viewport', [
                'addLayoutTree'
            ]),
            handleAddField(item) {
                this.addLayoutTree({data: item.default});
            }
        }
    }
</script>

<style scoped lang="less">
    .gallery-container {
        flex: 1;
    }

    .tag-list {
        display: flex;
        > div {
            flex: 1;
            padding-bottom: 5px;
            &:first-child {
                flex: 0 0 50%;
            }
            > span {
                cursor: pointer;
            }
        }
    }
</style>
