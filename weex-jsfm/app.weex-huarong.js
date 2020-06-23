// { "framework": "Vue" }

/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};

    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {

        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId])
        /******/
            return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
                /******/
        };

        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }


    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;

    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;

    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";

    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    function(module, exports, __webpack_require__) {

        'use strict';

        var _ff22e820405194004aacae8045ad = __webpack_require__(1);

        var _ff22e820405194004aacae8045ad2 = _interopRequireDefault(_ff22e820405194004aacae8045ad);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        _ff22e820405194004aacae8045ad2.default.el = '#root';
        new Vue(_ff22e820405194004aacae8045ad2.default);

        /***/
    },
    /* 1 */
    /***/
    function(module, exports, __webpack_require__) {

        var __vue_exports__, __vue_options__
        var __vue_styles__ = []

        /* styles */
        __vue_styles__.push(__webpack_require__(2))

        /* script */
        __vue_exports__ = __webpack_require__(3)

        /* template */
        var __vue_template__ = __webpack_require__(4)
        __vue_options__ = __vue_exports__ = __vue_exports__ || {}
        if (
            typeof __vue_exports__.default === "object" ||
            typeof __vue_exports__.default === "function"
        ) {
            if (Object.keys(__vue_exports__).some(function(key) {
                    return key !== "default" && key !== "__esModule"
                })) {
                console.error("named exports are not supported in *.vue files.")
            }
            __vue_options__ = __vue_exports__ = __vue_exports__.default
        }
        if (typeof __vue_options__ === "function") {
            __vue_options__ = __vue_options__.options
        }
        __vue_options__.__file = "/usr/src/app/raw/82ff22e820405194004aacae8045ad56.vue"
        __vue_options__.render = __vue_template__.render
        __vue_options__.staticRenderFns = __vue_template__.staticRenderFns
        __vue_options__._scopeId = "data-v-1d9d200c"
        __vue_options__.style = __vue_options__.style || {}
        __vue_styles__.forEach(function(module) {
            for (var name in module) {
                __vue_options__.style[name] = module[name]
            }
        })
        if (typeof __register_static_styles__ === "function") {
            __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
        }

        module.exports = __vue_exports__


        /***/
    },
    /* 2 */
    /***/
    function(module, exports) {

        module.exports = {
            "row": {
                "flexDirection": "row"
            },
            "result": {
                "textAlign": "right",
                "backgroundColor": "#666666",
                "fontSize": 40,
                "color": "#FFFFFF",
                "height": 120,
                "paddingTop": 35,
                "paddingRight": 35,
                "paddingBottom": 35,
                "paddingLeft": 35,
                "marginTop": 5,
                "marginRight": 5,
                "marginBottom": 5,
                "marginLeft": 5
            },
            "btn": {
                "flex": 1,
                "textAlign": "center",
                "color": "#333333",
                "backgroundColor": "#eeeeee",
                "fontSize": 46,
                "height": 120,
                "paddingTop": 35,
                "paddingRight": 35,
                "paddingBottom": 35,
                "paddingLeft": 35,
                "marginTop": 5,
                "marginRight": 5,
                "marginBottom": 5,
                "marginLeft": 5
            },
            "btn-operator": {
                "backgroundColor": "#666699",
                "fontSize": 50,
                "color": "#FFFFFF"
            }
        }

        /***/
    },
    /* 3 */
    /***/
    function(module, exports) {

        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        var OP = ['+', '-', '*', '/'];
        exports.default = {
            data: function data() {
                return {
                    shouldClear: true,
                    result: '',
                    inputs: []
                };
            },

            methods: {
                input: function input(value) {
                    if (this.shouldClear) {
                        this.clear();
                    }
                    this.shouldClear = false;
                    var inputs = this.inputs;
                    var lastOne = inputs.length ? inputs[inputs.length - 1] : '';
                    if (OP.indexOf(lastOne) > -1 && OP.indexOf(value) > -1) {
                        return;
                    }
                    inputs.push(value);
                    var buf = [];
                    var char = '';
                    for (var i = 0; i < inputs.length; i++) {
                        char = inputs[i];
                        if (OP.indexOf(char) > -1) {
                            char = ' ' + char + ' ';
                        }
                        buf.push(char);
                    }
                    this.result = buf.join('');
                },
                calculate: function calculate() {
                    var result = eval(this.result);
                    this.inputs = [result];
                    this.result = result;
                    this.shouldClear = true;
                },
                clear: function clear() {
                    this.inputs = [];
                    this.result = '';
                }
            }
        };

        /***/
    },
    /* 4 */
    /***/
    function(module, exports) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    staticStyle: {
                        padding: "5px"
                    }
                }, [_c('text', {
                    staticClass: ["result"]
                }, [_vm._v(_vm._s(_vm.result))]), _c('div', {
                    staticClass: ["row"]
                }, [_c('text', {
                    staticClass: ["btn"],
                    on: {
                        "click": function($event) {
                            _vm.input(1)
                        }
                    }
                }, [_vm._v("1")]), _c('text', {
                    staticClass: ["btn"],
                    on: {
                        "click": function($event) {
                            _vm.input(2)
                        }
                    }
                }, [_vm._v("2")]), _c('text', {
                    staticClass: ["btn"],
                    on: {
                        "click": function($event) {
                            _vm.input(3)
                        }
                    }
                }, [_vm._v("3")]), _c('text', {
                    staticClass: ["btn", "btn-operator"],
                    on: {
                        "click": function($event) {
                            _vm.input('+')
                        }
                    }
                }, [_vm._v("+")])]), _c('div', {
                    staticClass: ["row"]
                }, [_c('text', {
                    staticClass: ["btn"],
                    on: {
                        "click": function($event) {
                            _vm.input(4)
                        }
                    }
                }, [_vm._v("4")]), _c('text', {
                    staticClass: ["btn"],
                    on: {
                        "click": function($event) {
                            _vm.input(5)
                        }
                    }
                }, [_vm._v("5")]), _c('text', {
                    staticClass: ["btn"],
                    on: {
                        "click": function($event) {
                            _vm.input(6)
                        }
                    }
                }, [_vm._v("6")]), _c('text', {
                    staticClass: ["btn", "btn-operator"],
                    on: {
                        "click": function($event) {
                            _vm.input('-')
                        }
                    }
                }, [_vm._v("-")])]), _c('div', {
                    staticClass: ["row"]
                }, [_c('text', {
                    staticClass: ["btn"],
                    on: {
                        "click": function($event) {
                            _vm.input(7)
                        }
                    }
                }, [_vm._v("7")]), _c('text', {
                    staticClass: ["btn"],
                    on: {
                        "click": function($event) {
                            _vm.input(8)
                        }
                    }
                }, [_vm._v("8")]), _c('text', {
                    staticClass: ["btn"],
                    on: {
                        "click": function($event) {
                            _vm.input(9)
                        }
                    }
                }, [_vm._v("9")]), _c('text', {
                    staticClass: ["btn", "btn-operator"],
                    on: {
                        "click": function($event) {
                            _vm.input('*')
                        }
                    }
                }, [_vm._v("*")])]), _c('div', {
                    staticClass: ["row"]
                }, [_c('text', {
                    staticClass: ["btn"],
                    on: {
                        "click": function($event) {
                            _vm.input(0)
                        }
                    }
                }, [_vm._v("0")]), _c('text', {
                    staticClass: ["btn"],
                    on: {
                        "click": function($event) {
                            _vm.input('.')
                        }
                    }
                }, [_vm._v(".")]), _c('text', {
                    staticClass: ["btn"],
                    on: {
                        "click": _vm.clear
                    }
                }, [_vm._v("AC")]), _c('text', {
                    staticClass: ["btn", "btn-operator"],
                    on: {
                        "click": _vm.calculate
                    }
                }, [_vm._v("=")])])])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true

        /***/
    }
    /******/
]);