// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\wxapp\\111111s\\src\\app.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5f3b658a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "flex-vertical": {
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#ff6992",
    "flex": 1
  },
  "flex-h": {
    "backgroundColor": "#ff6992",
    "display": "flex",
    "flexDirection": "row"
  },
  "h-text": {
    "height": "70",
    "textAlign": "center",
    "lineHeight": "70",
    "color": "#111111"
  },
  "header": {
    "height": "130",
    "flex": 0.09
  },
  "panel": {
    "height": "250",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "#ffffff"
  },
  "row": {
    "width": "250",
    "height": "200",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "#ffffff",
    "justifyContent": "center"
  },
  "blank": {
    "width": "750",
    "height": "632",
    "borderRadius": "20"
  },
  "text": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#41B883"
  },
  "XTop": {
    "height": "34",
    "backgroundColor": "#000000"
  },
  "list": {
    "flex": 0.9
  },
  "video": {
    "width": "640",
    "height": "540"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projects = __webpack_require__(3);

var _projects2 = _interopRequireDefault(_projects);

var _apis = __webpack_require__(4);

var _apis2 = _interopRequireDefault(_apis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
var gevent = weex.requireModule('globalEvent');
exports.default = {
  data: function data() {
    return {
      state: '-',
      i: 0,
      headerHeight: 0,
      showXTop: false,
      psv: [],
      items: (0, _apis2.default)()
    };
  },
  created: function created() {
    var ps = (0, _projects2.default)(),
        psv = [];
    for (var i = 0; i < ps.length; i += 3) {
      psv.push(ps.slice(i, i + 3));
    }
    this.psv = psv;
    // gevent.addEventListener("notifyInputBox", function (e) {
    //   modal.alert({ title: 'notifyInputBox返回结果', message: JSON.stringify(e) });
    // });
    // gevent.addEventListener("notifyDeviceAuthroize", function (e) {
    //   modal.alert({ title: 'notifyDeviceAuthroize返回结果', message: JSON.stringify(e) });
    // });
    // this.showXTop = this.isIphoneX()
  },

  methods: {
    jump: function jump(action) {
      if (action.indexOf('pinkwx') != -1) {
        event.appJump({ action: action });
      } else {
        event.openWindow({ url: action }, function (e) {});
      }
    },
    viewappear: function viewappear() {
      modal.toast({ message: 'viewappear' });
    },
    viewdisappear: function viewdisappear() {
      modal.toast({ message: 'viewdisappear' });
    },
    onstart: function onstart(event) {
      this.state = 'onstart';
    },
    onpause: function onpause(event) {
      this.state = 'onpause';
    },
    onfinish: function onfinish(event) {
      this.state = 'onfinish';
    },
    onfail: function onfail(event) {
      this.state = 'onfail';
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function g() {
    return [{
        "title": "史乐义196",
        "url": "http://192.168.1.196:8000/dist/app.weex.js"
    }, {
        "title": "梁昭宇185",
        "url": "http://192.168.1.185:8000/dist/app.weex.js"
    }, {
        "title": "李晓旸66",
        "url": "http://192.168.1.66:8000/dist/app.weex.js"
    }, {
        "title": "江海洋",
        "url": "http://192.168.1.180:8000/dist/app.weex.js"
    }, {
        "title": "李晓旸221",
        "url": "http://192.168.1.221:8000/dist/app.weex.js"
    }, {
        "title": "222",
        "url": "http://192.168.1.222:8000/dist/app.weex.js"
    }, {
        "title": "Weex广告测试",
        "url": "pinkwx://ad-demo/app.weex.js"
    }, {
        "title": "排行榜",
        "url": "pinkwx://rank/app.weex.js?date=2017-05-01"
    }, {
        "title": "地铁",
        "url": "pinkwx://metro/app.weex.js"
    }, {
        "title": "会员中心",
        "url": "pinkwx://vipcenter/app.weex.js"
    }, {
        "title": "深夜小故事",
        "url": "pinkwx://bookStore/app.weex.js"
    }, {
        "title": "签到",
        "url": "pinkwx://checkin/app.weex.js"
    }, {
        "title": "粉币乐园",
        "url": "pinkwx://coinMall/app.weex.js"
    }, {
        "title": "运动",
        "url": "pinkwx://sport/app.weex.js"
    }, {
        "title": "聘关系",
        "url": "pinkwx://relationships/app.weex.js"
    }];
}

exports.default = g;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
var event = weex.requireModule('event');

var actions = {
	perform: function perform(name) {
		if (this[name]) this[name]();
	},
	openWindow: function openWindow() {
		console.log('openWindow');
		event.openWindow({
			url: "http://192.168.1.196/dist/app.weex.js"
		}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	vipCenter: function vipCenter() {
		console.log('openWindow');
		event.openWindow({
			url: "http://192.168.1.158/dist/app.weex.js"
		}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	getUrl: function getUrl() {
		var url = this.$getConfig().bundleUrl;
		modal.toast({
			title: '返回结果',
			message: 'callback: ' + JSON.stringify(url)
		});
	},
	openWindow222: function openWindow222() {
		console.log('openWindow');
		event.openWindow({
			url: "http://192.168.1.222/dist/app.weex.js"
		}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	openWindow333: function openWindow333() {
		console.log('openWindow');
		event.openWindow({
			url: "http://192.168.1.61/dist/app.weex.js"
		}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	pinkShop: function pinkShop() {
		event.openWindow({
			url: "http://wxapp.ffrj.net/pinkShop/app.weex.js"
		}, function (result) {});
	},
	turn: function turn() {
		event.openWindow({
			url: "https://h5.m.taobao.com/trip/weex-ui/demo/index.native-min.js"
		}, function (result) {});
	},
	getRunData: function getRunData() {
		console.log('getRunData');
		event.getRunData({}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	presentLogin: function presentLogin() {
		console.log('presentLogin');
		event.presentLogin({}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	deviceAuthroize: function deviceAuthroize() {
		console.log('deviceAuthroize');
		event.deviceAuthroize({
			scope: 'scope.run'
		}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	trackEvent: function trackEvent() {
		console.log('trackEvent');
		event.trackEvent({
			e: 'wxapp_demo_track',
			attrs: [{
				k: 'uid',
				v: '5526322'
			}, {
				k: 'aid',
				v: '111111'
			}]
		}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	inputBoxDemo: function inputBoxDemo() {
		event.openWindow({
			url: "http://wxapp.ffrj.net/inputBoxDemo/app.weex.js"
		}, function (result) {});
	},
	uploaddemo: function uploaddemo() {
		event.openWindow({
			url: "http://wxapp.ffrj.net/uploaddemo/app.weex.js"
		}, function (result) {});
	},
	desk: function desk() {
		event.openWindow({
			url: "http://wxapp.ffrj.net/desk/app.weex.js"
		}, function (result) {});
	},
	a222222: function a222222() {
		event.openWindow({
			url: "http://wxapp.ffrj.net/222222/app.weex.js"
		}, function (result) {});
	},
	article: function article() {
		event.openWindow({
			url: "http://wxapp.ffrj.net/article/app.weex.js"
		}, function (result) {});
	},
	rank: function rank() {
		event.openWindow({
			url: "http://wxapp.ffrj.net/rank/app.weex.js?date=2017-05-01"
		}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	metro: function metro() {
		event.openWindow({
			url: "http://192.168.1.196/dist/app.weex.js"
		}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	giftprofit: function giftprofit() {
		event.openWindow({
			url: "http://wxapp.ffrj.net/giftprofit/app.weex.js"
		}, function (result) {});
	},
	goBack: function goBack() {
		event.goBack({
			result: "data load over."
		});
	},
	setCallbackResult: function setCallbackResult() {
		event.setCallbackResult({
			result: "data load over. more more"
		});
	},
	appJump: function appJump() {
		event.appJump({
			action: "http://192.168.1.158/?o=js"
		});
	},
	setWebviewTitle: function setWebviewTitle() {
		event.setWebviewTitle({
			title: "粉粉小程序"
		});
	},
	getUserInfo: function getUserInfo() {
		event.getUserInfo({}, function (result) {
			modal.alert({
				title: '返回结果',
				message: JSON.stringify(result)
			});
		});
	},
	signatureUrl: function signatureUrl() {
		console.log('signatureUrl');
		event.signatureUrl({
			url: "http://wxapp.ffrj.net/111111/test/index.js?signature=1"
		}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	getAppInfo: function getAppInfo() {
		console.log('getAppInfo');
		event.getAppInfo({}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	alert: function alert() {
		var ps = [{
			title: '确实要离开这里?',
			desc: '还想走，信不信我打死你',
			cancelBtn: '离开这里',
			otherBtns: ['继续写']
		}, {
			title: '这里是分享的文案',
			desc: '还想走，信不信我打死你',
			icon: 'http://img.fenfenriji.com/90/68/AE/Image/2B99FE21-3D9A-2196-9F3A-58DCC1ACB2D6.png',
			cancelBtn: '取消',
			otherBtns: ['发送'],
			requrieInput: true
		}, {
			title: '提示',
			desc: '请写点日记内容啊',
			cancelBtn: '好的'
		}, {
			title: '登录失败',
			desc: '账号和密码不匹配',
			cancelBtn: '知道了',
			emotion: 'cry'
		}, {
			title: '大人求5星',
			desc: '新宝贝上线，给个5星好评呗',
			cancelBtn: '以后再说',
			otherBtns: ['5星那去不谢', '我要吐槽'],
			emotion: 'cry'
		}, {
			title: "你的好友鱼丸赠送你一个月粉粉会员\n友谊的小船变巨轮",
			cancelBtn: '知道了',
			otherBtns: ['炫耀一下'],
			head: 'http://img.fenfenriji.com/90/68/AE/Image/2AE399BB-142A-78C4-1C10-58DCC17B1DFB.png',
			scene: 'firework'
		}];
		var i = parseInt(Math.random() * 100) % ps.length;
		if (i < ps.length) {
			var d = ps[i];
			modal.alert({
				title: '请求',
				message: 'data: ' + JSON.stringify(d)
			});
			event.alert(d, function (result) {
				modal.toast({
					title: '返回结果',
					message: JSON.stringify(result)
				});
			});
		}
	},
	share1: function share1() {
		var action_url = 'http://d.fenfenriji.com/test/jsbridge/index.html'; //内部分享
		var url = 'http://d.fenfenriji.com/test/jsbridge/index.html'; //外部分享

		event.share({
			shareType: 'all',
			action_url: action_url,
			title: '通用分享',
			summary: '通用分享',
			target_url: url,
			image_url: 'http://img.fenfenriji.com/75/84/9B/Image/D673D3E9-0623-7DD8-566F-57D12A7CB165.png'
		}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	share2: function share2() {
		var action_url = 'http://d.fenfenriji.com/test/jsbridge/index.html'; //内部分享
		var url = 'http://d.fenfenriji.com/test/jsbridge/index.html'; //外部分享

		event.share({
			shareType: 'pink',
			action_url: action_url,
			title: '通用分享到内部',
			summary: '通用分享',
			target_url: url,
			image_url: 'http://img.fenfenriji.com/75/84/9B/Image/D673D3E9-0623-7DD8-566F-57D12A7CB165.png'
		}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	postRequestPath: function postRequestPath() {
		console.log('postRequestPath');
		event.postRequestPath({
			do: "groupChat",
			params: {
				"action": "getMyJoinedGroups"
			}
		}, function (result) {
			modal.alert({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	trackClick: function trackClick() {
		event.trackClick({
			"pid": "1111111",
			"bt": "进入游戏",
			"bs": "1"
		});
	},
	getRequestURL: function getRequestURL() {
		console.log('getRequestURL');
		event.getRequestURL({}, function (result) {
			modal.alert({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	getLocation: function getLocation() {
		event.getLocation({}, function (result) {
			modal.alert({
				title: '返回结果',
				message: JSON.stringify(result)
			});
		});
	},
	previewImage: function previewImage() {
		var urls = ['https://img.fenfenriji.com/90/68/AE/Image/A3B29105-EA1F-BF56-AF88-593E55047319.jpg', 'https://img.fenfenriji.com/90/68/AE/Image/a7f3d240b6be0906b1368431b0ca6005.png'];
		urls.push('https://img.fenfenriji.com/90/68/AE/Image/5D66D27F-F7DB-5DAE-D6BE-5937AB910B45.jpg');
		event.previewImage({
			urls: urls,
			current: urls[1]
		}, function () {});
	},
	chooseImage: function chooseImage() {
		event.chooseImage({
			count: 8
		}, function (result) {
			modal.alert({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	chooseImageAndPreview: function chooseImageAndPreview() {
		event.chooseImage({
			count: 8
		}, function (result) {
			modal.alert({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
			var urls = result['tempFilePaths'];
			urls.push('https://img.fenfenriji.com/90/68/AE/Image/5D66D27F-F7DB-5DAE-D6BE-5937AB910B45.jpg');
			event.previewImage({
				urls: urls,
				current: urls[1]
			}, function () {});
		});
	},
	uploadFile: function uploadFile() {
		event.chooseImage({
			count: 1
		}, function (result) {
			modal.alert({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
			var urls = result['tempFilePaths'];
			event.uploadFile({
				filePath: urls[0]
			}, function (result) {
				modal.alert({
					title: 'uploadFile',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		});
	},
	uploadVideoFile: function uploadVideoFile() {
		event.chooseVideo({
			count: 1
		}, function (result) {
			modal.alert({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
			var urls = result['tempFilePaths'];
			event.uploadFile({
				filePath: urls[0]
			}, function (result) {
				modal.alert({
					title: 'uploadFile',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		});
	},
	chooseVideo: function chooseVideo() {
		event.chooseVideo({
			count: 8
		}, function (result) {
			modal.alert({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	downloadImageAndSave: function downloadImageAndSave() {
		event.downloadFile({
			url: "https://img.fenfenriji.com/90/68/AE/Image/5EBB6CDE-1700-2D13-A219-5937ABD181F9.jpg"
		}, function (result) {
			modal.alert({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
			var filePath = result['tempFilePath'];
			event.saveImageToPhotosAlbum({
				filePath: filePath
			}, function (result) {
				modal.alert({
					title: 'saveImageToPhotosAlbum',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		});
	},
	downloadVideoAndSave: function downloadVideoAndSave() {
		event.downloadFile({
			url: "https://media.fenfenriji.com/7F/56/1C/video/1ca825ed63360c028d58646e0b379853.mp4"
		}, function (result) {
			modal.alert({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
			var filePath = result['tempFilePath'];
			event.saveVideoToPhotosAlbum({
				filePath: filePath
			}, function (result) {
				modal.alert({
					title: 'saveImageToPhotosAlbum',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		});
	},
	getImageInfo: function getImageInfo() {
		event.downloadFile({
			url: "https://img.fenfenriji.com/90/68/AE/Image/5EBB6CDE-1700-2D13-A219-5937ABD181F9.jpg"
		}, function (result) {
			modal.alert({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
			event.getImageInfo({
				filePath: result['tempFilePath']
			}, function (result) {
				modal.alert({
					title: 'getImageInfo返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		});
	},

	configNavigationBar: function () {
		var t = true;
		return function () {
			t = !t;
			event.configNavigationBar({
				showBackButtonShadow: t
			}, function () {});
		};
	}(),
	jump: function jump(name) {
		console.log('will jump', name);
		return;
		navigator.push({
			url: '/111111/foo.js',
			animated: "true"
		}, function (event) {
			modal.toast({
				message: 'callback: ' + event
			});
		});
	},
	getFailedIAPOrders: function getFailedIAPOrders() {
		event.getFailedIAPOrders({}, function (result) {
			modal.alert({
				title: 'getFailedIAPOrders返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	uploadFailedIAPOrders: function uploadFailedIAPOrders() {
		event.uploadFailedIAPOrders({}, function (result) {
			modal.alert({
				title: 'uploadFailedIAPOrders 返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	scanCode: function scanCode() {
		event.scanCode({}, function (result) {
			modal.alert({
				title: 'uploadFailedIAPOrders 返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	scanCodeOnlyFromCamera: function scanCodeOnlyFromCamera() {
		event.scanCode({
			onlyFromCamera: true
		}, function (result) {
			modal.alert({
				title: 'uploadFailedIAPOrders 返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	shareAfterScreenshot: function shareAfterScreenshot() {
		var action_url = 'http://d.fenfenriji.com/test/jsbridge/index.html'; //内部分享
		var url = 'http://d.fenfenriji.com/test/jsbridge/index.html'; //外部分享
		event.shareAfterScreenshot({
			shareType: 'all',
			action_url: action_url,
			title: '通用分享到内部',
			summary: '通用分享',
			target_url: url,
			area: '0, 100, 700, 700'
		}, function (result) {
			modal.toast({
				title: '返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	backWindow: function backWindow() {
		event.backWindow({
			delta: 2
		}, function (result) {});
	},
	replaceWindow: function replaceWindow() {
		event.replaceWindow({
			url: 'pinkwx://metro/app.weex.js'
		}, function (result) {
			modal.alert({
				title: 'replaceWindow 返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	getCurrentWindows: function getCurrentWindows() {
		event.getCurrentWindows({}, function (result) {
			modal.alert({
				title: 'getCurrentWindows 返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},

	// 5.9
	record: function record() {
		var _this = this;

		event.startRecord({}, function (result) {
			modal.alert({
				title: 'startRecord 返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
			_this.tempVoiceFilePath = result.tempFilePath;
		});
		setTimeout(function () {
			//结束录音  
			event.stopRecord();
		}, 5000);
	},
	playVoice: function playVoice() {
		var p = this.tempVoiceFilePath ? {
			tempFilePath: this.tempVoiceFilePath
		} : {
			url: 'https://media.fenfenriji.com//ED/56/AF/video/55ED3835-2216-1640-9382-5A3A4024E32A.mp3'
		};
		modal.toast({
			message: 'playVoice: ' + JSON.stringify(p)
		});
		event.playVoice(p, function (result) {
			modal.alert({
				title: 'playVoice 返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	pauseVoice: function pauseVoice() {
		event.pauseVoice();
	},
	stopVoice: function stopVoice() {
		event.stopVoice();
	},
	showActionSheet: function showActionSheet() {
		event.showActionSheet({
			otherItems: ['分享', '删除'],
			cancelItem: '算了',
			title: '我想:'
		}, function (result) {
			modal.alert({
				title: 'showActionSheet 返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	showActionSheet1: function showActionSheet1() {
		event.showActionSheet({
			otherItems: ['分享', '删除']
		}, function (result) {
			modal.alert({
				title: 'showActionSheet1 返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	sendMessageToGroup: function sendMessageToGroup(slient) {
		var msg = {
			"uid": "0",
			"mUid": "0",
			"nickname": "",
			"mNickname": "",
			"content": "您的1个月粉粉会员连续包月还没有开通成功，离至高无上的会员只差一步，快点我完成支付~",
			"msgType": "share",
			"msgData": {
				"eventType": "group:joined",
				"image": "http://img.fenfenriji.com/95/48/86/Image/-577118252.png",
				"action": "http://app.mall.fenfenriji.com/vip.php?signature=1&gopath=pay",
				"content": "您的1个月粉粉会员连续包月还没有开通成功，离至高无上的会员只差一步，快点我完成支付~",
				"title": "title",
				"tpl": 1
			}
		};
		event.sendMessageToGroup({
			gid: '339105',
			message: JSON.stringify(msg),
			slient: slient || false
		}, function (result) {
			modal.alert({
				title: 'showActionSheet1 返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	sendMessageToGroup1: function sendMessageToGroup1() {
		this.sendMessageToGroup(true);
	},
	sendMessageToUser: function sendMessageToUser(slient) {
		var msg = {
			"avatar": "",
			"content": "#[花花日记_偷笑]",
			"msgType": "emotion",
			"data": {
				"eid": "20095",
				"eicon": "http://d.fenfenriji.com/diary/emotion/20095/profile/cover.png",
				"image": "https://d.fenfenriji.com/diary/emotion/20095/huahuarji/huahuarji_1_7eee5464.png",
				"etitle": "花花日记"
			},
			"id": 1507882253,
			"time": 1507882253,
			"mNickname": "",
			"status": 0,
			"uid": "6814260",
			"type": 1,
			"mUid": "5526322"
		};
		event.sendMessageToUser({
			mUid: '5526322',
			message: JSON.stringify(msg),
			slient: slient || false
		}, function (result) {
			modal.alert({
				title: 'showActionSheet1 返回结果',
				message: 'callback: ' + JSON.stringify(result)
			});
		});
	},
	sendMessageToUser1: function sendMessageToUser1() {
		this.sendMessageToUser(true);
	},
	showInputBox: function showInputBox() {
		var p = {
			options: ["text", "emotion", "image"],
			config: {
				textCountLimit: 140,
				textHolder: "添加评论"
			}
		};
		event.showInputBox(p, function () {});
	},
	hideInputBox: function hideInputBox() {
		event.hideInputBox({}, function () {});
	},
	calcHeaderHeight: function calcHeaderHeight() {
		if (this.isAndroid()) {
			return this.calcfixationSize(96, true);
		} else if (this.isIphoneX()) {
			// return weex.config.env.deviceWidth <= 640?155:130;
			return this.calcfixationSize(176);
		} else {
			return this.calcfixationSize(128);
		}
	},
	calcfixationSize: function calcfixationSize(input, isAndroid) {
		var ratio = weex.config.env.deviceWidth / Number(weex.config.env.scale) / 375;
		return (input / ratio).toFixed(0);
	},
	isAndroid: function isAndroid() {
		return weex.config.env.platform === 'android';
	},
	isIphoneX: function isIphoneX() {
		return !this.isAndroid() && weex.config.env.deviceWidth === 375 * Number(weex.config.env.scale) && weex.config.env.deviceHeight === 812 * Number(weex.config.env.scale);
	}
};

var g = function g() {
	return [{
		title: '是否有链接广告test_link0',
		v: '7.4.5',
		test: function test() {
			event.hasAd({
				position: "test_link0"
			}, function (result) {
				modal.alert({
					title: 'hasAd 返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
			event.onDisplayedAd({
				position: "test_link0"
			}, function (result) {});
		}
	}, {
		title: '展示链接广告test_link0',
		v: '7.4.5',
		test: function test() {
			event.clickAd({
				position: "test_link0"
			}, function (result) {
				modal.alert({
					title: 'clickAd 返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		}
	}, {
		title: '展示url',
		v: '7.4.5',
		test: function test() {
			// 	    var url = weex.config.bundleUrl+"?c=1&v=444&sd=refe3333"+"#/";
			// 			var regs = new RegExp("#/","g")";
			// 			regs = str.replace(regs,"");
			// 			var num = url.replace(/[^?]/g, "").length;
			// 			event.hasAd({ position: "test_url"}, (result) => {
			//          var result = url.match(new RegExp("[\?\&]" + 'sd' + "=([^\&]+)", "i"));
			//          if (result == null || result === undefined) {
			//             //console.warn( '警告:\n--- start :\n' + name + ' 值为 ' + result + '\n--- end \n\n');
			// 						modal.toast({ title: '返回结果', message: 'callback: ' + JSON.stringify(result[1]) })
			//          }else{
			//             //return result[1];
			// 						modal.toast({ title: '返回结果', message: 'callback: ' + JSON.stringify(result[1]) })
			//          }
			// 			})

			var url = weex.config.bundleUrl;
			event.hasAd({ position: "test_url" }, function (result) {
				modal.toast({
					title: '返回结果',
					message: 'callback: ' + JSON.stringify(url)
				});
			});
		}
	}, {
		title: '是否有视频激励广告test_video3',
		v: '7.4.5',
		test: function test() {
			event.hasAd({
				position: "test_video3"
			}, function (result) {
				modal.alert({
					title: 'hasAd 返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
			event.onDisplayedAd({
				position: "test_video3"
			}, function (result) {});
		}
	}, {
		title: '显示视频激励广告test_video3',
		v: '7.4.5',
		test: function test() {
			event.showRewardedVideoAd({
				position: "test_video3"
			}, function (result) {
				modal.alert({
					title: 'showRewardedVideoAd 返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		}
	}, {
		title: '是否有Banner广告test_banner0',
		v: '7.4.5',
		test: function test() {
			event.hasAd({
				position: "test_banner0"
			}, function (result) {
				modal.alert({
					title: 'hasAd 返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		}
	}, {
		title: '显示Banner广告test_banner0',
		v: '7.4.5',
		test: function test() {
			event.showAd({
				position: "test_banner0"
			}, function (result) {
				modal.alert({
					title: 'showAd 返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
			event.onDisplayedAd({
				position: "test_banner0"
			}, function (result) {});
		}
	}, {
		title: '触发上传用户使用记录',
		v: '7.3.5',
		test: function test() {
			event.uploadLogs({}, function (result) {
				modal.alert({
					title: 'screenshot 返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		}
	}, {
		title: '截图保存',
		v: '5.9.7',
		action: 'screenshot',
		test: function test() {
			event.screenshot({
				area: "0, 100, 750, 750",
				save_cdn: 1,
				save_album: 1
			}, function (result) {
				modal.alert({
					title: 'screenshot 返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		}
	}, {
		title: '分享黑卡',
		test: function test() {
			var action_url = 'pinkwx://blackcard/app.weex.js';
			event.share({
				shareType: 'pink',
				action_url: action_url,
				title: '粉色黑卡来袭 让特权席卷你的生活',
				summary: '享粉粉年费会员特权+环球黑卡终身会籍',
				image_url: 'http://img.fenfenriji.com/75/84/9B/Image/D673D3E9-0623-7DD8-566F-57D12A7CB165.png'
			}, function (result) {
				modal.toast({
					title: '返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		}
	}, {
		title: 'getInstalledApps',
		test: function test() {
			event.getInstalledApps({}, function (result) {
				modal.toast({
					title: '返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		}
	}, {
		title: '打开商品页',
		test: function test() {
			event.appJump({
				action: 'pinkwx://pinkShop/app.weex.js?createOrderByGoodId=115'
			}, function (result) {});
		}
	}, {
		action: 'openWindow222',
		title: 'openWindow222'
	}, {
		title: '微信一次性授权',
		v: '5.9.7',
		test: function test() {
			event.WXSubscribeAuthroize({
				template_id: "xBymybiUOecfddzizwiUzPKOflWKsn8ToZgNkdHlw50",
				scene: 1000,
				reserved: ""
			}, function (result) {
				modal.toast({
					title: '返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		}
	}, {
		title: '录音5s后停止',
		v: '5.9',
		action: 'record',
		test: function test() {
			var _this2 = this;

			event.startRecord({}, function (result) {
				modal.alert({
					title: 'startRecord 返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
				_this2.tempVoiceFilePath = result.tempFilePath;
			});
			setTimeout(function () {
				//结束录音  
				event.stopRecord();
			}, 5000);
		}
	}, {
		title: '使用系统原生方式发起分享',
		v: '5.9.7',
		action: 'shareWithPlatform',
		test: function test() {
			event.shareWithPlatform({
				text: "大声数到三，甜蜜情人节",
				image_path: "http://img.fenfenriji.com/90/68/AE/Image/B28E0834-6B79-2273-76C9-5A72D0B54FCA.jpg"
			}, function (result) {
				modal.alert({
					title: 'shareWithPlatform 返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		}
	}, {
		title: '截图保存',
		v: '5.9.7',
		action: 'screenshot',
		test: function test() {
			event.screenshot({
				area: "0, 100, 750, 750",
				save_cdn: 1,
				save_album: 1
			}, function (result) {
				modal.alert({
					title: 'screenshot 返回结果',
					message: 'callback: ' + JSON.stringify(result)
				});
			});
		}
	}, {
		action: 'playVoice',
		title: '播音'
	}, {
		action: 'pauseVoice',
		title: '暂停播音'
	}, {
		action: 'stopVoice',
		title: '停止播音'
	}, {
		action: 'showActionSheet',
		title: 'showActionSheet'
	}, {
		action: 'showActionSheet1',
		title: 'showActionSheet[简洁]'
	}, {
		action: 'sendMessageToUser',
		title: 'sendMessageToUser'
	}, {
		action: 'sendMessageToUser1',
		title: 'sendMessageToUser静默'
	}, {
		action: 'turn',
		title: '跳转测试'
	}, {
		action: 'scanCode',
		title: 'scanCode'
	}, {
		action: 'scanCodeOnlyFromCamera',
		title: 'scanCode[只能相机]'
	}, {
		action: 'shareAfterScreenshot',
		title: 'shareAfterScreenshot'
	}, {
		action: 'backWindow',
		title: 'backWindow返回两级'
	}, {
		action: 'replaceWindow',
		title: 'replaceWindow替换成地铁'
	}, {
		action: 'getCurrentWindows',
		title: 'getCurrentWindows'
	}, {
		action: 'getRunData',
		title: 'getRunData'
	}, {
		action: 'presentLogin',
		title: 'presentLogin'
	}, {
		action: 'deviceAuthroize',
		title: 'deviceAuthroize'
	}, {
		action: 'getFailedIAPOrders',
		title: 'getFailedIAPOrders'
	}, {
		action: 'uploadFailedIAPOrders',
		title: 'uploadFailedIAPOrders'
	}, {
		action: 'trackEvent',
		title: 'trackEvent'
	}, {
		action: 'pinkShop',
		title: '积分商城'
	}, {
		action: 'inputBoxDemo',
		title: 'InputBox Demo'
	}, {
		action: 'desk',
		title: '小桌面'
	}, {
		action: 'vipCenter',
		title: '会员中心'
	}, {
		action: 'uploaddemo',
		title: 'uploaddemo'
	}, {
		action: 'article',
		title: 'article'
	}, {
		action: 'a222222',
		title: '222222'
	}, {
		action: 'rank',
		title: '排行榜'
	}, {
		action: 'metro',
		title: '地铁'
	}, {
		action: 'giftprofit',
		title: '小金库'
	}, {
		action: 'configNavigationBar',
		title: 'configNavigationBar显示'
	}, {
		action: 'goBack',
		title: 'goBack'
	}, {
		action: 'setCallbackResult',
		title: 'setCallbackResult'
	}, {
		action: 'appJump',
		title: 'appJump'
	}, {
		action: 'setWebviewTitle',
		title: 'setWebviewTitle'
	}, {
		action: 'getUserInfo',
		title: 'getUserInfo'
	}, {
		action: 'signatureUrl',
		title: 'signatureUrl'
	}, {
		action: 'getAppInfo',
		title: 'getAppInfo'
	}, {
		action: 'alert',
		title: 'alert'
	}, {
		action: 'share1',
		title: 'share'
	}, {
		action: 'share2',
		title: 'share内部'
	}, {
		action: 'getRequestURL',
		title: 'getRequestURL'
	}, {
		action: 'postRequestPath',
		title: 'postRequestPath'
	}, {
		action: 'trackClick',
		title: 'trackClick'
	}, {
		action: 'getLocation',
		title: 'getLocation'
	}, {
		action: 'previewImage',
		title: 'previewImage'
	}, {
		action: 'chooseImage',
		title: 'chooseImage'
	}, {
		action: 'chooseVideo',
		title: 'chooseVideo'
	}, {
		action: 'chooseImageAndPreview',
		title: 'chooseImage -> previewImage'
	}, {
		action: 'getImageInfo',
		title: 'downloadFile -> getImageInfo'
	}, {
		action: 'downloadImageAndSave',
		title: 'downloadFile -> saveImageToPhotosAlbum'
	}, {
		action: 'downloadVideoAndSave',
		title: 'downloadFile -> saveVideoToPhotosAlbum'
	}, {
		action: 'uploadFile',
		title: 'chooseImage -> uploadFile'
	}, {
		action: 'uploadVideoFile',
		title: 'chooseVideo -> uploadFile'
	}].map(function (item) {
		if (!item.test) {
			item.test = actions[item.action];
		}

		return item;
	});
};

exports.default = g;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["flex-vertical"]
  }, [(_vm.showXTop) ? _c('div', {
    staticClass: ["XTop"]
  }) : _vm._e(), _c('div', {
    staticClass: ["flex-vertical"]
  }, [_c('list', {
    staticClass: ["list"]
  }, [_c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('vVideo', {
    staticClass: ["video"],
    attrs: {
      "poster": "https://img.fenfenriji.com//90/68/AE/Image/C474BE2C-D374-69A6-2D2A-5981A3C5FCA3.jpeg",
      "src": "http://d.fenfenriji.com/web/act/t/20180724/480p.mp4"
    },
    on: {
      "start": _vm.onstart,
      "pause": _vm.onpause,
      "finish": _vm.onfinish,
      "fail": _vm.onfail
    }
  }), _c('text', [_vm._v("默认controls: false autoclose:true state:" + _vm._s(_vm.state))])], 1), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('vVideo', {
    staticClass: ["video"],
    attrs: {
      "poster": "https://img.fenfenriji.com//90/68/AE/Image/C474BE2C-D374-69A6-2D2A-5981A3C5FCA3.jpeg",
      "src": "http://d.fenfenriji.com/web/act/t/20180724/720p.mp4",
      "controls": "false",
      "autoclose": "true"
    },
    on: {
      "start": _vm.onstart,
      "pause": _vm.onpause,
      "finish": _vm.onfinish,
      "fail": _vm.onfail
    }
  }), _c('text', [_vm._v("controls: false autoclose:true state:" + _vm._s(_vm.state))])], 1), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('vVideo', {
    staticClass: ["video"],
    attrs: {
      "poster": "https://img.fenfenriji.com//90/68/AE/Image/C474BE2C-D374-69A6-2D2A-5981A3C5FCA3.jpeg",
      "src": "http://d.fenfenriji.com/web/act/t/20180724/1080p.mp4",
      "controls": "true",
      "autoclose": "false"
    },
    on: {
      "start": _vm.onstart,
      "pause": _vm.onpause,
      "finish": _vm.onfinish,
      "fail": _vm.onfail
    }
  }), _c('text', [_vm._v("controls: true autoclose:false state:" + _vm._s(_vm.state))])], 1), _vm._m(0), _vm._l((_vm.psv), function(col) {
    return _c('cell', {
      staticClass: ["flex-h"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_vm._l((col), function(p) {
      return [_c('div', {
        staticClass: ["row"],
        on: {
          "click": function($event) {
            _vm.jump(p.url)
          }
        }
      }, [_c('text', {
        staticClass: ["text"]
      }, [_vm._v(_vm._s(p.title))])])]
    })], 2)
  }), _vm._m(1), _vm._l((_vm.items), function(item) {
    return _c('cell', {
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"],
      on: {
        "click": item.test
      }
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(item.title))])])])
  })], 2)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: ["h"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["h-text"]
  }, [_vm._v("应 用")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: ["h"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["h-text"]
  }, [_vm._v("API")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);