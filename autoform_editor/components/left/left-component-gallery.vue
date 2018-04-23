<template>
    <div class="gallery-container">
        <ul class="af-menu af-menu-top">
            <li class="af-submenu">
                <div class="af-submenu__title" style="padding-left: 20px;" @click="handleOpen('basic')">
                    基础组件库
                    <i class="af-submenu__icon-arrow el-icon-arrow-down" :style="{transform: openStatus['basic'] ? 'rotate(180deg)' : ''}"></i>
                </div>
                <ul class="af-menu" :style="{display: openStatus['basic'] ? 'block' : 'none'}">
                    <li class="af-menu-item" style="padding-left: 40px;" v-for="item in componentConfigGetter.basic" :key="item.type" @click="handleAddField(item)">
                        {{item.name}}
                    </li>
                </ul>
            </li>
            <li class="af-submenu">
                <div class="af-submenu__title" style="padding-left: 20px;" @click="handleOpen(config.name)">
                    自定义组件库
                    <i class="af-submenu__icon-arrow el-icon-arrow-down" :style="{transform: openStatus[config.name] ? 'rotate(180deg)' : ''}"></i>
                </div>
                <ul class="af-menu" :style="{display: openStatus[config.name] ? 'block' : 'none'}">
                    <li class="af-menu-item" style="padding-left: 40px;" v-for="item in componentConfigGetter[config.name]" :key="item.type" @click="handleAddField(item)">
                        {{item.name}}
                    </li>
                </ul>
            </li>
        </ul>
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
                componentTree: {},
                openStatus: {}
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
            },
            handleOpen (item) {
                this.openStatus[item] = !this.openStatus[item];
            }
        },
        mounted () {
            let openStatus = {};
            openStatus.basic = false;
            openStatus[this.config.name] = true;
            this.openStatus = openStatus;
        }
    }
</script>

<style scoped lang="less">
    .gallery-container {
        flex: 0 0 200px;
        border-right: 1px solid #ccc;
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

    .af-menu-top {
        min-height: 100%;
        max-height: 100vh;
        background-color: #eef1f6;
    }

    .af-menu {
        list-style: none;
        border-radius: 2px;
        position: relative;
        margin: 0;
        padding-left: 0;

        .li {
            list-style: none;
            &.af-submenu {
                .af-menu {
                    display: none;
                }
            }
        }

        .af-menu-item, .af-submenu__title {
            height: 42px;
            line-height: 42px;
            font-size: 14px;
            color: #48576a;
            padding: 0 10px;
            cursor: pointer;
            position: relative;
            transition: border-color .3s,background-color .3s,color .3s;
            box-sizing: border-box;
            white-space: nowrap;

            &* {
                vertical-align: middle;
            }

            &:hover {
                background-color: #d1dbe5;
            }
        }

        .af-submenu__icon-arrow {
            position: absolute;
            top: 50%;
            right: 20px;
            margin-top: -7px;
            transition: transform .3s;
            font-size: 12px;
        }


    }
</style>
