import  registerCmp  from    'autoform_editor/components/index'
import viewport from 'autoform_editor/store/viewport'
import gallery from 'autoform_editor/store/gallery'
import Utils from 'autoform_editor/utils'
export default    {

    install(Vue, {store}) {
        registerCmp(Vue);

        if (!store) {
            console.error('autoform editor 需要 vuex');
            return;
        }
        if (!store.state.viewport) {
            store.registerModule('gallery', gallery);
        }
        if (!store.state.viewport) {
            store.registerModule('viewport', viewport);
        }
        Vue.$autoformEditor = {
            register: Utils.register
        };

        // store.registerModule(['nested', 'myModule'], {
        //     // ...
        //   })
   }

}