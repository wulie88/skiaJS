const jsfm = require('./weex-js-framework-dev.js');
const tree = require('./desc-tree')
const {document, eventProxy} = require('./element-tree')
const renderer = require('./renderer')
const fs = require('fs')
const vm = require('vm')
const path = require('path')

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

eventProxy.sub(context, '4')

// console.log('jsfm', jsfm, 'context', context)
global.callNative = function (instanceId, [{method, module, args}]) {
  if ('addElement' === method) {
    tree.buildDescTree(...args)
  } else if ('updateAttrs' === method) {
    tree.updateDescAttrs(...args)
    // this.console.log('callNative', method, module, args)
  } else {
    this.console.log('callNative', method, module, args)
  }
}
vm.createContext(context); // Contextify the object.
// global = Object.assign(global, context)
vm.runInContext(fs.readFileSync(path.join(__dirname, './app.weex-nesting.js')), context);


// console.log(root)
tree.dumpJsonFile()

renderer(document)

// __WEEX_CALL_JAVASCRIPT__
