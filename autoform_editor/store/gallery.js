const gallery = {
    namespaced: true,
    state: {
        componentTree: {},
        componentConfig: {}
    },
    getters: {
        componentGetter: state => {
            return state.componentTree;
        },
        componentConfigGetter: state => {
            return state.componentConfig;
        }
    },
    mutations: {
        updateConfig (state, {config = {}}) {
            state.componentConfig = config;
        }
    },
    actions: {
        handleComponents ({ commit }, { data }) {
            let config = {};
            let componentKeys = Object.keys(data);
            componentKeys.forEach(key => {
                if (data[key].__CONFIG__ && data[key].__CONFIG__.tag) {
                    !config[data[key].__CONFIG__.tag] ? config[data[key].__CONFIG__.tag] = [] : '';
                    config[data[key].__CONFIG__.tag].push(data[key].__CONFIG__);
                }
            });
            commit('updateConfig', { config });
        },
    }
};
export default gallery;
