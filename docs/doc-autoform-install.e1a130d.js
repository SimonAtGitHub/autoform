webpackJsonp([1],{

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./autoform-cache.md": 250,
	"./autoform-child.md": 253,
	"./autoform-custom.md": 256,
	"./autoform-editor.md": 261,
	"./autoform-install.md": 264,
	"./autoform-props.md": 267,
	"./autoform-tabs.md": 270,
	"./autoform-validator.md": 273,
	"./autoform.md": 276
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 235;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            model1: {
                name: "hello~",
                region: "2",
                date1: "",
                date2: "",
                desc: "",
                type: []
            },
            input: 1,
            layout: {
                align: "left",
                labelWidth: "100px",
                inline: false,
                span: 8,
                gutter: 50,
                cache: true
            },
            fields1: [[{
                key: "name",
                type: "input",
                templateOptions: {
                    span: 8,
                    label: "活动名称",
                    readonly: false
                },
                isWatch: true,
                value: ''
            }], [{
                key: "region",
                type: "select",
                templateOptions: {
                    label: "活动区域",
                    placeholder: "请选择活动区域",
                    span: 12,
                    optionKey: "value",
                    multiple: false,
                    initOptionsKey: 'initSelectOpt',
                    options: []
                },
                isWatch: true
            }], [{
                key: "date1",
                type: "datepicker",
                templateOptions: {
                    label: "活动时间",
                    placeholder: "选择日期",
                    span: 12
                }
            }, {
                key: "date2",
                type: "timepicker",
                templateOptions: {
                    label: "选择时间",
                    placeholder: "选择时间",
                    span: 12
                }
            }, {
                key: "type",
                type: "checkbox",
                templateOptions: {
                    label: "活动性质",
                    span: 24,
                    options: [{
                        label: "美食/餐厅线上活动",
                        value: "美食/餐厅线上活动value"
                    }, {
                        label: "地推活动",
                        value: "地推活动value"
                    }, {
                        label: "线下主题活动",
                        value: "线下主题活动value"
                    }, {
                        label: "单纯品牌曝光",
                        value: "单纯品牌曝光value"
                    }]
                }
            }, {
                key: "type2",
                type: "radio",
                templateOptions: {
                    label: "活动性质RADIO",
                    span: 24,
                    options: [{
                        label: "美食/餐厅线上活动",
                        value: "美食/餐厅线上活动value"
                    }, {
                        label: "地推活动",
                        value: "地推活动value"
                    }, {
                        label: "线下主题活动",
                        value: "线下主题活动value"
                    }, {
                        label: "单纯品牌曝光",
                        value: "单纯品牌曝光value"
                    }]
                },
                isWatch: true
            }, {
                key: "desc",
                type: "textarea",
                templateOptions: {
                    label: "活动形式"
                },
                isWatch: true
            }]],
            query$: {}
        };
    },

    autoform: {
        eventBus: {}
    },
    methods: {
        reset: function reset() {
            this.$refs.tagForm.resetForm();
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.query$.eventBus = this.$refs.tagForm.eventBus;
        var opt = [{
            label: "区域一",
            value: "1"
        }, {
            label: "区域二",
            value: "2"
        }, {
            label: "区域三",
            value: "3"
        }];
        this.$nextTick(function () {
            _this.query$.eventBus.$emit('initSelectOpt', opt);
        });
    }
};

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            model: {
                name: '',
                hello: ''
            },
            layout: {
                align: 'left',
                labelWidth: '100px',
                inline: false
            },
            fields: [{
                key: 'name',
                type: 'input',
                templateOptions: {
                    label: '审批人'
                }
            }, {
                key: 'hello',
                type: 'hello',
                templateOptions: {
                    label: '自定义',
                    action: 'handleClick'
                }
            }]
        };
    },

    autoform: {
        eventBus: {
            handleClick: function handleClick() {
                for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                    arg[_key] = arguments[_key];
                }

                console.log('自定义组件事件', arg);
            }
        }
    }
};

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            model1: {
                name: "hello~",
                radio: '',
                radio1: '',
                radio2: '',
                checkbox: [],
                checkbox1: [],
                checkbox2: []
            },
            layout: {
                align: "left",
                labelWidth: "100px",
                custom: true
            },
            fields1: [{
                key: 'radio',
                type: 'radio',
                templateOptions: {
                    label: 'radio',
                    options: [{
                        label: '枚举A',
                        value: 'A'
                    }, {
                        label: '枚举B',
                        value: 'B'
                    }]
                }
            }, {
                key: 'radio1',
                type: 'radio',
                templateOptions: {
                    label: 'radio1',
                    options: [{
                        label: '区域一',
                        value: 'shanghai'
                    }, {
                        label: '区域二',
                        value: 'beijing'
                    }]
                }
            }, {
                key: 'radio2',
                type: 'radio',
                templateOptions: {
                    label: 'radio2',
                    options: [{
                        label: '区域三',
                        value: 'shanghai'
                    }, {
                        label: '区域四',
                        value: 'beijing'
                    }]
                }
            }, {
                key: 'checkbox',
                type: 'checkbox',
                templateOptions: {
                    label: 'checkbox',
                    options: [{
                        label: '枚举A',
                        value: 'A'
                    }, {
                        label: '枚举B',
                        value: 'B'
                    }]
                }
            }, {
                key: 'checkbox1',
                type: 'checkbox',
                templateOptions: {
                    label: 'checkbox1',
                    options: [{
                        label: '枚举A',
                        value: 'A'
                    }, {
                        label: '枚举B',
                        value: 'B'
                    }]
                }
            }, {
                key: 'checkbox2',
                type: 'checkbox',
                templateOptions: {
                    label: 'checkbox2',
                    options: [{
                        label: '枚举A',
                        value: 'A'
                    }, {
                        label: '枚举B',
                        value: 'B'
                    }]
                }
            }, {
                key: 'date1',
                type: 'datepicker',
                templateOptions: {
                    label: '活动日期',
                    placeholder: '选择日期',
                    span: 12
                }
            }, {
                key: 'date2',
                type: 'timepicker',
                templateOptions: {
                    label: '活动时间',
                    placeholder: '选择时间',
                    span: 12
                }
            }]
        };
    },

    methods: {
        reset: function reset() {
            this.$refs.tagForm.resetForm();
        },
        clear: function clear() {
            this.$refs.tagForm.clearForm();
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            model: {
                name: "",
                name2: "",
                date1: ""
            },
            layout: {
                align: "left",
                labelWidth: "100px",
                inline: false
            },
            fields: {
                tab1: [{
                    key: "name",
                    type: "input",
                    templateOptions: {
                        label: "审批人"
                    }
                }, {
                    key: "name2",
                    type: "input",
                    templateOptions: {
                        label: "name2",
                        action: "handleClick"
                    }
                }],
                tab2: [{
                    key: "date1",
                    type: "datepicker",
                    templateOptions: {
                        label: "活动时间",
                        placeholder: "选择日期",
                        span: 12
                    }
                }]
            },
            tabs: {
                active: "tab2",
                list: [{
                    name: "tab1",
                    label: "标题1",
                    disabled: false
                }, {
                    name: "tab2",
                    label: "标题2"
                }],
                tabClick: "handleClick"
            }
        };
    },

    autoform: {
        eventBus: {
            handleClick: function handleClick() {
                for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                    arg[_key] = arguments[_key];
                }

                console.log(111, arg);
            }
        }
    }
};

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            model1: {
                name: "hello~",
                region: "2"
            },
            input: 1,
            layout: {
                align: "left",
                labelWidth: "100px",
                inline: false,
                span: 8,
                gutter: 50
            },
            fields1: [[{
                key: "name",
                type: "input",
                templateOptions: {
                    span: 8,
                    label: "活动名称",
                    readonly: false
                },
                isWatch: true,
                value: '',
                validators: ["required:change:活动名称必填", "customValid:change"]
            }], [{
                key: "region",
                type: "select",
                templateOptions: {
                    label: "活动区域",
                    placeholder: "请选择活动区域",
                    span: 12,
                    optionKey: "value",
                    multiple: false,
                    initOptionsKey: 'initSelectOpt',
                    options: []
                },
                isWatch: true
            }]],
            query$: {}
        };
    },

    autoform: {
        eventBus: {},
        validators: {
            customValid: function customValid(rule, value, callback) {
                if (value < 18) {
                    callback(new Error('错误原因'));
                } else {
                    callback();
                }
            }
        }
    },
    methods: {
        reset: function reset() {
            this.$refs.tagForm.resetForm();
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.query$.eventBus = this.$refs.tagForm.eventBus;
        var opt = [{
            label: "区域一",
            value: "1"
        }, {
            label: "区域二",
            value: "2"
        }, {
            label: "区域三",
            value: "3"
        }];
        this.$nextTick(function () {
            _this.query$.eventBus.$emit('initSelectOpt', opt);
        });
    }
};

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      model1: {
        name: 'hello~',
        type: []
      },
      layout: {
        align: 'left',
        labelWidth: '100px',
        inline: false,
        span: 24
      },
      fields1: [{
        key: 'name',
        type: 'input',
        templateOptions: {
          label: '活动名称'
        }
      }, {
        key: 'region',
        type: 'select',
        templateOptions: {
          label: '活动区域',
          placeholder: '请选择活动区域',
          options: [{
            label: '区域一',
            value: 'shanghai'
          }, {
            label: '区域二',
            value: 'beijing'
          }]
        }
      }, {
        key: 'date1',
        type: 'datepicker',
        templateOptions: {
          label: '活动时间',
          placeholder: '选择日期',
          span: 12
        }
      }, {
        key: 'date2',
        type: 'timepicker',
        templateOptions: {
          placeholder: '选择时间',
          span: 12
        }
      }, {
        key: 'type',
        type: 'checkbox',
        templateOptions: {
          label: '活动性质',
          options: [{
            label: '美食/餐厅线上活动',
            value: '美食/餐厅线上活动'
          }, {
            label: '地推活动',
            value: '地推活动'
          }, {
            label: '线下主题活动',
            value: '线下主题活动'
          }, {
            label: '单纯品牌曝光',
            value: '单纯品牌曝光'
          }]
        }
      }, {
        key: 'desc',
        type: 'textarea',
        templateOptions: {
          label: '活动形式'
        }
      }, {
        key: 'isOpen',
        type: 'switch',
        templateOptions: {
          label: '是否开启'
        }
      }, {
        key: 'button',
        type: 'button',
        templateOptions: {
          hasLabel: true,
          inline: true,
          className: 'button-wrap',
          label: '按钮组',
          buttonOpt: [{
            value: '按钮1',
            size: 'mini',
            type: 'primary',
            onClick: 'buttonClick'
          }, {
            value: '按钮1',
            size: 'mini',
            type: 'default',
            onClick: 'buttonClick'
          }]
        }
      }],
      model2: {
        name: '',
        type: []
      },
      layout2: {
        align: 'left',
        labelWidth: '100px',
        inline: true
      },
      fields2: [{
        key: 'name',
        type: 'input',
        templateOptions: {
          label: '审批人'
        }
      }, {
        key: 'region',
        type: 'select',
        templateOptions: {
          label: '活动区域',
          placeholder: '请选择活动区域',
          options: [{
            label: '区域一',
            value: 'shanghai'
          }, {
            label: '区域二',
            value: 'beijing'
          }]
        }
      }],
      layout3: {
        align: 'left',
        labelWidth: '100px',
        inline: false
      },
      fields3: [{
        key: 'name',
        type: 'input',
        templateOptions: {
          label: '活动名称'
        },
        validators: [{ required: true, message: '请输入活动名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
      }, {
        key: 'region',
        type: 'select',
        templateOptions: {
          label: '活动区域',
          placeholder: '请选择活动区域',
          options: [{
            label: '区域一',
            value: 'shanghai'
          }, {
            label: '区域二',
            value: 'beijing'
          }]
        }
      }, {
        key: 'date1',
        type: 'datepicker',
        templateOptions: {
          label: '活动时间',
          placeholder: '选择日期',
          span: 12
        }
      }, {
        key: 'date2',
        type: 'timepicker',
        templateOptions: {
          placeholder: '选择时间',
          span: 12
        }
      }, {
        key: 'type',
        type: 'checkbox',
        templateOptions: {
          label: '活动性质',
          options: [{
            label: '美食/餐厅线上活动',
            value: '美食/餐厅线上活动'
          }, {
            label: '地推活动',
            value: '地推活动'
          }, {
            label: '线下主题活动',
            value: '线下主题活动'
          }, {
            label: '单纯品牌曝光',
            value: '单纯品牌曝光'
          }]
        }
      }, {
        key: 'desc',
        type: 'textarea',
        templateOptions: {
          label: '活动形式'
        }
      }],
      model3: {
        name: '',
        status: 1
      },
      fields4: [{
        key: 'name',
        type: 'input',
        templateOptions: {
          label: '审批人'
        }
      }, {
        key: 'status',
        type: 'radio',
        templateOptions: {
          label: '活动状态',
          options: [{
            label: '线上品牌商赞助',
            value: 1
          }, {
            label: '线下场地免费',
            value: 0
          }]
        }
      }, {
        key: 'desc',
        type: 'textarea',
        templateOptions: {
          label: '活动形式'
        },
        display: 'displayFn'
      }],
      fields5: [{
        key: 'name',
        type: 'input',
        templateOptions: {
          label: '审批人'
        }
      }, {
        key: 'status',
        type: 'radio',
        templateOptions: {
          label: '活动状态',
          options: [{
            label: '线上品牌商赞助',
            value: 1
          }, {
            label: '线下场地免费',
            value: 0
          }]
        }
      }],
      layout4: {
        align: 'left',
        labelWidth: '100px',
        inline: false,
        span: 12,
        gutter: 60
      },
      model4: {
        region: '',
        type: [],
        status: ''
      },
      fields6: [{
        key: 'region',
        type: 'select',
        templateOptions: {
          label: '活动区域',
          placeholder: '请选择活动区域',
          options: [{
            label: '区域一',
            value: 'shanghai'
          }, {
            label: '区域二',
            value: 'beijing'
          }],
          onChange: 'handleChange1'
        }
      }, {
        key: 'type',
        type: 'checkbox',
        templateOptions: {
          label: '活动性质',
          options: [{
            label: '美食/餐厅线上活动',
            value: '美食/餐厅线上活动'
          }, {
            label: '地推活动',
            value: '地推活动'
          }, {
            label: '线下主题活动',
            value: '线下主题活动'
          }, {
            label: '单纯品牌曝光',
            value: '单纯品牌曝光'
          }],
          onChange: 'handleChange2'
        }
      }, {
        key: 'status',
        type: 'radio',
        templateOptions: {
          label: '活动形式',
          options: [{
            label: '上线',
            value: '1'
          }, {
            label: '下线',
            value: '0'
          }]
        }
      }],
      model5: {
        name1: "111",
        name2: "",
        date: "",
        time: ""
      },
      layout5: {
        align: "left",
        labelWidth: "100px",
        inline: false,
        gutter: 30
      },
      fields7: [[{
        key: "name1",
        type: "input",
        templateOptions: {
          span: 12,
          label: "活动名称1",
          onChange: 'keyUpFn'
        }
      }, {
        key: "name2",
        type: "input",
        templateOptions: {
          span: 12,
          label: "活动名称2",
          onChange: 'keyUpFn'
        }
      }], [{
        key: "date",
        type: "datepicker",
        templateOptions: {
          label: "选择日期",
          placeholder: "选择日期",
          span: 12
        }
      }, {
        key: "time",
        type: "timepicker",
        templateOptions: {
          label: "选择时间",
          placeholder: "选择时间",
          span: 12
        }
      }]]
    };
  },

  autoform: {
    eventBus: {
      handleChange1: function handleChange1(value, options, field) {
        console.log(value, options, field);
      },
      handleChange2: function handleChange2(value, options, field) {
        console.log(value, options, field);
      },
      displayFn: function displayFn(field, model, cb) {
        //console.log(field, model);
        if (model.status) {
          cb(true);
        } else {
          cb(false);
        }
      }
    }
  }
};

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(251);

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_cache_md__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_cache_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_cache_md__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_cache_md__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_cache_md__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56a8ce80_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_cache_md__ = __webpack_require__(252);
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_cache_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56a8ce80_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_cache_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._m(0),_vm._m(1),_vm._m(2),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n   <auto-form ref=\"tagForm\" :model=\"model1\" :fields=\"fields1\" :layout=\"layout\">\n       <el-form-item>\n           <el-button type=\"primary\">立即创建</el-button>\n           <el-button @click=\"reset\">取消</el-button>\n       </el-form-item>\n   </auto-form>\n</template>\n\n\n","script":"\n    export default {\n        data() {\n            return {\n                model1: {\n                    name: \"hello~\",\n                    region: \"2\",\n                    date1: \"\",\n                    date2: \"\",\n                    desc: \"\",\n                    type: []\n                },\n                input: 1,\n                layout: {\n                    align: \"left\",\n                    labelWidth: \"100px\",\n                    inline: false,\n                    span: 8,\n                    gutter: 50,\n                    cache: true\n                },\n                fields1: [\n                    [\n                        {\n                            key: \"name\",\n                            type: \"input\",\n                            templateOptions: {\n                                span: 8,\n                                label: \"活动名称\",\n                                readonly: false,\n                            },\n                            isWatch: true,\n                            value: ''\n                        }\n                    ],\n                    [\n                        {\n                            key: \"region\",\n                            type: \"select\",\n                            templateOptions: {\n                                label: \"活动区域\",\n                                placeholder: \"请选择活动区域\",\n                                span: 12,\n                                optionKey: \"value\",\n                                multiple: false,\n                                initOptionsKey: 'initSelectOpt',\n                                options: []\n                            },\n                            isWatch: true\n                        }\n                    ],\n                    [\n                        {\n                            key: \"date1\",\n                            type: \"datepicker\",\n                            templateOptions: {\n                                label: \"活动时间\",\n                                placeholder: \"选择日期\",\n                                span: 12\n                            }\n                        },\n                        {\n                            key: \"date2\",\n                            type: \"timepicker\",\n                            templateOptions: {\n                                label: \"选择时间\",\n                                placeholder: \"选择时间\",\n                                span: 12\n                            }\n                        },\n                        {\n                            key: \"type\",\n                            type: \"checkbox\",\n                            templateOptions: {\n                                label: \"活动性质\",\n                                span: 24,\n                                options: [\n                                    {\n                                        label: \"美食/餐厅线上活动\",\n                                        value: \"美食/餐厅线上活动value\"\n                                    },\n                                    {\n                                        label: \"地推活动\",\n                                        value: \"地推活动value\"\n                                    },\n                                    {\n                                        label: \"线下主题活动\",\n                                        value: \"线下主题活动value\"\n                                    },\n                                    {\n                                        label: \"单纯品牌曝光\",\n                                        value: \"单纯品牌曝光value\"\n                                    }\n                                ]\n                            }\n                        },\n                        {\n                            key: \"type2\",\n                            type: \"radio\",\n                            templateOptions: {\n                                label: \"活动性质RADIO\",\n                                span: 24,\n                                options: [\n                                    {\n                                        label: \"美食/餐厅线上活动\",\n                                        value: \"美食/餐厅线上活动value\"\n                                    },\n                                    {\n                                        label: \"地推活动\",\n                                        value: \"地推活动value\"\n                                    },\n                                    {\n                                        label: \"线下主题活动\",\n                                        value: \"线下主题活动value\"\n                                    },\n                                    {\n                                        label: \"单纯品牌曝光\",\n                                        value: \"单纯品牌曝光value\"\n                                    }\n                                ]\n                            },\n                            isWatch: true\n                        },\n                        {\n                            key: \"desc\",\n                            type: \"textarea\",\n                            templateOptions: {\n                                label: \"活动形式\"\n                            },\n                            isWatch: true,\n                        },\n                        {\n                            key: \"typeId\",\n                            type: \"input-tree\",\n                            templateOptions: {\n                                label: \"品类树\",\n                                // initOptionsKey: 'initTree'\n                                options: [\n                                    {\n                                        name: '测试',\n                                        id: 1,\n                                        disabled: true,\n                                        children: [\n                                            {\n                                                name: '测试zi',\n                                                id: 1\n                                            }\n                                        ]\n                                    },\n                                    {\n                                        name: '测试2',\n                                        id: 2\n                                    }\n                                ]\n                            }\n                        }\n                    ]\n                ],\n                query$: {}\n            };\n        },\n        autoform: {\n            eventBus: {\n\n            }\n        },\n        methods: {\n            reset () {\n                this.$refs.tagForm.resetForm();\n            }\n        },\n        mounted() {\n            this.query$.eventBus = this.$refs.tagForm.eventBus;\n            let opt = [\n                {\n                    label: \"区域一\",\n                    value: \"1\"\n                },\n                {\n                    label: \"区域二\",\n                    value: \"2\"\n                },\n                {\n                    label: \"区域三\",\n                    value: \"3\"\n                }\n            ];\n            this.$nextTick(()=> {\n                this.query$.eventBus.$emit('initSelectOpt', opt);\n            })\n        }\n    };\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('auto-form',{ref:"tagForm",attrs:{"model":_vm.model1,"fields":_vm.fields1,"layout":_vm.layout}},[_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("立即创建")]),_c('el-button',{on:{"click":_vm.reset}},[_vm._v("取消")])],1)],1)]],2),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n   "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout\"")]),_vm._v(">")]),_vm._v("\n       "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-form-item")]),_vm._v(">")]),_vm._v("\n           "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("立即创建"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("\n           "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"reset\"")]),_vm._v(">")]),_vm._v("取消"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("\n       "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-form-item")]),_vm._v(">")]),_vm._v("\n   "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n        data() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model1")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"hello~\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("region")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"2\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("date1")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("date2")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("desc")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": []\n                },\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("input")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"left\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"100px\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("8")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("gutter")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("50")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("cache")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v("\n                },\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields1")]),_vm._v(": [\n                    [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"name\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"input\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("8")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"活动名称\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n                            },\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("isWatch")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v("\n                        }\n                    ],\n                    [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"region\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"select\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"活动区域\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请选择活动区域\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("optionKey")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"value\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("multiple")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("initOptionsKey")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'initSelectOpt'")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": []\n                            },\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("isWatch")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v("\n                        }\n                    ],\n                    [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"date1\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"datepicker\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"活动时间\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"选择日期\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v("\n                            }\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"date2\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"timepicker\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"选择时间\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"选择时间\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v("\n                            }\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"type\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"checkbox\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"活动性质\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("24")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                                    {\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"美食/餐厅线上活动\"")]),_vm._v(",\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"美食/餐厅线上活动value\"")]),_vm._v("\n                                    },\n                                    {\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"地推活动\"")]),_vm._v(",\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"地推活动value\"")]),_vm._v("\n                                    },\n                                    {\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"线下主题活动\"")]),_vm._v(",\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"线下主题活动value\"")]),_vm._v("\n                                    },\n                                    {\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"单纯品牌曝光\"")]),_vm._v(",\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"单纯品牌曝光value\"")]),_vm._v("\n                                    }\n                                ]\n                            }\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"type2\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"radio\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"活动性质RADIO\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("24")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                                    {\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"美食/餐厅线上活动\"")]),_vm._v(",\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"美食/餐厅线上活动value\"")]),_vm._v("\n                                    },\n                                    {\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"地推活动\"")]),_vm._v(",\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"地推活动value\"")]),_vm._v("\n                                    },\n                                    {\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"线下主题活动\"")]),_vm._v(",\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"线下主题活动value\"")]),_vm._v("\n                                    },\n                                    {\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"单纯品牌曝光\"")]),_vm._v(",\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"单纯品牌曝光value\"")]),_vm._v("\n                                    }\n                                ]\n                            },\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("isWatch")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v("\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"desc\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"textarea\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"活动形式\"")]),_vm._v("\n                            },\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("isWatch")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"typeId\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"input-tree\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"品类树\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// initOptionsKey: 'initTree'")]),_vm._v("\n                                options: [\n                                    {\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'测试'")]),_vm._v(",\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1")]),_vm._v(",\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("children")]),_vm._v(": [\n                                            {\n                                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'测试zi'")]),_vm._v(",\n                                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1")]),_vm._v("\n                                            }\n                                        ]\n                                    },\n                                    {\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'测试2'")]),_vm._v(",\n                                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("2")]),_vm._v("\n                                    }\n                                ]\n                            }\n                        }\n                    ]\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("query$")]),_vm._v(": {}\n            };\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("autoform")]),_vm._v(": {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("eventBus")]),_vm._v(": {\n\n            }\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n            reset () {\n                "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.tagForm.resetForm();\n            }\n        },\n        mounted() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".query$.eventBus = "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.tagForm.eventBus;\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" opt = [\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"区域一\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1\"")]),_vm._v("\n                },\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"区域二\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"2\"")]),_vm._v("\n                },\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"区域三\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v("\n                }\n            ];\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$nextTick("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v("=>")]),_vm._v(" {\n                "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".query$.eventBus.$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'initSelectOpt'")]),_vm._v(", opt);\n            })\n        }\n    };\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"cache"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#cache","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" Cache")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('code',{pre:true},[_vm._v("layout.cache = true")]),_vm._v("  可以开启表单session缓存（即刷新页面后，会记录之前的表单元素值），默认不开启此功能")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"ji-ben-shi-yong"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#ji-ben-shi-yong","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 基本使用")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(254);

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_child_md__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_child_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_child_md__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_child_md__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_child_md__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9cbbe796_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_child_md__ = __webpack_require__(255);
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_child_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9cbbe796_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_child_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._m(0),_c('p',[_vm._v("如果基本组件库无法满足需求，你也可以使用自己定义的子组件")]),_vm._m(1),_vm._m(2),_vm._m(3),_c('p',[_vm._v("规则：")]),_vm._m(4),_vm._m(5),_vm._m(6),_c('p',[_vm._v("规则：")]),_vm._m(7),_vm._m(8),_c('p',[_vm._v("这里写了子组件Hello")]),_vm._m(9),_vm._m(10),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n    <div>\n        <auto-form ref=\"tagForm1\" :model=\"model\" :fields=\"fields\" :layout=\"layout\"></auto-form>\n    </div>\n</template>\n\n","script":"\n    export default {\n        data() {\n            return {\n                model: {\n                    name: '',\n                    hello: ''\n                },\n                layout: {\n                    align: 'left',\n                    labelWidth: '100px',\n                    inline: false\n                },\n                fields: [\n                    {\n                        key: 'name',\n                        type: 'input',\n                        templateOptions: {\n                            label: '审批人'\n                        }\n                    },\n                    {\n                        key: 'hello',\n                        type: 'hello',\n                        templateOptions: {\n                            label: '自定义',\n                            action: 'handleClick'\n                        }\n                    },\n                ]\n            };\n        },\n        autoform: {\n            eventBus: {\n                handleClick(...arg) {\n                    console.log('自定义组件事件', arg);\n                }\n            }\n        }\n    };\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('div',[_c('auto-form',{ref:"tagForm1",attrs:{"model":_vm.model,"fields":_vm.fields,"layout":_vm.layout}})],1)]],2),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n        data() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("hello")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v("\n                },\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'left'")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'100px'")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n                },\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields")]),_vm._v(": [\n                    {\n                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'name'")]),_vm._v(",\n                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(",\n                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'审批人'")]),_vm._v("\n                        }\n                    },\n                    {\n                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'hello'")]),_vm._v(",\n                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'hello'")]),_vm._v(",\n                        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'自定义'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("action")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'handleClick'")]),_vm._v("\n                        }\n                    },\n                ]\n            };\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("autoform")]),_vm._v(": {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("eventBus")]),_vm._v(": {\n                handleClick(...arg) {\n                    "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'自定义组件事件'")]),_vm._v(", arg);\n                }\n            }\n        }\n    };\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"zi-ding-yi-zi-zu-jian"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#zi-ding-yi-zi-zu-jian","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 自定义子组件")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"yin-ru-fang-shi"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#yin-ru-fang-shi","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 引入方式")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h4',{attrs:{"id":"1-wen-jian-jia-zhu-ce-zi-zu-jian"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#1-wen-jian-jia-zhu-ce-zi-zu-jian","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 1.文件夹注册子组件")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-shell"}},[_vm._v("Vue.$autoform.RegisterDir(()=>require.context('./components/autoform', 'c'));\n")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_vm._v("在vue的入口文件添加如上代码")]),_c('li',[_vm._v("其中，第一个参数代表子组件文件夹路径")]),_c('li',[_vm._v("第二个参数代表，想要添加到autoform中子组件的文件夹前缀，默认为'c'")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h4',{attrs:{"id":"2-zhi-jie-yin-ru"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#2-zhi-jie-yin-ru","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 2.直接引入")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-shell"}},[_vm._v("Vue.$autoform.Register(Vue,[Components...],{prefix: \"c\"})\n")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_vm._v("参数中填入组件对象数组")]),_c('li',[_vm._v("组件名取组件名减去前缀prefix，例如cHello的type对应为'hello'")]),_c('li',[_vm._v("prefix默认为'c'")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"zi-zu-jian"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#zi-zu-jian","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 子组件")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-shell"}},[_vm._v("// PATH:/components/autoform/cHello.vue\n<template>\n    <div>\n        <div>\n            <p>基本的变量可以通过\"mixins\"获取，这里有开发组件需要的一些变量</p>\n            <p>自定义子组件：Hello</p>\n            <p>field: {{field}}</p>\n            <p>model: {{model}}</p>\n            <p>layout: {{layout}}</p>\n            <p>to: {{to}}</p>\n        </div>\n    </div>\n</template>\n\n<script>\n    import {baseField} from \"@hfe/autoform\";\n    export default {\n        mixins: [baseField],\n        name: 'cHello',\n        data () {\n            return {};\n        },\n        methods: {}\n    };\n</script>\n\n<style>\n\n</style>\n")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"ji-ben-shi-yong"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#ji-ben-shi-yong","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 基本使用")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(257);

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_custom_md__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_custom_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_custom_md__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_custom_md__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_custom_md__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b3c32db_hasScoped_true_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_custom_md__ = __webpack_require__(260);
function injectStyle (ssrContext) {
  __webpack_require__(258)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b3c32db"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_custom_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b3c32db_hasScoped_true_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_custom_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(259);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(233)("02d0a662", content, true);

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(232)(false);
// imports


// module
exports.push([module.i, "\n.form-wrap[data-v-2b3c32db] {\n    padding: 20px;\n}\n.group-wrap[data-v-2b3c32db] {\n    border: 1px solid #eaeefb;\n}\n.group-wrap > div[data-v-2b3c32db]:last-of-type {\n    padding: 10px;\n}\n.group-block[data-v-2b3c32db] {\n    padding: 10px;\n    background-color: #e5e9f2;\n    border-bottom: 1px solid #eaeefb;\n}\n.button-wrap[data-v-2b3c32db] {\n    padding: 10px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n", ""]);

// exports


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._m(0),_c('p',[_vm._v("在复杂的场景中，用户想要根据自己的需求进行自定义展示")]),_vm._m(1),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n<div>\n    <auto-form ref=\"tagForm\" :model=\"model1\" :fields=\"fields1\" :layout=\"layout\">\n     <template slot-scope=\"ops\">\n        <div class=\"form-wrap\">\n            <div class=\"group-wrap\">\n                <div class=\"group-block\">\n                    分组展示A：\n                </div>\n                <div>\n                    <el-row>\n                        <el-col :span=\"12\">\n                            <autoform-custom-field :options.sync=\"ops\" :field-key=\"'radio'\"></autoform-custom-field>\n                        </el-col>\n                        <el-col :span=\"12\">\n                            <autoform-custom-field :options.sync=\"ops\" :field-key=\"'radio1'\"></autoform-custom-field>\n                        </el-col>\n                        <el-col :span=\"12\">\n                            <autoform-custom-field :options.sync=\"ops\" :field-key=\"'radio2'\"></autoform-custom-field>\n                        </el-col>\n                    </el-row>\n                </div>\n            </div>\n            <div class=\"group-wrap\">\n                <div class=\"group-block\">\n                    分组展示B：\n                </div>\n                <div>\n                    <el-row>\n                        <el-col :span=\"12\">\n                            <autoform-custom-field :options.sync=\"ops\" :field-key=\"'checkbox'\"></autoform-custom-field>\n                        </el-col>\n                        <el-col :span=\"12\">\n                            <autoform-custom-field :options.sync=\"ops\" :field-key=\"'checkbox1'\"></autoform-custom-field>\n                        </el-col>\n                        <el-col :span=\"12\">\n                            <autoform-custom-field :options.sync=\"ops\" :field-key=\"'checkbox2'\"></autoform-custom-field>\n                        </el-col>\n                    </el-row>\n                </div>\n            </div>\n            <div class=\"group-wrap\">\n                <div class=\"group-block\">\n                    分组展示C：\n                </div>\n                <div>\n                    <el-row>\n                        <el-col :span=\"12\">\n                            <autoform-custom-field :options.sync=\"ops\" :field-key=\"'date1'\"></autoform-custom-field>\n                        </el-col>\n                        <el-col :span=\"12\">\n                            <autoform-custom-field :options.sync=\"ops\" :field-key=\"'date2'\"></autoform-custom-field>\n                        </el-col>\n                    </el-row>\n                </div>\n            </div>\n            <div class=\"button-wrap\">\n                <el-button type=\"primary\">立即创建</el-button>\n                <el-button @click=\"reset\">取消</el-button>\n                <el-button @click=\"clear\">清除</el-button>\n            </div>\n        </div>\n     </template>\n    </auto-form>\n</div>\n\n\n</template>\n\n\n","script":"\nimport Vue from \"vue\";\nexport default {\n  data() {\n    return {\n      model1: {\n        name: \"hello~\",\n        radio: '',\n        radio1: '',\n        radio2: '',\n        checkbox: [],\n        checkbox1: [],\n        checkbox2: []\n      },\n      layout: {\n        align: \"left\",\n        labelWidth: \"100px\",\n        custom: true\n      },\n        fields1: [\n            {\n                key: 'radio',\n                type: 'radio',\n                templateOptions: {\n                    label: 'radio',\n                    options: [\n                        {\n                            label: '枚举A',\n                            value: 'A'\n                        },\n                        {\n                            label: '枚举B',\n                            value: 'B'\n                        }\n                    ]\n                }\n            },\n            {\n                key: 'radio1',\n                type: 'radio',\n                templateOptions: {\n                    label: 'radio1',\n                    options: [\n                        {\n                            label: '区域一',\n                            value: 'shanghai'\n                        },\n                        {\n                            label: '区域二',\n                            value: 'beijing'\n                        }\n                    ]\n                }\n            },\n            {\n                key: 'radio2',\n                type: 'radio',\n                templateOptions: {\n                    label: 'radio2',\n                    options: [\n                        {\n                            label: '区域三',\n                            value: 'shanghai'\n                        },\n                        {\n                            label: '区域四',\n                            value: 'beijing'\n                        }\n                    ]\n                }\n            },\n            {\n                key: 'checkbox',\n                type: 'checkbox',\n                templateOptions: {\n                    label: 'checkbox',\n                    options: [\n                        {\n                            label: '枚举A',\n                            value: 'A'\n                        },\n                        {\n                            label: '枚举B',\n                            value: 'B'\n                        }\n                    ]\n                }\n            },\n            {\n                key: 'checkbox1',\n                type: 'checkbox',\n                templateOptions: {\n                    label: 'checkbox1',\n                    options: [\n                        {\n                            label: '枚举A',\n                            value: 'A'\n                        },\n                        {\n                            label: '枚举B',\n                            value: 'B'\n                        }\n                    ]\n                }\n            },\n            {\n                key: 'checkbox2',\n                type: 'checkbox',\n                templateOptions: {\n                    label: 'checkbox2',\n                    options: [\n                        {\n                            label: '枚举A',\n                            value: 'A'\n                        },\n                        {\n                            label: '枚举B',\n                            value: 'B'\n                        }\n                    ]\n                }\n            },\n            {\n                key: 'date1',\n                type: 'datepicker',\n                templateOptions: {\n                    label: '活动日期',\n                    placeholder: '选择日期',\n                    span: 12\n                }\n            },\n            {\n                key: 'date2',\n                type: 'timepicker',\n                templateOptions: {\n                    label: '活动时间',\n                    placeholder: '选择时间',\n                    span: 12\n                }\n            }\n        ]\n    };\n  },\n  methods: {\n    reset() {\n      this.$refs.tagForm.resetForm();\n    },\n    clear() {\n      this.$refs.tagForm.clearForm();\n    }\n  }\n};\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('div',[_c('auto-form',{ref:"tagForm",attrs:{"model":_vm.model1,"fields":_vm.fields1,"layout":_vm.layout},scopedSlots:_vm._u([{key:"default",fn:function(ops){return [_c('div',{staticClass:"form-wrap"},[_c('div',{staticClass:"group-wrap"},[_c('div',{staticClass:"group-block"},[_vm._v("\n                    分组展示A：\n                ")]),_c('div',[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('autoform-custom-field',{attrs:{"options":ops,"field-key":'radio'},on:{"update:options":function($event){ops=$event}}})],1),_c('el-col',{attrs:{"span":12}},[_c('autoform-custom-field',{attrs:{"options":ops,"field-key":'radio1'},on:{"update:options":function($event){ops=$event}}})],1),_c('el-col',{attrs:{"span":12}},[_c('autoform-custom-field',{attrs:{"options":ops,"field-key":'radio2'},on:{"update:options":function($event){ops=$event}}})],1)],1)],1)]),_c('div',{staticClass:"group-wrap"},[_c('div',{staticClass:"group-block"},[_vm._v("\n                    分组展示B：\n                ")]),_c('div',[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('autoform-custom-field',{attrs:{"options":ops,"field-key":'checkbox'},on:{"update:options":function($event){ops=$event}}})],1),_c('el-col',{attrs:{"span":12}},[_c('autoform-custom-field',{attrs:{"options":ops,"field-key":'checkbox1'},on:{"update:options":function($event){ops=$event}}})],1),_c('el-col',{attrs:{"span":12}},[_c('autoform-custom-field',{attrs:{"options":ops,"field-key":'checkbox2'},on:{"update:options":function($event){ops=$event}}})],1)],1)],1)]),_c('div',{staticClass:"group-wrap"},[_c('div',{staticClass:"group-block"},[_vm._v("\n                    分组展示C：\n                ")]),_c('div',[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('autoform-custom-field',{attrs:{"options":ops,"field-key":'date1'},on:{"update:options":function($event){ops=$event}}})],1),_c('el-col',{attrs:{"span":12}},[_c('autoform-custom-field',{attrs:{"options":ops,"field-key":'date2'},on:{"update:options":function($event){ops=$event}}})],1)],1)],1)]),_c('div',{staticClass:"button-wrap"},[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("立即创建")]),_c('el-button',{on:{"click":_vm.reset}},[_vm._v("取消")]),_c('el-button',{on:{"click":_vm.clear}},[_vm._v("清除")])],1)])]}}])})],1)]],2),_c('p',[_vm._v("通过设置"),_c('code',[_vm._v("layout.custom = true")]),_vm._v(" 来开启自定义布局")]),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout\"")]),_vm._v(">")]),_vm._v("\n     "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot-scope")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"ops\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form-wrap\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"group-wrap\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"group-block\"")]),_vm._v(">")]),_vm._v("\n                    分组展示A：\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-row")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(">")]),_vm._v("\n                            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v("  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"ops\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":field-key")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"'radio'\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(">")]),_vm._v("\n                            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v("  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"ops\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":field-key")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"'radio1'\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(">")]),_vm._v("\n                            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v("  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"ops\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":field-key")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"'radio2'\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-row")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"group-wrap\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"group-block\"")]),_vm._v(">")]),_vm._v("\n                    分组展示B：\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-row")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(">")]),_vm._v("\n                            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v("  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"ops\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":field-key")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"'checkbox'\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(">")]),_vm._v("\n                            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v("  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"ops\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":field-key")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"'checkbox1'\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(">")]),_vm._v("\n                            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v("  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"ops\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":field-key")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"'checkbox2'\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-row")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"group-wrap\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"group-block\"")]),_vm._v(">")]),_vm._v("\n                    分组展示C：\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-row")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(">")]),_vm._v("\n                            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v("  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"ops\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":field-key")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"'date1'\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(">")]),_vm._v("\n                            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v("  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"ops\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":field-key")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"'date2'\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("autoform-custom-field")]),_vm._v(">")]),_vm._v("\n                        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-col")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-row")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"button-wrap\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("立即创建"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"reset\"")]),_vm._v(">")]),_vm._v("取消"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"clear\"")]),_vm._v(">")]),_vm._v("清除"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n     "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" Vue "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"vue\"")]),_vm._v(";\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  data() {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model1")]),_vm._v(": {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"hello~\"")]),_vm._v(",\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("radio")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("radio1")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("radio2")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checkbox")]),_vm._v(": [],\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checkbox1")]),_vm._v(": [],\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checkbox2")]),_vm._v(": []\n      },\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout")]),_vm._v(": {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"left\"")]),_vm._v(",\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"100px\"")]),_vm._v(",\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("custom")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v("\n      },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields1")]),_vm._v(": [\n            {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'radio'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'radio'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'radio'")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'枚举A'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'A'")]),_vm._v("\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'枚举B'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'B'")]),_vm._v("\n                        }\n                    ]\n                }\n            },\n            {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'radio1'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'radio'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'radio1'")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域一'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'shanghai'")]),_vm._v("\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域二'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'beijing'")]),_vm._v("\n                        }\n                    ]\n                }\n            },\n            {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'radio2'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'radio'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'radio2'")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域三'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'shanghai'")]),_vm._v("\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域四'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'beijing'")]),_vm._v("\n                        }\n                    ]\n                }\n            },\n            {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'checkbox'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'checkbox'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'checkbox'")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'枚举A'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'A'")]),_vm._v("\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'枚举B'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'B'")]),_vm._v("\n                        }\n                    ]\n                }\n            },\n            {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'checkbox1'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'checkbox'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'checkbox1'")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'枚举A'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'A'")]),_vm._v("\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'枚举B'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'B'")]),_vm._v("\n                        }\n                    ]\n                }\n            },\n            {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'checkbox2'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'checkbox'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'checkbox2'")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'枚举A'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'A'")]),_vm._v("\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'枚举B'")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'B'")]),_vm._v("\n                        }\n                    ]\n                }\n            },\n            {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'date1'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'datepicker'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动日期'")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'选择日期'")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v("\n                }\n            },\n            {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'date2'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'timepicker'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动时间'")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'选择时间'")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v("\n                }\n            }\n        ]\n    };\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n    reset() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.tagForm.resetForm();\n    },\n    clear() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.tagForm.clearForm();\n    }\n  }\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"zi-ding-yi-bu-ju"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#zi-ding-yi-bu-ju","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 自定义布局")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"ji-ben-shi-yong"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#ji-ben-shi-yong","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 基本使用")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(262);

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b2338432_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_editor_md__ = __webpack_require__(263);
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b2338432_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_editor_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',{attrs:{"id":"autoform-editor"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#autoform-editor","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" autoform-editor")]),_c('p',[_vm._v("表单编辑功能组件")]),_c('h3',{attrs:{"id":"shi-yong"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#shi-yong","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 使用")]),_c('p',[_vm._v("在VUE的入口文件，添加如下配置：")]),_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-js"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" store "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'./store'")]),_vm._v("; "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("//添加相应的store路径")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" AutoForm "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'@hfe/autoform'")]),_vm._v(";\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" AutoForm_component_lib "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'@hfe/autoform_component_lib'")]),_vm._v(";\n\nVue.use(AutoForm, store);\nVue.use(AutoForm_component_lib);\n")])]),_c('h3',{attrs:{"id":"shi-yong-2"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#shi-yong-2","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 使用")]),_c('p',[_vm._v("autoform-editor作为组件使用，下面代码可自行复制测试，效果如后图")]),_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-js"}},[_vm._v("<!--用于编辑工作台测试-->\n<template>\n    <div>\n        <div class=\"edit-wrap\">\n            <autoform-editor ref=\"formEditor\"\n                             :config=\"config\"\n                             @handleSave=\"handleSave\"\n                             @handleEditField=\"handleEditField\">\n            </autoform-editor>\n            <div style=\"padding: 10px;\">\n                <el-button @click=\"changeField()\">测试filed</el-button>\n                <el-button @click=\"changeLayout()\">测试layout</el-button>\n                <el-button @click=\"getFields()\">获取fields</el-button>\n                <el-button @click=\"handleConfig()\">获取config</el-button>\n            </div>\n        </div>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                config: {\n                    name: 'baifang',\n                    schema: {\n                        fields: [\n                            {\n                                key: 'name',\n                                type: 'input',\n                                templateOptions: {\n                                    label: 'label名称'\n                                }\n                            },\n                            {\n                                key: 'region',\n                                type: 'select',\n                                templateOptions: {\n                                    label: '活动区域',\n                                    placeholder: '请选择活动区域',\n                                    options: [\n                                        {\n                                            label: '区域一',\n                                            value: 'shanghai'\n                                        },\n                                        {\n                                            label: '区域二',\n                                            value: 'beijing'\n                                        }\n                                    ]\n                                },\n                                value: ''\n                            },\n                        ],\n                        layout: {\n                            align: 'left',\n                            labelWidth: '100px',\n                            inline: false,\n                            span: 24\n                        },\n                        model: {\n                            name: '拜访人员',\n                            region: 'beijing'\n                        }\n                    }\n                }\n            };\n        },\n        methods: {\n            /* 保存 */\n            handleSave (data) {\n                console.log('handleSave', data);\n            },\n            /* 获取config */\n            handleConfig () {\n                console.log('handleConfig', this.$refs['formEditor'].getConfig());\n            },\n            /* 获取需要改变的field */\n            handleEditField (data) {\n                console.log('handleEditField', data);\n            },\n            /* 新增或删除field */\n            handleChangeField (field, fields, type, cb) {\n                console.log(field, fields, type);\n                //cb:true 可以添加\n                cb(1);\n            },\n            /* 改变field */\n            changeField() {\n                let field = {\n                    key: \"name\",\n                    id: 2,\n                    type: \"baifang_input\",\n                    templateOptions: {\n                        span: 8,\n                        label: \"活动名称\",\n                        onChange: 'keyUpFn'\n                    }\n                };\n                this.$refs['formEditor'].updateForm(field);\n            },\n            /* 改变layout */\n            changeLayout() {\n                let layout = {\n                    align: \"right\",\n                    labelWidth: \"100px\",\n                    inline: true,\n                    span: 24\n                };\n                this.$refs['formEditor'].updateForm(layout, true);\n            },\n            /* 获取全部fields */\n            getFields () {\n                console.log(this.$refs['formEditor'].getFields());\n            }\n        },\n        mounted() {\n            let config = [\n                {\n                    name: '拜访对象',\n                    tag: 'baifang',\n                    default: {\n                        key: 'visit_object',\n                        type: 'input',\n                        templateOptions: {\n                            label: '拜访对象'\n                        }\n                    }\n                },\n                {\n                    name: '拜访对象2',\n                    tag: 'baifang',\n                    default: {\n                        key: 'visit_object2',\n                        type: 'input',\n                        templateOptions: {\n                            label: '拜访对象2'\n                        }\n                    }\n                },\n                {\n                    name: '拜访方式',\n                    tag: 'baifang',\n                    default: {\n                        key: 'visit_mode',\n                        type: 'radio',\n                        templateOptions: {\n                            label: '拜访方式',\n                            options: [\n                                {\n                                    label: '电话',\n                                    value: 1\n                                },\n                                {\n                                    label: '上门',\n                                    value: 2\n                                },\n                                {\n                                    label: 'QQ',\n                                    value: 3\n                                },\n                                {\n                                    label: '邮件',\n                                    value: 4\n                                }\n                            ]\n                        }\n                    }\n                }\n            ];\n            this.$refs['formEditor'].setBasicConfig(config);\n        }\n    };\n</script>\n")])]),_c('h3',{attrs:{"id":"xiao-guo-tu"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#xiao-guo-tu","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 效果图")]),_c('img',{attrs:{"src":"http://o7pmhndnf.bkt.clouddn.com/work/editor-autoform.png","width":"800px"}}),_c('h3',{attrs:{"id":"config"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#config","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" config")]),_c('p',[_vm._v("autoform-editor 需要一些默认的配置，通过:config prop传入")]),_c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("key")]),_c('th',[_vm._v("说明")]),_c('th',[_vm._v("类型")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("name")]),_c('td',[_vm._v("编辑表单标识")]),_c('td',[_vm._v("String")])]),_c('tr',[_c('td',[_vm._v("schema")]),_c('td',[_vm._v("默认表单内容")]),_c('td',[_vm._v("Object")])])])]),_c('h3',{attrs:{"id":"shi-jian"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#shi-jian","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 事件")]),_c('p',[_vm._v("为了使配置和事件分离，事件挂载到autoform-editor组件上")]),_c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("说明")]),_c('th',[_vm._v("参数返回")]),_c('th',[_vm._v("参数返回")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("handleSave")]),_c('td',[_vm._v("点击保存时触发")]),_c('td',[_vm._v("(schema)")]),_c('td',[_vm._v("(获得动态表单需要的配置)")])]),_c('tr',[_c('td',[_vm._v("handleEditField")]),_c('td',[_vm._v("编辑表单时触发")]),_c('td',[_vm._v("(field)")]),_c('td',[_vm._v("(获取想要改变的field)")])]),_c('tr',[_c('td',[_vm._v("handleBeforeChangeField")]),_c('td',[_vm._v("新增或删除表单子组件时触发")]),_c('td',[_vm._v("(field, fields, type, cb)")]),_c('td',[_vm._v("(获取想要改变的field, 全部fields, 新增1/删除2/, 回调函数传入结果/允许改变传入true)")])]),_c('tr',[_c('td',[_vm._v("handleAfterChangeField")]),_c('td',[_vm._v("新增field生效后触发")]),_c('td',[_vm._v("(field)")]),_c('td',[_vm._v("(获取新增后的field)")])])])]),_c('h3',{attrs:{"id":"diao-yong-autoform-editor-fang-fa"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#diao-yong-autoform-editor-fang-fa","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 调用autoform-editor方法")]),_c('p',[_vm._v("用户可以根据自己需要，调用autoform-editor方法")]),_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-js"}},[_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// 更新某项field（通过id识别）")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'formEditor'")]),_vm._v("].updateForm(field);\n\n"),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// 更新layout（第二个参数为true，代表更新layout）")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'formEditor'")]),_vm._v("].updateForm(layout, "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(");\n\n"),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("//获取全部fields")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'formEditor'")]),_vm._v("].getFields();\n\n"),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("//获取config")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'formEditor'")]),_vm._v("].getConfig();\n\n"),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("//设置自定义的基础")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'formEditor'")]),_vm._v("].setBasicConfig(config);\n")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(265);

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26a165c8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_install_md__ = __webpack_require__(266);
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26a165c8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_install_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',{attrs:{"id":"an-zhuang"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#an-zhuang","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 安装")]),_c('h3',{attrs:{"id":"npm-an-zhuang"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#npm-an-zhuang","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" npm 安装")]),_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-shell"}},[_vm._v("npm install charlie-autoform  charlie-autoform_component_lib\n")])]),_c('h3',{attrs:{"id":"yin-ru-cha-jian"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#yin-ru-cha-jian","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 引入插件")]),_c('p',[_vm._v("在VUE的入口文件，添加如下配置：")]),_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-js"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" AutoForm "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'@hfe/autoform'")]),_vm._v(";\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" AutoForm_component_lib "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'@hfe/autoform_component_lib'")]),_vm._v(";\n\nVue.use(AutoForm);\nVue.use(AutoForm_component_lib);\n")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(268);

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38bceaea_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_props_md__ = __webpack_require__(269);
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38bceaea_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_props_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',{attrs:{"id":"can-shu-shuo-ming"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#can-shu-shuo-ming","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 参数说明")]),_c('h3',{attrs:{"id":"props-shuo-ming"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#props-shuo-ming","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" Props说明")]),_c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_c('th',[_vm._v("说明")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("可选值")]),_c('th',[_vm._v("默认值")])])]),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_vm._v("model")])]),_c('td',[_vm._v("表单数据对象")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("—")]),_c('td',[_vm._v("—")])]),_c('tr',[_c('td',[_c('strong',[_vm._v("fields")])]),_c('td',[_vm._v("表单控件配置")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("—")]),_c('td',[_vm._v("—")])]),_c('tr',[_c('td',[_c('strong',[_vm._v("layout")])]),_c('td',[_vm._v("表单显示配置")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("—")]),_c('td',[_vm._v("—")])])])]),_c('h3',{attrs:{"id":"fields"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#fields","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" Fields")]),_c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("类型")]),_c('th',[_vm._v("说明")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("必填")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("key")]),_c('td',[_vm._v("表单数据对象字段")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("true")])]),_c('tr',[_c('td',[_vm._v("type")]),_c('td',[_vm._v("表单子组件种类")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("true")])]),_c('tr',[_c('td',[_vm._v("templateOptions")]),_c('td',[_vm._v("组件内部变量")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("true")])]),_c('tr',[_c('td',[_vm._v("validators")]),_c('td',[_vm._v("校验（规则同Element）")]),_c('td',[_vm._v("Array")]),_c('td',[_vm._v("false")])]),_c('tr',[_c('td',[_vm._v("display")]),_c('td',[_vm._v("展示处理函数，传入函数名，通过事件总线调用")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("false")])])])]),_c('h3',{attrs:{"id":"layout"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#layout","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" Layout")]),_c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("类型")]),_c('th',[_vm._v("说明")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("可选值")]),_c('th',[_vm._v("默认值")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("align")]),_c('td',[_vm._v("表单域标签的位置")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("right/left/top")]),_c('td',[_vm._v("left")])]),_c('tr',[_c('td',[_vm._v("inline")]),_c('td',[_vm._v("行内表单模式")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("true/false")]),_c('td',[_vm._v("false")])]),_c('tr',[_c('td',[_vm._v("labelWidth")]),_c('td',[_vm._v("表单域标签的的宽度，例如 '50px'")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("-")])]),_c('tr',[_c('td',[_vm._v("span")]),_c('td',[_vm._v("24 Grid")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("-")])]),_c('tr',[_c('td',[_vm._v("gutter")]),_c('td',[_vm._v("分栏间隔(layout.inline = false;时生效)")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("-")])]),_c('tr',[_c('td',[_vm._v("custom")]),_c('td',[_vm._v("自定义布局")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("false")])]),_c('tr',[_c('td',[_vm._v("cache")]),_c('td',[_vm._v("是否浏览器缓存")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("false")])])])]),_c('h3',{attrs:{"id":"vue-autoform"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#vue-autoform","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" Vue.$autoform")]),_c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("类型")]),_c('th',[_vm._v("说明")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("可选值")]),_c('th',[_vm._v("默认值")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("baseField")]),_c('td',[_vm._v("自定义组件内置Mixin")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("-")])]),_c('tr',[_c('td',[_vm._v("RegisterDir")]),_c('td',[_vm._v("注册自定义组件（目录）")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("-")])]),_c('tr',[_c('td',[_vm._v("Register")]),_c('td',[_vm._v("注册自定义组件（组件对象数组）")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("-")])]),_c('tr',[_c('td',[_vm._v("registerValidators")]),_c('td',[_vm._v("全局添加表单校验规则")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("-")])]),_c('tr',[_c('td',[_vm._v("registerStore")]),_c('td',[_vm._v("如果使用editor需要添加vuex")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("-")])]),_c('tr',[_c('td',[_vm._v("getTypes")]),_c('td',[_vm._v("获取autoform组件库")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("-")])])])]),_c('h3',{attrs:{"id":"vue-options"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#vue-options","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" Vue options")]),_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("autoform")]),_vm._v(":{\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("eventBus")]),_vm._v(":{},    "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("//注册事件总线监听")]),_vm._v("\n            validators:[]   "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("//局部注册校验规则")]),_vm._v("\n        }\n    }\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('p',[_vm._v("具体更多事例，请参考下一节内容。")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(271);

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_tabs_md__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_tabs_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_tabs_md__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_tabs_md__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_tabs_md__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2315a6af_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_tabs_md__ = __webpack_require__(272);
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_tabs_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2315a6af_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_tabs_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._m(0),_c('p',[_vm._v("考虑到很多动态页面需要Tabs布局，这里支持了Tabs包含的表单，并兼容了之前的写法")]),_vm._m(1),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n    <div>\n        <auto-form ref=\"tagForm1\" :model=\"model\" :fields=\"fields\" :layout=\"layout\" :tabs=\"tabs\"></auto-form>\n    </div>\n</template>\n\n\n","script":"\n    export default {\n        data() {\n            return {\n                model: {\n                    name: \"\",\n                    hello: \"\",\n                    date1: \"\"\n                },\n                layout: {\n                    align: \"left\",\n                    labelWidth: \"100px\",\n                    inline: false\n                },\n                fields: {\n                    tab1: [\n                        {\n                            key: \"name\",\n                            type: \"input\",\n                            templateOptions: {\n                                label: \"审批人\"\n                            }\n                        },\n                        {\n                            key: \"hello\",\n                            type: \"hello\",\n                            templateOptions: {\n                                label: \"自定义\",\n                                action: \"handleClick\"\n                            }\n                        }\n                    ],\n                    tab2: [\n                        {\n                            key: \"date1\",\n                            type: \"datepicker\",\n                            templateOptions: {\n                                label: \"活动时间\",\n                                placeholder: \"选择日期\",\n                                span: 12\n                            }\n                        }\n                    ]\n                },\n                tabs: {\n                    active: \"tab2\",\n                    list: [\n                        {\n                            name: \"tab1\",\n                            label: \"标题1\",\n                            disabled: false\n                        },\n                        {\n                            name: \"tab2\",\n                            label: \"标题2\"\n                        }\n                    ],\n                    tabClick: \"handleClick\"\n                }\n            };\n        },\n        autoform: {\n            eventBus: {\n                handleClick(...arg) {\n                    console.log(111, arg);\n                }\n            }\n        }\n    };\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('div',[_c('auto-form',{ref:"tagForm1",attrs:{"model":_vm.model,"fields":_vm.fields,"layout":_vm.layout,"tabs":_vm.tabs}})],1)]],2),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":tabs")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tabs\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n        data() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("hello")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("date1")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"\"")]),_vm._v("\n                },\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"left\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"100px\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n                },\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("tab1")]),_vm._v(": [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"name\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"input\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"审批人\"")]),_vm._v("\n                            }\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"hello\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"hello\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"自定义\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("action")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"handleClick\"")]),_vm._v("\n                            }\n                        }\n                    ],\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("tab2")]),_vm._v(": [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"date1\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"datepicker\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"活动时间\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"选择日期\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v("\n                            }\n                        }\n                    ]\n                },\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("tabs")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("active")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tab2\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("list")]),_vm._v(": [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tab1\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"标题1\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tab2\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"标题2\"")]),_vm._v("\n                        }\n                    ],\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("tabClick")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"handleClick\"")]),_vm._v("\n                }\n            };\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("autoform")]),_vm._v(": {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("eventBus")]),_vm._v(": {\n                handleClick(...arg) {\n                    "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log("),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("111")]),_vm._v(", arg);\n                }\n            }\n        }\n    };\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"tabs-bu-ju"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#tabs-bu-ju","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" Tabs布局")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"ji-ben-shi-yong"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#ji-ben-shi-yong","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 基本使用")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(274);

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_validator_md__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_validator_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_validator_md__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_validator_md__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_validator_md__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18c86256_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_validator_md__ = __webpack_require__(275);
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_validator_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18c86256_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_validator_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._m(0),_vm._m(1),_vm._m(2),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n   <auto-form ref=\"tagForm\" :model=\"model1\" :fields=\"fields1\" :layout=\"layout\">\n       <el-form-item>\n           <el-button type=\"primary\">立即创建</el-button>\n           <el-button @click=\"reset\">取消</el-button>\n       </el-form-item>\n   </auto-form>\n</template>\n\n\n","script":"\n   export default {\n        data() {\n            return {\n                model1: {\n                    name: \"hello~\",\n                    region: \"2\"\n                },\n                input: 1,\n                layout: {\n                    align: \"left\",\n                    labelWidth: \"100px\",\n                    inline: false,\n                    span: 8,\n                    gutter: 50\n                },\n                fields1: [\n                    [\n                        {\n                            key: \"name\",\n                            type: \"input\",\n                            templateOptions: {\n                                span: 8,\n                                label: \"活动名称\",\n                                readonly: false,\n                            },\n                            isWatch: true,\n                            value: '',\n                            validators:[\n                                \"required:change:活动名称必填\",\n                                \"customValid:change\"\n                            ]\n                        }\n                    ],\n                    [\n                        {\n                            key: \"region\",\n                            type: \"select\",\n                            templateOptions: {\n                                label: \"活动区域\",\n                                placeholder: \"请选择活动区域\",\n                                span: 12,\n                                optionKey: \"value\",\n                                multiple: false,\n                                initOptionsKey: 'initSelectOpt',\n                                options: []\n                            },\n                            isWatch: true\n                        }\n                    ],\n                ],\n                query$: {}\n            };\n        },\n        autoform: {\n            eventBus: {\n            },\n            validators:{\n                 customValid (rule, value, callback) {\n                    if (value < 18) {\n                        callback(new Error('错误原因'));\n                    } else {\n                        callback();\n                    }\n                }\n            }\n        },\n        methods: {\n            reset () {\n                this.$refs.tagForm.resetForm();\n            }\n        },\n        mounted() {\n            this.query$.eventBus = this.$refs.tagForm.eventBus;\n            let opt = [\n                {\n                    label: \"区域一\",\n                    value: \"1\"\n                },\n                {\n                    label: \"区域二\",\n                    value: \"2\"\n                },\n                {\n                    label: \"区域三\",\n                    value: \"3\"\n                }\n            ];\n            this.$nextTick(()=> {\n                this.query$.eventBus.$emit('initSelectOpt', opt);\n            })\n        }\n    };\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('auto-form',{ref:"tagForm",attrs:{"model":_vm.model1,"fields":_vm.fields1,"layout":_vm.layout}},[_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("立即创建")]),_c('el-button',{on:{"click":_vm.reset}},[_vm._v("取消")])],1)],1)]],2),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n   "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout\"")]),_vm._v(">")]),_vm._v("\n       "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-form-item")]),_vm._v(">")]),_vm._v("\n           "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("立即创建"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("\n           "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"reset\"")]),_vm._v(">")]),_vm._v("取消"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("\n       "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-form-item")]),_vm._v(">")]),_vm._v("\n   "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n   "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n        data() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model1")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"hello~\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("region")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"2\"")]),_vm._v("\n                },\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("input")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"left\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"100px\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("8")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("gutter")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("50")]),_vm._v("\n                },\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields1")]),_vm._v(": [\n                    [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"name\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"input\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("8")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"活动名称\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n                            },\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("isWatch")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("validators")]),_vm._v(":[\n                                "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"required:change:活动名称必填\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"customValid:change\"")]),_vm._v("\n                            ]\n                        }\n                    ],\n                    [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"region\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"select\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"活动区域\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请选择活动区域\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("optionKey")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"value\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("multiple")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("initOptionsKey")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'initSelectOpt'")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": []\n                            },\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("isWatch")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v("\n                        }\n                    ],\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("query$")]),_vm._v(": {}\n            };\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("autoform")]),_vm._v(": {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("eventBus")]),_vm._v(": {\n            },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("validators")]),_vm._v(":{\n                 customValid (rule, value, callback) {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("if")]),_vm._v(" (value < "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18")]),_vm._v(") {\n                        callback("),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Error")]),_vm._v("("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'错误原因'")]),_vm._v("));\n                    } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("else")]),_vm._v(" {\n                        callback();\n                    }\n                }\n            }\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n            reset () {\n                "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.tagForm.resetForm();\n            }\n        },\n        mounted() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".query$.eventBus = "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.tagForm.eventBus;\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" opt = [\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"区域一\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1\"")]),_vm._v("\n                },\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"区域二\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"2\"")]),_vm._v("\n                },\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"区域三\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v("\n                }\n            ];\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$nextTick("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v("=>")]),_vm._v(" {\n                "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".query$.eventBus.$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'initSelectOpt'")]),_vm._v(", opt);\n            })\n        }\n    };\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"zi-ding-yi-xiao-yan"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#zi-ding-yi-xiao-yan","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 自定义校验")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("在vue options上 "),_c('code',{pre:true},[_vm._v("autoform.validators")]),_vm._v("  注册自定义校验函数 ，field 通过 "),_c('code',{pre:true},[_vm._v("customValid:change")]),_vm._v(" 方式使用，如下示例：")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"shi-yong"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#shi-yong","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 使用")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(277);

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_md__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_md__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_md__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_md__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a98f436a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_md__ = __webpack_require__(280);
function injectStyle (ssrContext) {
  __webpack_require__(278)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a98f436a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_autoform_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(279);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(233)("aee6c30a", content, true);

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(232)(false);
// imports


// module
exports.push([module.i, "\n.demo-box.demo-alert .el-alert {\n  margin: 20px 0 0;\n}\n.demo-box.demo-alert .el-alert:first-child {\n  margin: 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._m(0),_c('p',[_vm._v("由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据")]),_vm._m(1),_vm._m(2),_c('p',[_vm._v("包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。")]),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n    <div>\n        <auto-form ref=\"tagForm1\" :model=\"model1\" :fields=\"fields1\" :layout=\"layout\">\n          <el-form-item class=\"clearfix\">\n            <el-button type=\"primary\">立即创建</el-button>\n            <el-button>取消</el-button>\n          </el-form-item>\n        </auto-form>\n    </div>\n</template>\n\n","script":"\n  export default {\n    data() {\n      return {\n        model1: {\n          name: 'hello~',\n          type: []\n        },\n        layout: {\n          align: 'left',\n          labelWidth: '100px',\n          inline: false,\n          span: 24\n        },\n        fields1: [\n          {\n            key: 'name',\n            type: 'input',\n            templateOptions: {\n              label: '活动名称'\n            }\n          },\n          {\n            key: 'region',\n            type: 'select',\n            templateOptions: {\n              label: '活动区域',\n              placeholder: '请选择活动区域',\n              options: [\n                {\n                  label: '区域一',\n                  value: 'shanghai'\n                },\n                {\n                  label: '区域二',\n                  value: 'beijing'\n                }\n              ]\n            }\n          },\n          {\n            key: 'date1',\n            type: 'datepicker',\n            templateOptions: {\n              label: '活动时间',\n              placeholder: '选择日期',\n              span: 12\n            }\n          },\n          {\n            key: 'date2',\n            type: 'timepicker',\n            templateOptions: {\n              placeholder: '选择时间',\n              span: 12\n            }\n          },\n          {\n            key: 'type',\n            type: 'checkbox',\n            templateOptions: {\n              label: '活动性质',\n              options: [\n                {\n                  label: '美食/餐厅线上活动',\n                  value: '美食/餐厅线上活动'\n                },\n                {\n                  label: '地推活动',\n                  value: '地推活动'\n                },\n                {\n                  label: '线下主题活动',\n                  value: '线下主题活动'\n                },\n                {\n                  label: '单纯品牌曝光',\n                  value: '单纯品牌曝光'\n                }\n              ]\n            }\n          },\n          {\n            key: 'desc',\n            type: 'textarea',\n            templateOptions: {\n              label: '活动形式'\n            }\n          },\n          {\n            key: 'isOpen',\n            type: 'switch',\n            templateOptions: {\n              label: '是否开启'\n            }\n           },\n           {\n            key: 'button',\n            type: 'button',\n            templateOptions: {\n              hasLabel: true,\n              inline: true,\n              className: 'button-wrap',\n              label: '按钮组',\n              buttonOpt:[\n                {\n                  value: '按钮1',\n                  size: 'mini',\n                  type: 'primary',\n                  onClick: 'buttonClick'\n                },\n                {\n                  value: '按钮1',\n                  size: 'mini',\n                  type: 'default',\n                  onClick: 'buttonClick'\n                }\n              ]\n             }\n            }\n        ]\n      };\n    }\n  };\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('div',[_c('auto-form',{ref:"tagForm1",attrs:{"model":_vm.model1,"fields":_vm.fields1,"layout":_vm.layout}},[_c('el-form-item',{staticClass:"clearfix"},[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("立即创建")]),_c('el-button',[_vm._v("取消")])],1)],1)],1)]],2),_c('p',[_vm._v("在 autoForm 组件中，在"),_c('code',[_vm._v("fields")]),_vm._v("配置每一个表单域,在"),_c('code',[_vm._v("model")]),_vm._v("配置需要的实体，"),_c('code',[_vm._v("layout")]),_vm._v("配置表单的展示方式")]),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout\"")]),_vm._v(">")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"clearfix\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("立即创建"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("取消"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model1")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'hello~'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": []\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'left'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'100px'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("24")]),_vm._v("\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields1")]),_vm._v(": [\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'name'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动名称'")]),_vm._v("\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'region'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'select'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动区域'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请选择活动区域'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域一'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'shanghai'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域二'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'beijing'")]),_vm._v("\n                }\n              ]\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'date1'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'datepicker'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动时间'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'选择日期'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v("\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'date2'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'timepicker'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'选择时间'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v("\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'type'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'checkbox'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动性质'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'美食/餐厅线上活动'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'美食/餐厅线上活动'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'地推活动'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'地推活动'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'线下主题活动'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'线下主题活动'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'单纯品牌曝光'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'单纯品牌曝光'")]),_vm._v("\n                }\n              ]\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'desc'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'textarea'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动形式'")]),_vm._v("\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'isOpen'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'switch'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'是否开启'")]),_vm._v("\n            }\n           },\n           {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'button'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'button'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("hasLabel")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("className")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'button-wrap'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'按钮组'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("buttonOpt")]),_vm._v(":[\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'按钮1'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'mini'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'primary'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("onClick")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'buttonClick'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'按钮1'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'mini'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'default'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("onClick")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'buttonClick'")]),_vm._v("\n                }\n              ]\n             }\n            }\n        ]\n      };\n    }\n  };\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])]),_vm._m(3),_c('p',[_vm._v("当垂直方向空间受限且表单较简单时，可以在一行内放置表单。")]),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n    <div>\n        <auto-form ref=\"tagForm2\" :model=\"model2\" :fields=\"fields2\" :layout=\"layout2\">\n          <el-form-item>\n            <el-button type=\"primary\">查询</el-button>\n          </el-form-item>\n        </auto-form>\n    </div>\n</template>\n\n","script":"\n  export default {\n    data() {\n      return {\n        model2: {\n          name: '',\n          type: []\n        },\n        layout2: {\n          align: 'left',\n          labelWidth: '100px',\n          inline: true\n        },\n        fields2: [\n          {\n            key: 'name',\n            type: 'input',\n            templateOptions: {\n              label: '审批人'\n            }\n          },\n          {\n            key: 'region',\n            type: 'select',\n            templateOptions: {\n              label: '活动区域',\n              placeholder: '请选择活动区域',\n              options: [\n                {\n                  label: '区域一',\n                  value: 'shanghai'\n                },\n                {\n                  label: '区域二',\n                  value: 'beijing'\n                }\n              ]\n            }\n          }\n        ]\n      };\n    }\n  };\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('div',[_c('auto-form',{ref:"tagForm2",attrs:{"model":_vm.model2,"fields":_vm.fields2,"layout":_vm.layout2}},[_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("查询")])],1)],1)],1)]],2),_c('p',[_vm._v("在 autoForm 组件中，通过配置"),_c('code',[_vm._v("layout.inline")]),_vm._v("属性，让表单变为行内的表单域")]),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout2\"")]),_vm._v(">")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-form-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("查询"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model2")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": []\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout2")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'left'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'100px'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v("\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields2")]),_vm._v(": [\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'name'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'审批人'")]),_vm._v("\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'region'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'select'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动区域'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请选择活动区域'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域一'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'shanghai'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域二'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'beijing'")]),_vm._v("\n                }\n              ]\n            }\n          }\n        ]\n      };\n    }\n  };\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])]),_vm._m(4),_c('p',[_vm._v("根据具体目标和制约因素，选择最佳的标签对齐方式。")]),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n    <div>\n    <el-radio-group v-model=\"layout3.align\" size=\"small\">\n      <el-radio-button label=\"left\">左对齐</el-radio-button>\n      <el-radio-button label=\"right\">右对齐</el-radio-button>\n      <el-radio-button label=\"top\">顶部对齐</el-radio-button>\n    </el-radio-group>\n    <div style=\"margin: 20px;\"></div>\n\n    <auto-form ref=\"tagForm3\" :model=\"model2\" :fields=\"fields2\" :layout=\"layout3\"></auto-form>\n    </div>\n</template>\n\n","script":"\n  export default {\n    data() {\n      return {\n        model2: {\n          name: '',\n          type: []\n        },\n        layout3: {\n          align: 'left',\n          labelWidth: '100px',\n          inline: false\n        },\n        fields2: [\n          {\n            key: 'name',\n            type: 'input',\n            templateOptions: {\n              label: '审批人'\n            }\n          },\n          {\n            key: 'region',\n            type: 'select',\n            templateOptions: {\n              label: '活动区域',\n              placeholder: '请选择活动区域',\n              options: [\n                {\n                  label: '区域一',\n                  value: 'shanghai'\n                },\n                {\n                  label: '区域二',\n                  value: 'beijing'\n                }\n              ]\n            }\n          }\n        ]\n      };\n    }\n  };\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('div',[_c('el-radio-group',{attrs:{"size":"small"},model:{value:(_vm.layout3.align),callback:function ($$v) {_vm.$set(_vm.layout3, "align", $$v)},expression:"layout3.align"}},[_c('el-radio-button',{attrs:{"label":"left"}},[_vm._v("左对齐")]),_c('el-radio-button',{attrs:{"label":"right"}},[_vm._v("右对齐")]),_c('el-radio-button',{attrs:{"label":"top"}},[_vm._v("顶部对齐")])],1),_c('div',{staticStyle:{"margin":"20px"}}),_c('auto-form',{ref:"tagForm3",attrs:{"model":_vm.model2,"fields":_vm.fields2,"layout":_vm.layout3}})],1)]],2),_c('p',[_vm._v("在 通过设置 layout.align 属性可以改变表单域标签的位置，可选值为 top、left，当设为 top 时标签会置于表单域的顶部")]),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-radio-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout3.align\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small\"")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-radio-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"left\"")]),_vm._v(">")]),_vm._v("左对齐"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-radio-button")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-radio-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"right\"")]),_vm._v(">")]),_vm._v("右对齐"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-radio-button")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-radio-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"top\"")]),_vm._v(">")]),_vm._v("顶部对齐"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-radio-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-radio-group")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"margin: 20px;\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model2")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": []\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout3")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'left'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'100px'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields2")]),_vm._v(": [\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'name'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'审批人'")]),_vm._v("\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'region'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'select'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动区域'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请选择活动区域'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域一'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'shanghai'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域二'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'beijing'")]),_vm._v("\n                }\n              ]\n            }\n          }\n        ]\n      };\n    }\n  };\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])]),_vm._m(5),_c('p',[_vm._v("在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。")]),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n    <div>\n        <auto-form ref=\"tagForm4\" :model=\"model2\" :fields=\"fields3\" :layout=\"layout\">\n          <el-form-item>\n            <el-button type=\"primary\">立即创建</el-button>\n            <el-button>取消</el-button>\n          </el-form-item>\n        </auto-form>\n    </div>\n</template>\n\n","script":"\n  export default {\n    data() {\n      return {\n        model2: {\n          name: '',\n          type: []\n        },\n        layout: {\n          align: 'left',\n          labelWidth: '100px',\n          inline: false,\n          span: 24\n        },\n        fields3: [\n          {\n            key: 'name',\n            type: 'input',\n            templateOptions: {\n              label: '活动名称'\n            },\n            validators: [\n              { required: true, message: '请输入活动名称', trigger: 'blur' },\n              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }\n            ]\n          },\n          {\n            key: 'region',\n            type: 'select',\n            templateOptions: {\n              label: '活动区域',\n              placeholder: '请选择活动区域',\n              options: [\n                {\n                  label: '区域一',\n                  value: 'shanghai'\n                },\n                {\n                  label: '区域二',\n                  value: 'beijing'\n                }\n              ]\n            }\n          },\n          {\n            key: 'date1',\n            type: 'datepicker',\n            templateOptions: {\n              label: '活动时间',\n              placeholder: '选择日期',\n              span: 12\n            }\n          },\n          {\n            key: 'date2',\n            type: 'timepicker',\n            templateOptions: {\n              placeholder: '选择时间',\n              span: 12\n            }\n          },\n          {\n            key: 'type',\n            type: 'checkbox',\n            templateOptions: {\n              label: '活动性质',\n              options: [\n                {\n                  label: '美食/餐厅线上活动',\n                  value: '美食/餐厅线上活动'\n                },\n                {\n                  label: '地推活动',\n                  value: '地推活动'\n                },\n                {\n                  label: '线下主题活动',\n                  value: '线下主题活动'\n                },\n                {\n                  label: '单纯品牌曝光',\n                  value: '单纯品牌曝光'\n                }\n              ]\n            }\n          },\n          {\n            key: 'desc',\n            type: 'textarea',\n            templateOptions: {\n              label: '活动形式'\n            }\n          },\n        ]\n      };\n    }\n  };\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('div',[_c('auto-form',{ref:"tagForm4",attrs:{"model":_vm.model2,"fields":_vm.fields3,"layout":_vm.layout}},[_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("立即创建")]),_c('el-button',[_vm._v("取消")])],1)],1)],1)]],2),_c('p',[_vm._v("在 通过设置 fields[i].validators 属性可以为表单域添加验证规则")]),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm4\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout\"")]),_vm._v(">")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-form-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("立即创建"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("取消"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-button")]),_vm._v(">")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("el-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model2")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": []\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'left'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'100px'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("24")]),_vm._v("\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields3")]),_vm._v(": [\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'name'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动名称'")]),_vm._v("\n            },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("validators")]),_vm._v(": [\n              { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入活动名称'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(" },\n              { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("3")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("5")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'长度在 3 到 5 个字符'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(" }\n            ]\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'region'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'select'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动区域'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请选择活动区域'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域一'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'shanghai'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域二'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'beijing'")]),_vm._v("\n                }\n              ]\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'date1'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'datepicker'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动时间'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'选择日期'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v("\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'date2'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'timepicker'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'选择时间'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v("\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'type'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'checkbox'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动性质'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'美食/餐厅线上活动'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'美食/餐厅线上活动'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'地推活动'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'地推活动'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'线下主题活动'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'线下主题活动'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'单纯品牌曝光'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'单纯品牌曝光'")]),_vm._v("\n                }\n              ]\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'desc'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'textarea'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动形式'")]),_vm._v("\n            }\n          },\n        ]\n      };\n    }\n  };\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])]),_vm._m(6),_c('p',[_vm._v("表单域是否展示不确定的前提下，可以通过处理达到展示逻辑")]),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n    <div>\n        <auto-form ref=\"tagForm5\" :model=\"model3\" :fields=\"fields4\" :layout=\"layout3\"></auto-form>\n    </div>\n</template>\n\n","script":"\n  export default {\n    data() {\n      return {\n        model3: {\n          name: '',\n          status: '1'\n        },\n        layout3: {\n          align: 'left',\n          labelWidth: '100px',\n          inline: false\n        },\n        fields4: [\n          {\n            key: 'name',\n            type: 'input',\n            templateOptions: {\n              label: '审批人'\n            }\n          },\n          {\n            key: 'status',\n            type: 'radio',\n            templateOptions: {\n              label: '活动状态',\n              options: [\n                {\n                  label: '线上品牌商赞助',\n                  value: 1\n                },\n                {\n                  label: '线下场地免费',\n                  value: 0\n                }\n              ]\n            }\n          },\n          {\n            key: 'desc',\n            type: 'textarea',\n            templateOptions: {\n              label: '活动形式'\n            },\n            display: 'displayFn'\n          }\n        ]\n      };\n    },\n  autoform: {\n    eventBus: {\n      displayFn(model, field, cb) {\n          //console.log(field, model);\n          if(model.status) {\n              cb(true);\n          } else {\n            cb(false);\n          }\n      }\n    }\n  }\n  };\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('div',[_c('auto-form',{ref:"tagForm5",attrs:{"model":_vm.model3,"fields":_vm.fields4,"layout":_vm.layout3}})],1)]],2),_c('p',[_vm._v("表单域是否展示，可以由一个函数处理。")]),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm5\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields4\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model3")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("status")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'1'")]),_vm._v("\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout3")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'left'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'100px'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields4")]),_vm._v(": [\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'name'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'审批人'")]),_vm._v("\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'status'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'radio'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动状态'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'线上品牌商赞助'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'线下场地免费'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("0")]),_vm._v("\n                }\n              ]\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'desc'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'textarea'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动形式'")]),_vm._v("\n            },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("display")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'displayFn'")]),_vm._v("\n          }\n        ]\n      };\n    },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("autoform")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("eventBus")]),_vm._v(": {\n      displayFn(model, field, cb) {\n          "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("//console.log(field, model);")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("if")]),_vm._v("(model.status) {\n              cb("),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(");\n          } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("else")]),_vm._v(" {\n            cb("),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(");\n          }\n      }\n    }\n  }\n  };\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])]),_vm._m(7),_c('p',[_vm._v("可以根据需要，进行相关的Grid布局")]),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n    <div>\n        <auto-form ref=\"tagForm6\" :model=\"model3\" :fields=\"fields5\" :layout=\"layout4\"></auto-form>\n\n    </div>\n</template>\n\n","script":"\n  export default {\n    data() {\n      return {\n        model3: {\n          name: '',\n          status: ''\n        },\n        layout4: {\n          align: 'left',\n          labelWidth: '100px',\n          inline: false,\n          span: 12,\n          gutter: 60\n        },\n        fields5: [\n          {\n            key: 'name',\n            type: 'input',\n            templateOptions: {\n              label: '审批人'\n            }\n          },\n          {\n            key: 'status',\n            type: 'radio',\n            templateOptions: {\n              label: '活动状态',\n              options: [\n                {\n                  label: '线上品牌商赞助',\n                  value: 1\n                },\n                {\n                  label: '线下场地免费',\n                  value: 0\n                }\n              ]\n            }\n          }\n        ]\n      };\n    }\n  };\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('div',[_c('auto-form',{ref:"tagForm6",attrs:{"model":_vm.model3,"fields":_vm.fields5,"layout":_vm.layout4}})],1)]],2),_c('p',[_vm._v("需自定义布局时，支持传入"),_c('code',[_vm._v("gutter")]),_vm._v(","),_c('code',[_vm._v("span")]),_vm._v(",等参数。但仅在"),_c('code',[_vm._v("layout.inline = false;")]),_vm._v("时生效")]),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm6\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields5\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout4\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model3")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("status")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v("\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout4")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'left'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'100px'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("gutter")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("60")]),_vm._v("\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields5")]),_vm._v(": [\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'name'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'审批人'")]),_vm._v("\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'status'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'radio'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动状态'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'线上品牌商赞助'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'线下场地免费'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("0")]),_vm._v("\n                }\n              ]\n            }\n          }\n        ]\n      };\n    }\n  };\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])]),_vm._m(8),_c('p',[_vm._v("支持一些事件的调用")]),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n  <div>\n    <auto-form ref=\"tagForm7\" :model=\"model4\" :fields=\"fields6\" :layout=\"layout\"></auto-form>\n  </div>\n</template>\n\n","script":"\n  export default {\n    data() {\n      return {\n        layout: {\n          align: 'left',\n          labelWidth: '100px',\n          inline: false,\n          span: 24\n        },\n        model4: {\n          region: '',\n          type: [],\n          status: ''\n        },\n        fields6: [\n          {\n            key: 'region',\n            type: 'select',\n            templateOptions: {\n              label: '活动区域',\n              placeholder: '请选择活动区域',\n              options: [\n                {\n                  label: '区域一',\n                  value: 'shanghai'\n                },\n                {\n                  label: '区域二',\n                  value: 'beijing'\n                }\n              ],\n              onChange: 'handleChange1'\n            }\n          },\n          {\n            key: 'type',\n            type: 'checkbox',\n            templateOptions: {\n              label: '活动性质',\n              options: [\n                {\n                  label: '美食/餐厅线上活动',\n                  value: '美食/餐厅线上活动'\n                },\n                {\n                  label: '地推活动',\n                  value: '地推活动'\n                },\n                {\n                  label: '线下主题活动',\n                  value: '线下主题活动'\n                },\n                {\n                  label: '单纯品牌曝光',\n                  value: '单纯品牌曝光'\n                }\n              ],\n              onChange: 'handleChange2'\n            }\n          },\n          {\n            key: 'status',\n            type: 'radio',\n            templateOptions: {\n              label: '活动形式',\n              options: [\n                {\n                  label: '上线',\n                  value: '1'\n                },\n                {\n                  label: '下线',\n                  value: '0'\n                }\n              ]\n            }\n          },\n        ]\n      };\n    },\n    autoform: {\n      eventBus: {\n        handleChange1(value, options, field) {\n          console.log(value, options, field);\n        },\n        handleChange2(value, options, field) {\n          console.log(value, options, field);\n        }\n      }\n    }\n  };\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('div',[_c('auto-form',{ref:"tagForm7",attrs:{"model":_vm.model4,"fields":_vm.fields6,"layout":_vm.layout}})],1)]],2),_c('p',[_vm._v("可以在fildes中定义事件，直接传入函数，或通过事件总线传入")]),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm7\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model4\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields6\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'left'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'100px'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("24")]),_vm._v("\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model4")]),_vm._v(": {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("region")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": [],\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("status")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v("\n        },\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields6")]),_vm._v(": [\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'region'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'select'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动区域'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请选择活动区域'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域一'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'shanghai'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'区域二'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'beijing'")]),_vm._v("\n                }\n              ],\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("onChange")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'handleChange1'")]),_vm._v("\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'type'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'checkbox'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动性质'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'美食/餐厅线上活动'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'美食/餐厅线上活动'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'地推活动'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'地推活动'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'线下主题活动'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'线下主题活动'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'单纯品牌曝光'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'单纯品牌曝光'")]),_vm._v("\n                }\n              ],\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("onChange")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'handleChange2'")]),_vm._v("\n            }\n          },\n          {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'status'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'radio'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'活动形式'")]),_vm._v(",\n              "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'上线'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'1'")]),_vm._v("\n                },\n                {\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'下线'")]),_vm._v(",\n                  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'0'")]),_vm._v("\n                }\n              ]\n            }\n          },\n        ]\n      };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("autoform")]),_vm._v(": {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("eventBus")]),_vm._v(": {\n        handleChange1(value, options, field) {\n          "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log(value, options, field);\n        },\n        handleChange2(value, options, field) {\n          "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log(value, options, field);\n        }\n      }\n    }\n  };\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])]),_vm._m(9),_c('p',[_vm._v("支持分行布局")]),_c('demo-block',{staticClass:"demo-box",attrs:{"jsfiddle":{"html":"<template>\n  <div>\n        <auto-form ref=\"tagForm8\" :model=\"model5\" :fields=\"fields7\" :layout=\"layout5\"></auto-form>\n  </div>\n</template>\n\n","script":"\n    export default {\n        data() {\n            return {\n                model5: {\n                    name1: \"111\",\n                    name2: \"\",\n                    date: \"\",\n                    time: \"\"\n                },\n                layout5: {\n                    align: \"left\",\n                    labelWidth: \"100px\",\n                    inline: false,\n                    gutter: 30\n                },\n                fields7: [\n                    [\n                        {\n                            key: \"name1\",\n                            type: \"input\",\n                            templateOptions: {\n                                span: 12,\n                                label: \"活动名称1\",\n                                onChange: 'keyUpFn'\n                            }\n                        },\n                        {\n                            key: \"name2\",\n                            type: \"input\",\n                            templateOptions: {\n                                span: 12,\n                                label: \"活动名称2\",\n                                onChange: 'keyUpFn'\n                            }\n                        }\n                    ],\n                    [\n                        {\n                            key: \"date\",\n                            type: \"datepicker\",\n                            templateOptions: {\n                                label: \"选择日期\",\n                                placeholder: \"选择日期\",\n                                span: 12\n                            }\n                        },\n                        {\n                            key: \"time\",\n                            type: \"timepicker\",\n                            templateOptions: {\n                                label: \"选择时间\",\n                                placeholder: \"选择时间\",\n                                span: 12\n                            }\n                        }\n                    ]\n                ]\n            };\n        }\n    };\n","style":null}}},[_c('div',{staticClass:"source",attrs:{"slot":"source"},slot:"source"},[[_c('div',[_c('auto-form',{ref:"tagForm8",attrs:{"model":_vm.model5,"fields":_vm.fields7,"layout":_vm.layout5}})],1)]],2),_c('p',[_vm._v("fields接受一个二维数组，每个数组内的配置放在一个Row中")]),_c('div',{staticClass:"highlight",attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{attrs:{"class":"hljs language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"tagForm8\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model5\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":fields")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fields7\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"layout5\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("auto-form")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n        data() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model5")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name1")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"111\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name2")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("date")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("time")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"\"")]),_vm._v("\n                },\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout5")]),_vm._v(": {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"left\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("labelWidth")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"100px\"")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("gutter")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("30")]),_vm._v("\n                },\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("fields7")]),_vm._v(": [\n                    [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"name1\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"input\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"活动名称1\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("onChange")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'keyUpFn'")]),_vm._v("\n                            }\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"name2\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"input\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"活动名称2\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("onChange")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'keyUpFn'")]),_vm._v("\n                            }\n                        }\n                    ],\n                    [\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"date\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"datepicker\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"选择日期\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"选择日期\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v("\n                            }\n                        },\n                        {\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"time\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"timepicker\"")]),_vm._v(",\n                            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("templateOptions")]),_vm._v(": {\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"选择时间\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"选择时间\"")]),_vm._v(",\n                                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v("\n                            }\n                        }\n                    ]\n                ]\n            };\n        }\n    };\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"autoform-dong-tai-biao-dan"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#autoform-dong-tai-biao-dan","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" AutoForm 动态表单")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('a',[_vm._v("http://git.sankuai.com/projects/HFE/repos/charlielau.autoform/browse")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"dian-xing-biao-dan"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#dian-xing-biao-dan","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 典型表单")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"xing-nei-biao-dan"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#xing-nei-biao-dan","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 行内表单")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"dui-qi-fang-shi"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#dui-qi-fang-shi","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 对齐方式")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"biao-dan-yan-zheng"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#biao-dan-yan-zheng","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 表单验证")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"zhan-shi-lian-dong"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#zhan-shi-lian-dong","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 展示联动")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"layout-bu-ju"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#layout-bu-ju","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" Layout 布局")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"shi-jian"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#shi-jian","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 事件")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"fen-xing-bu-ju"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#fen-xing-bu-ju","aria-hidden":"true"}},[_vm._v("¶")]),_vm._v(" 分行布局")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});