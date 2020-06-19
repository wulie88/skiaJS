const jsfm = require('./weex-js-framework-dev.js');
const tree = require('./dom-tree')

// steps: 
// getJSFMVersion registerComponents createInstanceContext __WEEX_CALL_JAVASCRIPT__("0", {method: 'fireEvent', args: ["_root", 'viewappear]})
// createInstanceContext('0', {bundleType: "Vue"})

// 0
console.log('getJSFMVersion', jsfm.getJSFMVersion())
const context = jsfm.createInstanceContext('4', {
  bundleType: 'Vue',
  env: {
    deviceModel: "iPhone11,6",
    deviceWidth: 1242,
  }
}, null)

console.log('jsfm', jsfm)
global.callNative = function (instanceId, [{method, module, args}]) {
  // this.console.log('callNative', method, module, args)
  if ('addElement' === method) {
    tree.buildElementTree(...args)
  }
}
global = Object.assign(global, context)
require('./app.weex.js')

// console.log(root)
tree.dumpJsonFile()
