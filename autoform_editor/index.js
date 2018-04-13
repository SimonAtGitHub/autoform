import registerCmp from 'autoform_editor/components/index'
import viewport from 'autoform_editor/store/viewport'
export default {
    install(Vue, {store}) {
        registerCmp(Vue);

        if (!store) {
            console.error('autoform editor 需要 vuex');
            return;
        }
        if (!store.state.viewport) {
            store.registerModule('viewport', viewport);
        }
   }

}