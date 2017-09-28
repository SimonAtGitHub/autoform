<template>
    <div>
        <h2>通用查询配置</h2>

        <el-tabs type="border-card" v-model="crrt_step">
            <el-tab-pane label="选择swagger" name="step1">
                <el-row>
                    <el-col :span="12" :offset="6">
                        <el-form ref="swaggerForm" :model="form" label-width="200px">
                            <el-form-item label="选择swagger" :rules="[{ required: true, message: '请选择 api地址' }]" prop="path">
                                <el-select v-model="form.path" placeholder="请选择swagger API 地址" style="width:100%" filterable @change="onApiChange">
                                    <el-option :label="item" :value="item" v-for="item in pathNames" :key="item"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Method" prop="method" :rules="[{ required: true, message: '请选择 method' }]">
                                <el-radio-group v-model="form.method">
                                    <el-radio :label="item" v-for="item in methods" :value="item" :key="item"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onAnalysis">解析</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="Query配置" name="step2">
                <el-table :data="request" style="width: 100%" ref="multipleTable" border @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column :fixed="item.fixed" :prop="item.prop" :label="item.label" :width="item.width" v-for="item in RequestTables" :key="item.prop">
                        <template scope="scope">
                            <div v-if="['control'].indexOf(item.prop)>=0">
                                <el-select v-model="request[scope.$index].control" style="width:100%" filterable>
                                    <el-option :label="item" :value="item" v-for="item in controlType" :key="item"></el-option>
                                </el-select>
                            </div>
                            <div v-else-if="['description'].indexOf(item.prop)>=0">
                                <el-input v-model="request[scope.$index].description">
                                </el-input>
                            </div>
                            <div v-else-if="['options'].indexOf(item.prop)>=0">
                                <el-input type="textarea" v-model="request[scope.$index].options" placeholder="label,value -> Enter"></el-input>
                            </div>
                            <div v-else>
                                {{scope.row[item.prop]}}
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <el-row>
                    <el-col :span="1" :offset="23">
                        <el-button type="primary" @click="goStep3">下一步</el-button>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="查询区配置" name="step3">
                <el-table ref="multipleTable" :data="response" style="width: 100%" border @selection-change="handleResSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column :prop="item.prop" :label="item.label" :width="item.width" v-for="item in ResponseTables" :key="item.prop">
                        <template scope="scope">
                            <div v-if="item.prop==='key'||item.prop==='index'">
                                {{scope.row[item.prop]}}
                            </div>
                            <div v-else>
                                <el-input v-model="response[scope.$index][item.prop]" style="width:100%"></el-input>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <el-row>
                    <el-col :span="1" :offset="23">
                        <el-button type="primary" @click="goStep4">下一步</el-button>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="最终结果" name="step4">
                <el-row>
                    <el-card class="box-card">
                        <auto-form :model="result.model" :fields="result.fields" :align="'right'" label-width="80px" ref="testForm" :inline="true" :span="12">
                            <el-form-item style="float:right">
                                <el-button type="primary">查 询</el-button>
                            </el-form-item>
                        </auto-form>
                    </el-card>
                    <el-card class="box-card" style="margin-top:15px">
                        <el-table :data="response" style="width: 100%" border>
                            <el-table-column :prop="item.prop" :label="item.label" :width="item.width" v-for="item in result.list" :key="item.prop">
                                <template scope="scope">
                                    {{scope.row[item.prop]}}
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-card>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>


// import swaggerJson from '../../common/swagger/vtdc.swagger.poimatch.json';
import swaggerJson from '../../swagger/vtdc.swagger.json';


import { RequestTables, ResponseTables, controlType, DealDefinitions } from './_util';

//import SwaggerParser from 'swagger-parser/dist/swagger-parser.js';

let paths = swaggerJson.paths;


let definitions = swaggerJson.definitions


let pathNames = Object.keys(paths);






