<template>
    <div class="gallery-container">
        <div class="gallery-wrap">
            <ul id="list">
                <li v-for="item in componentTree">{{item.name}}</li>
            </ul>
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
                'componentGetter'
            ])
        },
        methods: {
            sort () {
                let target = document.getElementById('list');
                let sortable = Sortable.create(target);
            }
        },
        watch: {
            componentData (val) {
                this.componentTree = val[this.config.name];
            }
        },
        mounted () {
            this.componentData = this.componentGetter;
            this.sort();
        },
    }
</script>

<style scoped>
.gallery-container{
    flex: 1;
}
    .gallery-wrap {
    }
</style>
