

// ------ layout ------
const yoga = require('yoga-layout')
const {Node} = yoga

const screenWidth = 750, screenHeight = 1334
const document = Node.create();
document.setWidth(screenWidth);
document.setHeight(screenHeight);
document.setJustifyContent(yoga.JUSTIFY_CENTER);

// should share with precompiler.
const metaMap = {
  figure: ['img', 'image', 'gif', 'figure'],
  p: ['text', 'p'],
  div: ['container', 'div'],
  section: ['cell', 'cell-slot'],
  'recycle-list': ['recycle-list']
}

const checkMap = Object.keys(metaMap).reduce(function (pre, targetTag) {
  const tagArr = metaMap[targetTag]
  tagArr.forEach(function (fromTag) {
    pre[fromTag] = targetTag
  })
  return pre
}, {})

const _stdTagMap = {
  p: 'text',
  figure: 'image',
  section: 'cell'
}
function getStdTag (tag) {
  const stdTag = _stdTagMap[tag]
  return stdTag || tag
}
function transformTag (tag) {
  const elementTag = checkMap[tag]
  return elementTag || tag
}

function string2enum (strings, emuns, val) {
  var index = strings.indexOf(val)
  if (index != -1) {
    return emuns[index]
  }

  return emuns[0]
}
function transformFlexDirection(val) {
  return string2enum(
    ['column', 'column-reverse', 'row', 'row-reverse'], 
    [yoga.FLEX_DIRECTION_COLUMN, yoga.FLEX_DIRECTION_COLUMN_REVERSE, yoga.FLEX_DIRECTION_ROW, yoga.FLEX_DIRECTION_ROW_REVERSE], 
    val
  )
}
function transformFlexWrap(val) {
  return string2enum(['nowrap', 'wrap', 'wrap-reverse'], [yoga.WRAP_NO_WRAP, yoga.WRAP_WRAP, yoga.WRAP_WRAP_REVERSE], val)
}
function transformJustifyContent(val) {
  return string2enum(
    ['flex-start', 'flex-end', 'center', 'space-between'], 
    [yoga.JUSTIFY_FLEX_START, yoga.JUSTIFY_FLEX_END, yoga.JUSTIFY_CENTER, yoga.JUSTIFY_SPACE_BETWEEN], 
    val
  )
}
function transformAlignItems(val) {
  return string2enum(
    ['stretch','flex-start', 'flex-end', 'center'], 
    [yoga.ALIGN_STRETCH, yoga.ALIGN_FLEX_START, yoga.ALIGN_FLEX_END, yoga.ALIGN_CENTER], 
    val
  )
}

function createNode(desc) {
  function style2attr(node , action, desc, key, transformer='none') {
    console.log('style2attr=>', key, desc['style'])
    if (desc['style'] && desc['style'][key] !== undefined) {
      const source = desc['style'][key]
      let value = source
      if (typeof transformer === "function") {
        value = transformer(source)
      } else if (transformer === 'int') {
        value = parseInt(source)
      } else if (transformer === 'float') {
        value = parseFloat(source)
      }

      console.log(key, 'style => value', value, typeof value)
      node[action](value)
    }
  }
  const tag = transformTag(desc['type'])
  const node = Node.create();
  node.setDisplay(yoga.DISPLAY_FLEX)
  node.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)
  node.setFlex(1)
  style2attr(node, 'setFlexDirection', desc, 'flexDirection', transformFlexDirection)
  style2attr(node, 'setJustifyContent', desc, 'justifyContent', transformJustifyContent)
  style2attr(node, 'setFlexWrap', desc, 'flexWrap', transformFlexWrap)
  style2attr(node, 'setAlignItems', desc, 'alignItems', transformAlignItems)
  style2attr(node, 'setFlex', desc, 'flex', 'float')
  style2attr(node, 'setWidth', desc, 'width', 'int')
  style2attr(node, 'setHeight', desc, 'height', 'int')

  desc.node = node
  return node
}

function desc2child(desc, parentDesc) {
  var node = createNode(desc)
  var parentNode = parentDesc.node
  if (!parentNode) {
    console.error(parentDesc)
    throw new Error('Not parentNode')
  }
  parentNode.insertChild(node, parentDesc.children.length-1)

  document.calculateLayout(screenWidth, screenHeight, yoga.DIRECTION_LTR);
  desc.layout = node.getComputedLayout()
}

// ------ dom tree ------
const fs = require('fs')

let root = {
  ref: '_root',
  children: [],
  node: document
}

function findParentNode(parentid, parent) {
  if (parent.ref == parentid) {
    return parent
  }

  return parent.children.find(node => findParentNode(parentid, node))
}

function insertFragment(fragment, parent) {
  // console.log('fragment->', fragment, 'parent->', parent)
  // clean children
  const children = fragment.children || []
  delete fragment.children

  // 1 insert self
  if (!parent.children) {
    parent.children = []
  }

  var node = { parentid: parent.ref, ...fragment }
  parent.children.push(node)
  desc2child(node, parent)

  // 2 insert children
  // reassign
  parent = node
  children.forEach(fragment => insertFragment(fragment, parent))
}

function buildElementTree(parentid, info) {
  // console.log('buildElementTree', parentid, info)
  var parent = findParentNode(parentid, root)
  if (!parent) {
    throw new Error('Not find parent')
  }
  insertFragment(info, parent)
}

function dumpJsonFile() {
  fs.writeFileSync('tree.json', JSON.stringify(root, null, '\t'))
}

function dumpDom() {
}

tree = {
  buildElementTree,
  dumpJsonFile
}
module.exports = tree