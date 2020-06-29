/**
 * desc tree
 * collection of Desc
 */
const {document, desc2element} = require('./element-tree')
const descMap = {}

const fs = require('fs')

let root = {
  ref: '_root',
  children: [],
  element: document
}
descMap[root['ref']] = root

function findParentDesc(refid) {
  return descMap[refid]
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

  var desc = { parentid: parent.ref, ...fragment }
  parent.children.push(desc)
  desc2element(desc, parent)
  descMap[desc['ref']] = desc

  // 2 insert children
  // reassign
  parent = desc
  children.forEach(fragment => insertFragment(fragment, parent))
}

function buildDescTree(refid, info) {
  // console.log('buildElementTree', refid, info)
  var parent = findParentDesc(refid, root)
  if (!parent) {
    throw new Error('Not find parent')
  }
  insertFragment(info, parent)
}

function updateDescAttrs(refid, info) {
  const desc = findParentDesc(refid)
  if (info['value']) {
    desc.element.text = info['value']
  }
}

function dumpJsonFile() {
  fs.writeFileSync('tree.json', JSON.stringify(root, null, '\t'))
}

function dumpDom() {
}

tree = {
  buildDescTree,
  updateDescAttrs,
  dumpJsonFile
}
module.exports = tree