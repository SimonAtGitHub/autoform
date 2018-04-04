const viewport = {
    namespaced: true,
    state: {
        layoutTree: {
            layout: {},
            fields: [],
            model: {}
        },
        model: {}
    },
    getters: {
        LayoutTreeGetter (state) {
            return state.layoutTree;
        },
        modelGetter (state) {
            return state.model;
        }
    },
    mutations: {
        UpdateLayoutTree (state, {data = {}}) {
            state.layoutTree = data;
        },
        UpdateModel (state, {data = {}}) {
            state.model = data;
        }
    },
    actions: {
        getLayoutTree ({commit}, {data}) {
            // let result = data.layout;
            //
            // if (data.fields) {
            //     result.children = [];
            //     data.fields.forEach((fieldItem, index) => {
            //         result.children.push({
            //             id: `edit_component_${index}`,
            //             value: fieldItem
            //         })
            //     })
            // }

            commit('UpdateLayoutTree', { data });
            commit('UpdateModel', { data: data.model });
        }
    }
};
export default viewport;
