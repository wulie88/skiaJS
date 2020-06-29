/**
 * desc tree
 * collection of Desc
 */
const {document, desc2element} = require('./element-tree')
const descMap = {}

const fs = require('fs')

let root = {
  ref: '_',
  children: [],
  element: document
}
descMap[root['ref']] = root

function findDesc(refid) {
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

  let desc = { parentid: parent.ref, ...fragment }
  parent.children.push(desc)
  desc2element(desc, parent)
  descMap[desc['ref']] = desc

  // 2 insert children
  // reassign
  parent = desc
  children.forEach(fragment => insertFragment(fragment, parent))
}

function buildDescTree(parentid, info) {
  // console.log('buildElementTree', parentid, info)
  var parent = findDesc(parentid, root)
  if (!parent) {
    throw new Error(`Not find parent - ${parentid}`)
  }
  insertFragment(info, parent)
}

function updateDescAttrs(refid, info) {
  const desc = findDesc(refid)
  desc.element.update(info)
}

function dumpJsonFile() {
  fs.writeFileSync('desc-tree.json', JSON.stringify(root, null, '\t'))
}

function dumpDom() {
}

tree = {
  buildDescTree,
  updateDescAttrs,
  dumpJsonFile
}
module.exports = tree