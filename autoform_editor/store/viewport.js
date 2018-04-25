const viewport = {
    namespaced: true,
    state: {
        layout: {},
        fields: [],
        model: {},
        componentConfig: {},
        index: 0,
        fieldId: 0 //暂存拖拽id
    },
    getters: {
        componentConfigGetter (state) {
            return state.componentConfig;
        },
        layoutGetter (state) {
            return state.layout;
        },
        fieldsGetter (state) {
            return state.fields;
        },
        modelGetter (state) {
            return state.model;
        }
    },
    mutations: {
        UpdateConfig (state, {config = {}}) {
            state.componentConfig = null;
            state.componentConfig = config;
        },
        updateFieldId (state, {fieldId = 0}) {
            state.fieldId = fieldId;
        },
        updateModel (state, {model = {}}) {
            state.model = null;
            state.model = model;
        },
        updateLayout (state, {layout = {}}) {
            state.layout = null;
            state.layout = layout;
        },
        updateField (state, {fields = []}) {
            state.fields = null;
            state.fields = fields;
        }
    },
    actions: {
        //获取field，model，layout
        getLayoutTree ({commit, state}, {data}) {
            data.fields.map((item, index) => {
                item['id'] = index;
                state.index = index;
            });
            commit('updateField', { fields: data.fields});
            commit('updateModel', { model: data.model });
            commit('updateLayout', { layout: data.layout });
        },
        //新增fields和model
        addLayoutTree ({state, commit}, {data}) {
            let _data = JSON.parse(JSON.stringify(data));
            //id递增
            state.index ++;
            _data.id = state.index;
            //避免field重复key
            let modelList = Object.keys(state.model);
            if(modelList.indexOf(data.key) > -1) {
                _data.key = `${_data.key}${_data.id}`;
            }
            //改变fields和model
            state.fields.push(_data);
            state.model[_data.key] = data.value || null;
            commit('updateModel', {model: state.model});

            return _data;
        },
        //删除fields和model中的某一项
        removeLayoutTree ({state, commit}, {id}) {
            let removeFileds = {};
            //根据id 删除fields
            state.fields.forEach((item, index) => {
                if ( Number(item.id) === Number(id)) {
                    removeFileds = item;
                    state.fields.splice(index, 1);
                }
            });
            //删除model对应的key
            delete state.model[removeFileds.key];
        },
        //更新layout 或者 fields的某一项
        editLayoutTree ({state, commit}, {field, isLayout}) {
            if (!isLayout) {
                state.fields.forEach((item, index) => {
                    if (item.id === field.id) {
                        state.fields[index] = field;
                    }
                });
            } else {
                state.layout = field;
            }
            commit('updateField', {fields: state.fields});
        },
        //拖拽后重新排序(fileds)
        reSortLayoutTree ({state}, {fieldId = 0, end = false}) {
            let dragItem = {};
            let index = 0;
            state.fields.forEach((item, index) => {
                if (item.id === state.fieldId) {
                    dragItem = item;
                    state.fields.splice(index, 1);
                }
            });
            state.fields.forEach((item, idx) => {
                if (item.id === fieldId) {
                    index = idx;
                }
            });
            if (end) {
                state.fields.push(dragItem);
            } else {
                state.fields.splice(index, 0, dragItem);
            }
        },
        //组装左侧组件库需要的config
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
        //自定义基础组件配置
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