export default {

    data() {
        return {
            form: {
                // path: '/tdc/budapest/api/v1/dictionary/version/list',
                // method: 'get'
                path: '',
                method: ''
            },
            request: [],
            response: [],
            responseStringfy: '',
            paths,
            pathNames,
            methods: [],
            crrt_step: 'step1',
            RequestTables,
            ResponseTables,
            controlType,
            result: {
                fields: [],
                model: {},
                list: []
            },
            multipleRequest: [],
            multipleResponse: []
        }
    },
    methods: {
        onApiChange() {
            let apiObj = this.paths[this.form.path];
            this.methods = Object.keys(apiObj);
        },
        goStep3() {
            let apiMethodsObj = paths[this.form.path];
            let apiObj = apiMethodsObj[this.form.method];


            this._handleResponse(apiObj);
            this.crrt_step = 'step3';
        },
        goStep4() {

            this._requestQueryDeal();

            this.crrt_step = 'step4';
        },
        handleSelectionChange(val) {
            this.multipleRequest = val;
        },
        handleResSelectionChange(val) {
            this.multipleResponse = val;
        },
        onAnalysis() {
            this.$refs.swaggerForm.validate(valid => {

                if (valid) {
                    let apiMethodsObj = paths[this.form.path];
                    let apiObj = apiMethodsObj[this.form.method];
                    this._handleRequest(apiObj);

                    //跳到 下一个 tab
                    this.crrt_step = 'step2';

                }
            });
        },

        _handleRequest(apiObj) {
            let ds = apiObj.parameters;
            this.request = this.multipleRequest = this.__setRequestDefault(ds);
        },
        __setRequestDefault(requestObj) {
            let result = [];
            result = requestObj.map(item => {
                item.control = 'input';
                return { ...item };
            });
            return result;
        },

        _requestQueryDeal() {

            let query = this.multipleRequest.map(item => {
                let options = !item.options ? [] : item.options.split(/[\r\n]/).map(optionItem => {
                    let arr = optionItem.split(/[,，]/);
                    return {
                        label: arr[0],
                        value: arr[1]
                    }
                });
                return {
                    key: item.name,
                    type: item.control,
                    templateOptions: {
                        label: item.description,
                        options: options
                    }
                }
            });

            this.result.fields = query;

            let list = this.multipleResponse.map(item => {
                return {
                    label: item.description,
                    prop: item.key,
                    width: item.width
                };
            });

            this.result.list = list;

        },
        _handleResponse(apiObj) {


            let firstStr = apiObj.responses[200].schema.$ref;




            let firstSchema = this.__handleResponseSchema(firstStr, definitions);

            if (this.__schemaHandleProperties(firstSchema)) {
                return;
            }

            let secondStr = firstSchema.properties.data.$ref;

            let secondSchema = this.__handleResponseSchema(secondStr, definitions);

            if (this.__schemaHandleProperties(secondSchema)) {
                return;
            }

            let thirdStr = secondSchema.properties.data.items.$ref;
            let thirdSchema = this.__handleResponseSchema(thirdStr, definitions).properties;

            if (this.__schemaHandleProperties(thirdSchema)) {
                return;
            }

            // this.response = Object.keys(thirdSchema).map((item, index) => {
            //     let obj = thirdSchema[item];
            //     obj.filter = '';
            //     obj.index = index;
            //     obj.key = item;
            //     return { ...obj }
            // });

        },
        __schemaHandleProperties(schema) {
            if (schema.properties) {
                this.response = Object.keys(schema.properties).map((item, index) => {
                    let obj = schema.properties[item];
                    obj.filter = '';
                    obj.index = index;
                    obj.key = item;
                    return { ...obj }
                });
                return true;
            }
            return false;
        },
        __handleResponseSchema($refStr, definitions) {
            let deal$ref = DealDefinitions($refStr);
            return definitions[deal$ref];
        }
    }

}
</script>

<style lang="scss" scoped>
// .tab4-wrap {
//     display: flex;
//     >div {
//         flex: 1;
//         &:first-of-type {
//             textarea {
//                 height: 80vh;
//                 width: 100%;
//             }
//         }
//     }
// }
</style>