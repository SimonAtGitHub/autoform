const viewport = {
    namespaced: true,
    state: {
        layoutTree: {
            layout: {},
            fields: [],
            model: {}
        },
        model: {},
        componentConfig: {},
        index: 0
    },
    getters: {
        LayoutTreeGetter (state) {
            return state.layoutTree;
        },
        modelGetter (state) {
            return state.model;
        },
        componentConfigGetter (state) {
            return state.componentConfig;
        }
    },
    mutations: {
        UpdateLayoutTree (state, {data = {}}) {
            state.layoutTree = null;
            state.layoutTree = data;
        },
        UpdateModel (state, {data = {}}) {
            state.model = data;
        },
        UpdateConfig (state, {config = {}}) {
            state.componentConfig = null;
            state.componentConfig = config;
        }
    },
    actions: {
        getLayoutTree ({commit, state}, {data}) {
            data.fields.map((item, index) => {
                item['id'] = index;
                state.index = index;
            });
            commit('UpdateLayoutTree', { data });
            commit('UpdateModel', { data: data.model });
        },
        sortLayoutTree ({state, commit}, {order}) {
            let result = [];
            let data = state.layoutTree;
            order.map(item => {
                result.push(data.fields.find(field => field.id === Number(item)))
            });
            data.fields = result;
            commit('UpdateLayoutTree', { data });
        },
        addLayoutTree ({state, commit}, {data}) {
            let _layoutTree = state.layoutTree;
            let _data = JSON.parse(JSON.stringify(data));
            state.index ++;
            _data.id = state.index;
            let modelList = Object.keys(_layoutTree.model);
            if(modelList.indexOf(data.key) > -1) {
                _data.key = `${_data.key}${_data.id}`;
            }
            _layoutTree.model[_data.key] = data.value || null;
            _layoutTree.fields.push(_data);

            commit('UpdateLayoutTree', { data: _layoutTree });
        },
        removeLayoutTree ({state, commit}, {id}) {
            let _layoutTree = state.layoutTree;
            let spliceIndex = -1;
            _layoutTree.fields.forEach((item, index) => {
                if ( Number(item.id) === Number(id)) {
                    spliceIndex = index;
                }
            });
            delete _layoutTree.model[_layoutTree.fields[spliceIndex].key];
            _layoutTree.fields.splice(spliceIndex, 1);
            commit('UpdateLayoutTree', { data: _layoutTree });
        },
        editLayoutTree ({state, commit}, {field, isLayout}) {
            let _layoutTree = state.layoutTree;
            if (!isLayout) {
                _layoutTree.fields.forEach((item, index) => {
                    if (item.id === field.id) {
                        _layoutTree.fields[index] = field;
                    }
                });
            } else {
                _layoutTree.layout = field;
            }
            commit('UpdateLayoutTree', { data: _layoutTree });
        },
        handleComponents ({ commit }, { data }) {
            let config = {};
            let componentKeys = Object.keys(data);
            componentKeys.forEach(key => {
                if (data[key].__CONFIG__ && data[key].__CONFIG__.tag) {
                    !config[data[key].__CONFIG__.tag] ? config[data[key].__CONFIG__.tag] = [] : '';
                    config[data[key].__CONFIG__.tag].push(data[key].__CONFIG__);
                }
            });
            commit('UpdateConfig', { config });
        },
        handleBasicConfig ({commit, state}, {config}) {
            let _config = state.componentConfig;
            config.forEach(item => {
                _config[item.tag] ? _config[item.tag].push(item) : _config[item.tag] = [item];
            });
            commit('UpdateConfig', { config: _config });
        }
    }
};
export default viewport;
