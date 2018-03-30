const gallery = {
    namespaced: true,
    state: {
        componentTree: {}
    },
    getters: {
        componentGetter: state => {
            return state.componentTree;
        }
    },
    mutations: {

    },
    actions: {
        updateComponents ({ state }, { data }) {
            let componentKeys = Object.keys(data);
            componentKeys.forEach(key => {
                let keyName = key.match(/form_(\S*)_/) ? key.match(/form_(\S*)_/)[1] : '';
                if (keyName && data[key].__CONFIG__) {
                    !state.componentTree[keyName] ? state.componentTree[keyName] = [] : '';
                    state.componentTree[keyName].push({
                        name: data[key].__CONFIG__.name,
                        component: data[key],
                        config: data[key].__CONFIG__
                    });
                }
            });
        },
    }
};
export default gallery;
