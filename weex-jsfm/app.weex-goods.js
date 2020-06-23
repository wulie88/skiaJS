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

        var _c458803b2a83a336099ff43dae4d1a = __webpack_require__(1);

        var _c458803b2a83a336099ff43dae4d1a2 = _interopRequireDefault(_c458803b2a83a336099ff43dae4d1a);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        _c458803b2a83a336099ff43dae4d1a2.default.el = '#root';
        new Vue(_c458803b2a83a336099ff43dae4d1a2.default);

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
        __vue_options__.__file = "/usr/src/app/raw/6c458803b2a83a336099ff43dae4d1a5.vue"
        __vue_options__.render = __vue_template__.render
        __vue_options__.staticRenderFns = __vue_template__.staticRenderFns
        __vue_options__._scopeId = "data-v-08e6c298"
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
            "list": {
                "backgroundColor": "#F5F5F5"
            },
            "cell": {
                "borderBottomWidth": 15,
                "borderBottomColor": "#F5F5F5",
                "backgroundColor": "#FFFFFF"
            },
            "A-title": {
                "fontSize": 40,
                "textAlign": "center",
                "paddingTop": 35,
                "paddingBottom": 25
            },
            "A-desc": {
                "lines": 2,
                "color": "#999999",
                "fontSize": 30,
                "paddingLeft": 30,
                "paddingRight": 30
            },
            "A-image-box": {
                "flexDirection": "row",
                "justifyContent": "space-between",
                "marginTop": 20
            },
            "A-image": {
                "width": 245,
                "height": 245
            },
            "A-comment": {
                "color": "#52bfe6",
                "fontSize": 32,
                "textAlign": "right",
                "paddingRight": 50,
                "marginTop": 25,
                "marginBottom": 20
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

        exports.default = {
            data: function data() {
                return {
                    boxes: [{
                        title: '就造专属感，给孩子寻个座椅好玩伴',
                        desc: '犹记得儿时的风筝带着斑斓的色彩在天空飘过；那小河里躲迷藏的鱼虾，还待着小伙伴们一起去捕捉，如今的孩童没有了这些简单且纯粹的娱乐项目，生活在高楼城市中的他们，该当怎样度过自己的童年才是美好的？',
                        pictures: ['https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i4/706778912/TB2hvwSXBvBIuJjy1zeXXbGBpXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i3/706778912/TB2wX.fcxz9F1JjSZFsXXaCGVXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg'],
                        count: 237
                    }, {
                        title: '睡袍穿不对，脱光也不媚！',
                        desc: '“Ihatemynightgown（我讨厌我的睡袍）.”经典电影《罗马假日》中，赫本饰演的安妮公主躺在梦幻的宫廷大床上，抱怨她身上那华丽的大睡袍臃肿不便，为公主的浪漫逃逸埋下伏笔。想象一下，男朋友刚刚',
                        pictures: ['https://gw.alicdn.com/imgextra/i3/3044653839/TB2a_nAXgsSMeJjSspdXXXZ4pXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/3044653839/TB2qrPCXiERMeJjSspiXXbZLFXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg'],
                        count: 876
                    }, {
                        title: '上天入海？运动相机帮你搞定',
                        desc: '现如今相机好像成为了我们每个人必不可少的装备，不管是专业的相机还是我们可拍照的手机，我们使用到它的频率也越来越高。为了追求更好的拍摄质量，人们似乎也愿意花更多的钱去购买好的拍摄装备',
                        pictures: ['https://gw.alicdn.com/tfscom/i3/462856946/TB2VzQswB4lpuFjy1zjXXcAKpXa_!!462856946.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/tfscom/i2/2811920170/TB2rCqHpVXXXXcZXpXXXXXXXXXX_!!2811920170.png_250x250.jpg', 'https://gw.alicdn.com/imgextra/i4/836552381/TB2c1q3aZSfF1JjSsplXXbrKFXa_!!836552381-0-beehive-scenes.jpg_250x250q90s200.jpg'],
                        count: 59
                    }, {
                        title: '关于培根的那些事，教你吃得门清',
                        desc: '培根一直被认为是早餐的头盘，早上烤两片面包，平底锅煎一片培根、一个鸡蛋，和生菜一起夹在面包中，有荤有素，就是一顿丰富美味的西式早餐。培根的英文名是“Bacon”，原意是烟熏的猪肋条肉，或烟熏背脊肉',
                        pictures: ['https://gw.alicdn.com/imgextra/i2/603964020/TB24zFbarwTMeJjSszfXXXbtFXa_!!603964020-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i2/603964020/TB2txtdarsTMeJjy1zcXXXAgXXa_!!603964020-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/tfscom/i3/1635378022/TB2plKDbFXXXXaTXpXXXXXXXXXX-1635378022.jpg_250x250q90s200.jpg'],
                        count: 3576
                    }, {
                        title: '轻奢风来袭，皮艺床打造典雅居室',
                        desc: '对于追求生活高品质感的小伙伴来说，皮艺家具是展现其高格调的途径之一。想要营造出奢华质感的卧室环境，大气庄重的皮床当然是不错的选择。特别是简欧风或是美式古典风格的家居环境，如果配以皮艺床简直就是点睛之笔',
                        pictures: ['https://gw.alicdn.com/imgextra/i2/787557947/TB2erNKawoQMeJjy0FoXXcShVXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/787557947/TB2KANyaBUSMeJjy1zkXXaWmpXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i3/787557947/TB2lwdGayERMeJjy0FcXXc7opXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg'],
                        count: 36
                    }]
                };
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
                return _c('list', {
                    staticClass: ["list"]
                }, _vm._l((_vm.boxes), function(item) {
                    return _c('cell', {
                        staticClass: ["cell"],
                        appendAsTree: true,
                        attrs: {
                            "append": "tree"
                        }
                    }, [_c('text', {
                        staticClass: ["A-title"]
                    }, [_vm._v(_vm._s(item.title))]), _c('text', {
                        staticClass: ["A-desc"],
                        attrs: {
                            "lines": "2"
                        }
                    }, [_vm._v(_vm._s(item.desc))]), _c('div', {
                        staticClass: ["A-image-box"]
                    }, _vm._l((item.pictures), function(source, i) {
                        return _c('image', {
                            key: i,
                            staticClass: ["A-image"],
                            attrs: {
                                "src": source
                            }
                        })
                    })), _c('text', {
                        staticClass: ["A-comment"]
                    }, [_vm._v(_vm._s(item.count) + " 人说好")])])
                }))
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true

        /***/
    }
    /******/
]);